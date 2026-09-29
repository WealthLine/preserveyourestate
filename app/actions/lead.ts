"use server";

import { Resend } from "resend";
import siteConfig from "../../data/site-config.json";

export type LeadState = { status: "idle" | "success" | "error"; message?: string };

const FIELDS = [
  ["b-first", "First Name"],
  ["b-last", "Last Name"],
  ["b-email", "Email"],
  ["b-phone", "Phone"],
  ["b-assets", "Approximate Investable Assets"],
  ["b-timeline", "Retirement Timeline"],
  ["b-concern", "Primary Planning Concern"],
  ["b-time", "Best Time to Reach"],
  ["b-notes", "Notes"],
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: bots fill every input, people never see this one.
  if (field(formData, "company")) return { status: "success" };

  const intent = field(formData, "intent") === "guide" ? "guide" : "review";
  const values = Object.fromEntries(FIELDS.map(([name]) => [name, field(formData, name)])) as Record<
    (typeof FIELDS)[number][0],
    string
  >;

  const first = values["b-first"];
  const email = values["b-email"];
  if (!first || !values["b-last"] || !EMAIL_RE.test(email) || !values["b-assets"]) {
    return { status: "error", message: "Please fill in your name, a valid email, and investable assets." };
  }
  if (intent === "review" && !values["b-phone"]) {
    return { status: "error", message: "Please add a phone number so Michael's office can reach you." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL?.split(",").map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !from || !to?.length) {
    console.error("Lead form: RESEND_API_KEY, LEAD_FROM_EMAIL, or LEAD_TO_EMAIL is not set");
    return { status: "error", message: `Something went wrong. Please call ${siteConfig.contact.phone}.` };
  }

  const resend = new Resend(apiKey);
  const label = intent === "review" ? "Complimentary Review request" : "Free Guide request";
  const name = `${first} ${values["b-last"]}`;
  const rows = FIELDS.filter(([key]) => values[key]);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New ${label}: ${name}`,
    text: [`New ${label} from ${siteConfig.seo.siteUrl}`, "", ...rows.map(([key, l]) => `${l}: ${values[key]}`)].join("\n"),
    html: `<h2 style="font-family:sans-serif">New ${label}</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
${rows
  .map(
    ([key, l]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top">${l}</td><td style="padding:4px 0">${escapeHtml(values[key]).replace(/\n/g, "<br>")}</td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-family:sans-serif;font-size:12px;color:#888">Submitted via ${escapeHtml(siteConfig.seo.siteUrl)}. Reply to this email to respond to ${escapeHtml(name)}.</p>`,
  });

  if (error) {
    console.error("Lead form: Resend notification failed", error);
    return { status: "error", message: `Something went wrong. Please try again or call ${siteConfig.contact.phone}.` };
  }

  const guideUrl = process.env.GUIDE_URL;
  const guideIntro = "Thank you for requesting The 2026 Massachusetts Pre-Retiree's Guide to Estate & Tax Planning.";
  let body: string;
  let bodyHtml: string;
  if (intent === "review") {
    body = "Thank you for requesting a complimentary review. Michael's office will reach out within one business day to schedule a time.";
    bodyHtml = escapeHtml(body);
  } else if (guideUrl) {
    body = `${guideIntro} You can download it here: ${guideUrl}`;
    bodyHtml = `${escapeHtml(guideIntro)} <a href="${escapeHtml(guideUrl)}">Download the guide</a>.`;
  } else {
    body = `${guideIntro} Michael's office will send it to you shortly.`;
    bodyHtml = escapeHtml(body);
  }

  const confirmation = await resend.emails.send({
    from,
    to: email,
    replyTo: to,
    subject: intent === "review" ? "Your complimentary review request" : "Your Massachusetts estate & tax planning guide",
    text: `Hi ${first},\n\n${body}\n\nQuestions in the meantime? Reply to this email or call ${siteConfig.contact.phone}.\n\nMichael Cammarata, CFP®\n${siteConfig.brand.legalName}`,
    html: `<div style="font-family:sans-serif;font-size:15px;line-height:1.5">
<p>Hi ${escapeHtml(first)},</p>
<p>${bodyHtml}</p>
<p>Questions in the meantime? Reply to this email or call ${escapeHtml(siteConfig.contact.phone)}.</p>
<p>Michael Cammarata, CFP®<br>${escapeHtml(siteConfig.brand.legalName)}</p>
<p style="font-size:12px;color:#888">${escapeHtml(siteConfig.compliance.disclosures[0])}</p>
</div>`,
  });
  if (confirmation.error) console.error("Lead form: Resend confirmation failed", confirmation.error);

  return { status: "success" };
}
