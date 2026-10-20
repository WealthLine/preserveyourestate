import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

/**
 * The post `published:` rule (ENG-1334). In every .md/.mdx under the
 * manifest's `blog.postsDir` (default `data/blog`), a top-level frontmatter
 * `published:` must be `true` or `false`, quoted or bare. The template's
 * parser (`src/lib/blog/frontmatter.ts`) reads any other value as false, so a
 * post dated `published: "2026-10-15"` is quietly held: retirement-roadmap-
 * experts lost 18 posts that way. Standalone on purpose — it needs no site
 * chrome, no build and no dependency — so contract-verify.yml runs it on
 * every site, whatever the site's own `conformance` script says.
 */

const DEFAULT_POSTS_DIR = "data/blog";
const POST_FILE_RE = /\.mdx?$/i;
// Same delimiter tolerance as frontmatter.ts's FRONTMATTER_RE; a match must start at index 0.
const FRONTMATTER_RE = /^(?:﻿)?---[ \t]*\r?\n([\s\S]*?)^---[ \t]*\r?(?:\n|$)/m;

/** frontmatter.ts's parseScalar: strips only a matching quote pair. */
function parseScalar(raw) {
  const value = raw.trim();
  if (value.length < 2) return value;
  const quote = value[0];
  if ((quote !== '"' && quote !== "'") || value.at(-1) !== quote) return value;
  if (quote === '"') {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1).replaceAll('\\"', '"').replaceAll("\\\\", "\\");
    }
  }
  return value.slice(1, -1).replaceAll("''", "'");
}

/**
 * The raw values of every top-level `published:` key in a post's frontmatter,
 * read as frontmatter.ts reads them: indented lines belong to a block and are
 * never top-level keys. A file without a frontmatter block has none.
 */
export function publishedValues(content) {
  const match = content.match(FRONTMATTER_RE);
  if (!match || match.index !== 0) return [];
  const values = [];
  for (const line of match[1].split(/\r?\n/)) {
    if (line.trim() === "" || line.length !== line.trimStart().length) continue;
    const colon = line.indexOf(":");
    if (colon <= 0) continue;
    if (line.slice(0, colon).trim() !== "published") continue;
    values.push(line.slice(colon + 1).trim());
  }
  return values;
}

/** Why this post's `published:` is wrong, or null when it is absent, true or false. */
export function publishedProblem(content) {
  for (const raw of publishedValues(content)) {
    const value = parseScalar(raw);
    if (value !== "true" && value !== "false") {
      return `published: ${raw || "(empty)"} is not true or false, so the site reads it as false and hides the post`;
    }
  }
  return null;
}

/** The posts directory the manifest declares, relative to `root`. Throws when it cannot be read. */
export function postsDirFor(root) {
  const manifestPath = path.join(root, "data/site-config.json");
  if (!fs.existsSync(manifestPath)) return DEFAULT_POSTS_DIR;
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    throw new Error(`data/site-config.json is not valid JSON (${error.message})`);
  }
  const declared = manifest?.blog?.postsDir;
  if (declared === undefined || declared === null || declared === "") return DEFAULT_POSTS_DIR;
  if (typeof declared !== "string") throw new Error("blog.postsDir in data/site-config.json is not a string");
  const resolved = path.resolve(root, declared);
  if (resolved !== root && !resolved.startsWith(`${root}${path.sep}`)) {
    throw new Error(`blog.postsDir "${declared}" points outside the repository`);
  }
  return declared;
}

function postFiles(directory) {
  const found = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) found.push(...postFiles(full));
    else if (entry.isFile() && POST_FILE_RE.test(entry.name)) found.push(full);
  }
  return found;
}

/** Every post under the site's posts directory whose `published:` is wrong. */
export function checkPostFrontmatter(root = process.cwd()) {
  const resolvedRoot = path.resolve(root);
  const postsDir = postsDirFor(resolvedRoot);
  const directory = path.resolve(resolvedRoot, postsDir);
  if (!fs.existsSync(directory)) return { postsDir, checked: 0, failures: [] };
  const files = postFiles(directory).sort();
  const failures = [];
  for (const file of files) {
    const problem = publishedProblem(fs.readFileSync(file, "utf8"));
    if (problem) failures.push({ file: path.relative(resolvedRoot, file), problem });
  }
  return { postsDir, checked: files.length, failures };
}

function main() {
  let result;
  try {
    result = checkPostFrontmatter();
  } catch (error) {
    console.error(`check-post-frontmatter: ${error.message}`);
    process.exit(1);
  }
  if (result.failures.length > 0) {
    for (const { file, problem } of result.failures) console.error(`${file}: ${problem}`);
    console.error(
      `check-post-frontmatter: ${result.failures.length} post(s) in ${result.postsDir} FAILED. ` +
        "A post's date goes in date: or publishedAt:, never in published:.",
    );
    process.exit(1);
  }
  console.log(`check-post-frontmatter: ${result.checked} post(s) in ${result.postsDir} passed.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
