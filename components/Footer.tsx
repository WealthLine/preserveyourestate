import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import MsaLockup from "@/components/MsaLockup";
import { Fragment } from "react";
import { brand, compliance, contact, footerGroups, footerLegal, isExternalHref } from "@/lib/site-manifest";

// Chrome derives from data/site-config.json through lib/site-manifest.ts. The regulatory
// column lists every `footer.legal` link; the bottom row repeats the on-site ones.
const legalOnSite = footerLegal.filter((link) => !isExternalHref(link.href));

export default function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return {
      "component": (
        <footer className="footer">
          <div className="wrap">
            <Link href="/" className="footer-brand-link" aria-label="Preserve Your Estate, home">
              <BrandLogo variant="lockup" tone="dark" className="footer-brand-logo compact" />
            </Link>
            <div className="footer-legal" style={{ paddingTop: 0 }}>
              <p>
                {compliance.disclosures[0]}
              </p>
              <p>
                © 2026 {brand.legalName} · All Rights Reserved ·{" "}
                <Link href="/">PreserveYourEstate.com</Link>
                {legalOnSite.map((link) => (
                  <Fragment key={link.href}>
                    {" · "}
                    <Link href={link.href}>{link.label}</Link>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </footer>
      )
    }.component;
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand-link" aria-label="Preserve Your Estate, home">
              <BrandLogo variant="lockup" tone="dark" className="footer-brand-logo" />
            </Link>
            <p>
              {brand.tagline}
            </p>
            <p style={{ marginTop: "0.8rem" }}>{`SEC Registered RIA · CRD #${compliance.crd}`}</p>
            <div className="footer-adviser-mark">
              <MsaLockup />
            </div>
          </div>
          <div>
            <h4>{footerGroups[0]?.heading || "Quick Links"}</h4>
            <ul>
              {(footerGroups[0]?.links || []).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Regulatory</h4>
            <p>
              <b style={{ color: "rgba(255,255,255,0.85)" }}>{brand.legalName}</b>
              <br />
              {`SEC Registered Investment Adviser · CRD #${compliance.crd}`}
              <br />
              {contact.address}
              <br />
              All offices: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
            <ul style={{ marginTop: "1.2rem" }}>
              {footerLegal.map((link) => (
                <li key={link.href}>
                  {isExternalHref(link.href) ? (
                    <a href={link.href} rel="noopener noreferrer" target="_blank">
                      {`${link.label} →`}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            {compliance.disclosures[1]}
          </p>
          <p>
            © 2026 {brand.legalName} · All Rights Reserved ·{" "}
            {legalOnSite.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 ? " · " : null}
                <Link href={link.href}>{link.label}</Link>
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
