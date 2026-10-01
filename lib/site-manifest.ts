/* Relative import, not the `@/` alias, so scripts that load this outside Next still resolve it. */
import manifest from "../data/site-config.json";

/**
 * Typed access to data/site-config.json: the manifest the WealthReach platform reads and
 * writes (contract v3). Shared chrome and firm identity derive from it, so a platform edit
 * (Reach changing the nav, the phone number, a footer link) moves the rendered site instead
 * of only describing it:
 *
 *   brand      -> footer legal name and tagline, Open Graph site name
 *   contact    -> footer phone and office list, lead-form error and confirmation copy
 *   header     -> nav tabs (desktop + mobile, scroll-spy targets) and the "Schedule a Review" CTA
 *   footer     -> Quick Links column, the regulatory links and the bottom-row legal links
 *   seo        -> site origin, default title, title template, default description
 *   compliance -> both footer disclosure paragraphs, the CRD number, lead-form email footer
 *
 * What deliberately stays in code:
 *   - The "Preserve Your Estate" wordmark (components/BrandLogo.tsx) and its "home" labels:
 *     that is the site's own name, while `brand` is the adviser of record (MSA Financial).
 *   - The copyright year and the "All Rights Reserved" line around the legal name.
 *   - `theme`. It DESCRIBES the palette for the platform; the real tokens live in globals.css.
 *   - Page content, including the guides (bespoke pages, not a blog: `blog.enabled` is false).
 */

export type ManifestLink = { label: string; href: string };
export type ManifestFooterGroup = { heading: string; links: ManifestLink[] };

export const siteManifest = manifest;

export const brand: { legalName: string; displayName: string; tagline: string; logoUrl: string } =
  manifest.brand;

export const contact: { phone: string; address: string; calendarUrl: string } = manifest.contact;

export const headerNav: readonly ManifestLink[] = manifest.header.nav;

export const headerCta: ManifestLink = manifest.header.cta;

export const footerGroups: readonly ManifestFooterGroup[] = manifest.footer.groups;

export const footerLegal: readonly ManifestLink[] = manifest.footer.legal;

export const seo: {
  siteUrl: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
} = manifest.seo;

export const compliance: { disclosures: string[]; formAdvUrl: string; crd: string } =
  manifest.compliance;

/** Off-site links (SEC filings) open in a new tab; site paths stay in the app router. */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
