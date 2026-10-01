// Site-specific half of `npm run conformance`.
//
// scripts/anti-hardcode-lint.mjs is synced from the platform and only treats the TEMPLATE's
// chrome paths as hard failures. This site's chrome lives elsewhere, so the same rules are
// applied here: the nav and footer must read firm identity, nav and footer links from
// data/site-config.json (through lib/site-manifest.ts), never hold their own copy. A hardcoded
// copy is how a platform edit to the manifest "succeeds" and moves nothing.
import fs from "node:fs";
import { findHardcodeViolations } from "./anti-hardcode-lint.mjs";

const CHROME = ["components/Nav.tsx", "components/Footer.tsx"];

const manifest = JSON.parse(fs.readFileSync("data/site-config.json", "utf8"));
const brandLiterals = [manifest.brand?.legalName, manifest.brand?.displayName].filter(Boolean);
const files = CHROME.map((path) => ({ path, content: fs.readFileSync(path, "utf8") }));

const problems = findHardcodeViolations({ brandLiterals, files }).map((v) => `${v.path}: ${v.reason}`);

// The chrome must actually read the manifest-derived values.
const mustRead = {
  "components/Nav.tsx": ["headerNav", "headerCta", "@/lib/site-manifest"],
  "components/Footer.tsx": ["footerGroups", "footerLegal", "compliance.crd", "contact.phone", "brand.legalName", "@/lib/site-manifest"],
  "app/layout.tsx": ["seo.defaultTitle", "seo.titleTemplate", "@/lib/site-manifest"],
};
for (const [path, needles] of Object.entries(mustRead)) {
  const source = fs.readFileSync(path, "utf8");
  for (const needle of needles) {
    if (!source.includes(needle)) problems.push(`${path}: must read ${needle} (chrome derives from the manifest)`);
  }
}

// No literal copies of manifest values in the chrome.
for (const file of files) {
  for (const [label, value] of [
    ["phone", manifest.contact?.phone],
    ["CRD", manifest.compliance?.crd && `CRD #${manifest.compliance.crd}`],
    ["CTA label", manifest.header?.cta?.label],
    ...(manifest.footer?.legal ?? []).map((link) => [`legal link ${link.label}`, link.href.startsWith("http") ? link.href : null]),
    ...(manifest.header?.nav ?? []).map((item) => [`nav item ${item.label}`, `label: "${item.label}"`]),
  ]) {
    if (value && file.content.includes(value)) problems.push(`${file.path}: hardcoded ${label} (read it from site-manifest.ts)`);
  }
}

// Required blocks the chrome reads. A missing one would throw or render blank.
for (const path of [
  "brand.legalName",
  "brand.displayName",
  "brand.tagline",
  "contact.phone",
  "contact.address",
  "header.nav",
  "header.cta.href",
  "header.cta.label",
  "footer.groups",
  "footer.legal",
  "seo.siteUrl",
  "seo.titleTemplate",
  "seo.defaultTitle",
  "seo.defaultDescription",
  "compliance.crd",
]) {
  const value = path.split(".").reduce((o, k) => (o == null ? o : o[k]), manifest);
  if (value == null || value === "") problems.push(`data/site-config.json: missing ${path}`);
}
// The footer renders both disclosure paragraphs by position.
if ((manifest.compliance?.disclosures ?? []).length < 2) {
  problems.push("data/site-config.json: compliance.disclosures needs two paragraphs (short + full, both rendered)");
}

// This site has no blog (the guides are bespoke pages). Declaring one would point the
// platform's post machinery at a directory nothing renders.
if (manifest.blog?.enabled !== false) {
  problems.push("data/site-config.json: blog must be { enabled: false } (no post route exists)");
}

if (problems.length > 0) {
  console.error("Manifest wiring check FAILED:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log("Manifest wiring check passed.");
