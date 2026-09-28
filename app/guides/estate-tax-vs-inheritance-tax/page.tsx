import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const title = "Estate Tax vs Inheritance Tax: What Applies in Massachusetts?";
const description = "Who pays estate tax versus inheritance tax? Compare Massachusetts and federal rules and prepare questions for your estate attorney and CPA.";
const url = "https://www.preserveyourestate.com/guides/estate-tax-vs-inheritance-tax";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/guides/estate-tax-vs-inheritance-tax" },
  openGraph: {
    type: "article", url: "/guides/estate-tax-vs-inheritance-tax", siteName: "MSA Financial",
    title, description, publishedTime: "2026-09-28", modifiedTime: "2026-09-28",
    authors: ["Michael Cammarata, CFP®"],
    images: [{ url: "https://www.preserveyourestate.com/og?topic=Estate%20Tax%20vs%20Inheritance%20Tax&label=Educational%20guide", width: 1200, height: 630, alt: "Estate tax versus inheritance tax educational guide from MSA Financial" }],
  },
};

const JSON_LD = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  author: { "@type": "Person", "@id": "https://www.preserveyourestate.com/#michael", name: "Michael Cammarata", honorificSuffix: "CFP®", worksFor: { "@id": "https://www.preserveyourestate.com/#org" } },
  publisher: { "@type": "Organization", "@id": "https://www.preserveyourestate.com/#org", name: "MSA Financial, LLC" },
  mainEntityOfPage: url, datePublished: "2026-09-28", dateModified: "2026-09-28",
};

export default function EstateTaxVsInheritanceTaxGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Nav solid />
      <section className="page-hero">
        <div className="hero-glow"></div>
        <div className="wrap">
          <nav className="crumbs hero-anim d1" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#guides">Guides</Link><span>/</span><span>Estate tax vs inheritance tax</span></nav>
          <h1 className="hero-anim d2">Estate tax vs inheritance tax: <em>what applies in Massachusetts?</em></h1>
          <p className="lead hero-anim d3">An estate tax applies to the estate before distribution; an inheritance tax is tied to what a beneficiary receives. Massachusetts currently has an estate tax, not a separate inheritance tax on beneficiaries. Federal law also has an estate tax, but its rules and threshold differ from Massachusetts law. Another state may matter when property or the decedent has an out-of-state connection.</p>
          <p className="hero-anim d4" style={{ marginTop: "1.4rem" }}><span className="badge" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)", color: "var(--gold-pale)" }}>Educational guide · September 28, 2026</span></p>
        </div>
      </section>
      <section>
        <div className="wrap article">
          <h2>How do estate tax and inheritance tax differ?</h2>
          <div className="grid g2 stagger" aria-label="Educational comparison of estate tax and inheritance tax">
            <div className="coord-card"><h3>Estate tax: the estate is the starting point</h3><p>An estate tax is measured against the decedent&apos;s estate, not each person&apos;s individual share. The estate&apos;s personal representative or executor handles applicable filing and payment before distribution. Massachusetts and the federal government each have estate tax rules, but one jurisdiction&apos;s filing threshold does not replace the other&apos;s.</p></div>
            <div className="coord-card"><h3>Inheritance tax: the transfer to a beneficiary is the focus</h3><p>In states with an inheritance tax, the taxable transfer to a beneficiary may depend on the beneficiary&apos;s relationship to the decedent and the assets involved. The beneficiary&apos;s share bears the tax, though filing or payment mechanics vary by state and an estate may pay it on a beneficiary&apos;s behalf. Massachusetts does not currently impose this separate tax.</p></div>
          </div>
          <p className="fine">Sources reviewed September 28, 2026: <a href="https://www.mass.gov/info-details/massachusetts-estate-tax-guide">Massachusetts DOR Estate Tax Guide (updated April 23, 2026)</a>; <a href="https://www.mass.gov/technical-information-release/tir-86-4-mgl-c-65c-massachusetts-estate-tax">Massachusetts DOR TIR 86-4 (September 23, 1986)</a>, explaining the 1976 conversion from inheritance tax to estate tax; <a href="https://www.irs.gov/instructions/i706">IRS Form 706 instructions (July 2026)</a>; and <a href="https://www.nj.gov/treasury/taxation/inheritance-estate/inheritance.shtml">New Jersey Division of Taxation, Inheritance and Estate Tax (updated September 9, 2025)</a>.</p>

          <h2>Does Massachusetts charge tax on an inheritance?</h2>
          <p>Massachusetts does not impose a separate inheritance tax on the person receiving a bequest. Its estate tax is a transfer tax on the estate before beneficiaries receive property. That distinction does not mean every estate owes tax: for deaths on or after January 1, 2023, a Massachusetts estate tax return is generally required when the gross estate plus adjusted taxable gifts exceeds $2 million. The filing test is not simply the value of one beneficiary&apos;s inheritance. Massachusetts DOR also describes a credit for estates of decedents dying on or after January 1, 2023. The calculation and any amount due require the estate&apos;s actual facts. <a href="https://www.mass.gov/info-details/massachusetts-estate-tax-guide">Source: Massachusetts DOR Estate Tax Guide, updated April 23, 2026 (reviewed September 28, 2026)</a>.</p>
          <p>A Massachusetts resident receiving property from a decedent or property with connections to another state should not assume that Massachusetts rules resolve every question. For example, New Jersey describes inheritance tax rules for certain transfers by resident and nonresident decedents; it says a beneficiary&apos;s own state of residence is not the deciding factor under its rules. Ask a tax professional to examine the decedent&apos;s domicile, the location and type of property, and the relevant state&apos;s law. <a href="https://www.nj.gov/treasury/taxation/inheritance-estate/inheritance.shtml">Source: New Jersey Division of Taxation, updated September 9, 2025 (reviewed September 28, 2026)</a>.</p>

          <h2>Is the federal estate tax threshold the same as Massachusetts&apos;?</h2>
          <p>No. For a U.S. citizen or resident dying in 2026, the federal basic exclusion amount is $15 million. The IRS says an executor generally must file Form 706 when the gross estate plus adjusted taxable gifts and specific exemption exceeds that amount; a return may also be filed to elect portability even below the threshold. Federal estate tax applies to the taxable estate rather than to each beneficiary&apos;s share. This federal amount is not the Massachusetts filing threshold, and future years may change. <a href="https://www.irs.gov/instructions/i706">Source: IRS Instructions for Form 706 (July 2026), reviewed September 28, 2026</a>.</p>
          <p>For the broader Massachusetts planning context, read <Link href="/guides/massachusetts-estate-planning">what estate planning in Massachusetts involves</Link>. The <Link href="/calculator">Massachusetts estate tax calculator</Link> can provide an educational estimate, not a determination of filing requirements or tax due. A CPA should assess the applicable dates, valuations, gifts, deductions, and filings.</p>

          <h2>What should you ask your estate attorney and CPA?</h2>
          <div className="callout reveal"><ul>
            <li>Which person&apos;s domicile and which property locations could bring another state&apos;s estate or inheritance tax rules into the picture?</li>
            <li>Who is responsible for the estate&apos;s returns and payments, and could the terms of the documents allocate any tax differently among beneficiaries?</li>
            <li>What assets and prior taxable gifts belong in the Massachusetts and federal filing tests for the relevant date of death?</li>
            <li>Are beneficiary designations, ownership records, and signed documents consistent with the intended distribution? Your attorney can advise on legal changes; your CPA can advise on tax treatment.</li>
          </ul></div>
          <p>Michael Cammarata, CFP®, can help organize the financial account and ownership information for discussion with your chosen estate attorney and CPA. He does not make legal determinations or prepare tax filings. Rules and tax treatment depend on individual circumstances and can change.</p>
          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Next Step</p>
            <h3>Which estate tax questions belong in your next professional review?</h3>
            <p>Gather an asset and beneficiary inventory, try the educational Massachusetts estimate, then bring your questions to your estate attorney and CPA. If you would like help coordinating the financial information, schedule a conversation with MSA Financial.</p>
            <div className="hero-ctas"><Link className="btn btn-gold" href="/#booking">Book a Consultation <span className="arrow">→</span></Link><Link className="btn btn-ghost" href="/calculator">Use the Estate Tax Calculator</Link></div>
          </div>
          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>Investment advisory services are offered through MSA Financial, LLC, a Registered Investment Adviser (CRD #107768). Registration does not imply a certain level of skill or training. Michael Cammarata is not an attorney or CPA and does not provide legal or tax advice. He does not draft legal documents or prepare tax returns. He coordinates with clients&apos; existing estate attorneys and CPAs. This guide is for educational purposes only, not individualized investment, legal, or tax advice.</p>
        </div>
      </section>
      <Footer compact />
    </>
  );
}
