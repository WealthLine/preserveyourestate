import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const guideUrl = "https://www.preserveyourestate.com/guides/ab-trust";
const maGuide = "https://www.mass.gov/info-details/estate-tax-guide";
const maLaw = "https://www.mass.gov/info-details/mass-general-laws-c65c-ss-2a";
const maForms = "https://www.mass.gov/info-details/dor-estate-tax-forms-and-instructions";
const irsExclusion = "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";
const irsBasis = "https://www.irs.gov/pub/irs-drop/rr-23-02.pdf";

export const metadata: Metadata = {
  title: "A/B Trust Planning in Massachusetts: Using Both $2 Million Exemptions",
  description:
    "A Massachusetts guide to credit shelter and QTIP trusts, estate tax illustrations, trust funding, and coordinating with an attorney and CPA. By Michael Cammarata, CFP®.",
  alternates: { canonical: "/guides/ab-trust" },
  openGraph: {
    type: "article",
    url: "/guides/ab-trust",
    siteName: "MSA Financial",
    title: "A/B Trust Planning in Massachusetts",
    description: "How married couples may use both Massachusetts estate tax exemptions through a properly designed and funded trust plan.",
    publishedTime: "2026-07-01",
    modifiedTime: "2026-09-29",
    authors: ["Michael Cammarata, CFP®"],
    images: [{
      url: "https://www.preserveyourestate.com/og?topic=A%2FB%20Trust%20Planning&label=Massachusetts%20guide",
      width: 1200,
      height: 630,
      alt: "MSA Financial guide to A/B trust planning in Massachusetts",
    }],
  },
};

const JSON_LD = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "A/B Trust Planning in Massachusetts: How Married Couples Use Both $2 Million Exemptions",
  description: "An educational guide to Massachusetts credit shelter and QTIP trusts, estate tax illustrations, and trust funding.",
  mainEntityOfPage: guideUrl,
  author: {
    "@type": "Person", "@id": "https://www.preserveyourestate.com/#michael",
    name: "Michael Cammarata", honorificSuffix: "CFP®", jobTitle: "Managing Partner and Owner",
    url: "https://www.preserveyourestate.com/#about", image: "https://www.preserveyourestate.com/michael-cammarata.jpg",
    worksFor: { "@id": "https://www.preserveyourestate.com/#org" },
  },
  publisher: { "@type": "Organization", "@id": "https://www.preserveyourestate.com/#org", name: "MSA Financial, LLC" },
  datePublished: "2026-07-01", dateModified: "2026-09-29",
};

const taxExamples = [
  ["$2,000,000", "$0"],
  ["$2,500,000", "$39,200"],
  ["$3,000,000", "$82,400"],
  ["$4,000,000", "$180,800"],
  ["$5,000,000", "$292,000"],
  ["$6,000,000", "$411,200"],
  ["$8,000,000", "$673,600"],
];

export default function AbTrustGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Nav solid />

      <section className="page-hero">
        <div className="hero-glow"></div>
        <div className="wrap">
          <nav className="crumbs hero-anim d1">
            <Link href="/">Home</Link><span>/</span><Link href="/#guides">Guides</Link><span>/</span><span>A/B Trust Planning</span>
          </nav>
          <h1 className="hero-anim d2">A/B Trust Planning <em>in Massachusetts</em></h1>
          <p className="lead hero-anim d3">How married couples may use both $2 million Massachusetts estate tax exemptions through credit shelter and marital trust planning.</p>
          <p className="hero-anim d4" style={{ marginTop: "1.4rem" }}>
            <span className="badge" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)", color: "var(--gold-pale)" }}>Estate Structure Guide</span>{" "}
            <span className="badge" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)", color: "var(--gold-pale)" }}>Updated September 2026</span>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap article">
          <h2>The short version</h2>
          <ul>
            <li>Massachusetts provides a $2 million estate tax threshold, but unlike the federal system, it does not allow a surviving spouse to inherit the first spouse&apos;s unused state exemption. <a href={maGuide}>Source: Massachusetts Department of Revenue</a>.</li>
            <li>An A/B trust can divide assets at the first death so each spouse&apos;s exemption may be used, depending on the estate and the trust&apos;s terms.</li>
            <li>Under the simplified assumptions below, an unplanned $4 million estate produces an estimated $180,800 Massachusetts estate tax at the second death. A properly designed and funded plan could reduce that amount, potentially to zero. Actual results depend on individual circumstances.</li>
            <li>The trust document alone is not enough. Titling and beneficiary designations must be reviewed with the estate planning team.</li>
          </ul>

          <h2>Why couples can lose an exemption</h2>
          <p>At the federal level, a surviving spouse may be able to use the first spouse&apos;s unused estate tax exclusion through a portability election. Massachusetts has no equivalent portability election. If everything passes outright to the surviving spouse, the first spouse&apos;s Massachusetts exemption may go unused. The survivor then owns the combined estate with only their own state exemption available. See the <a href={maGuide}>Massachusetts estate tax guide</a>.</p>

          <h2>How an A/B trust works</h2>
          <p>An attorney may design an A/B arrangement within a revocable trust. At the first death, the plan can divide assets between two trusts, subject to the document&apos;s funding formula and elections.</p>
          <h3>Trust B: the credit shelter trust</h3>
          <p>Also called a bypass or family trust, Trust B can receive assets up to the first spouse&apos;s available Massachusetts exemption. Depending on the terms, the surviving spouse may receive income and principal for health, education, maintenance, and support (HEMS). Assets that are not included in the survivor&apos;s estate generally pass to the named beneficiaries without a second estate tax on those assets.</p>
          <h3>Trust A: the QTIP or marital trust</h3>
          <p>Trust A can hold the remaining assets. If the trust meets the requirements and the appropriate election is made, qualified terminable interest property (QTIP) may receive the marital deduction under IRC §2056(b)(7). The surviving spouse must be entitled to all income at least annually. QTIP property is generally included in the survivor&apos;s estate at the second death. The executor and attorney should determine which federal and Massachusetts elections apply. See the <a href={maForms}>Massachusetts Form M-706 guidance</a>.</p>
          <div className="table-scroll">
            <table>
              <thead><tr><th scope="col">Feature</th><th scope="col">Trust B (credit shelter)</th><th scope="col">Trust A (QTIP)</th></tr></thead>
              <tbody>
                <tr><th scope="row">Funded with</th><td>Up to the first spouse&apos;s available state exemption, as the plan directs</td><td>Potentially the balance of the estate</td></tr>
                <tr><th scope="row">Surviving spouse&apos;s access</th><td>As specified in the trust, potentially income and principal for HEMS needs</td><td>All income at least annually; other access depends on the terms</td></tr>
                <tr><th scope="row">At the survivor&apos;s death</th><td>Generally excluded from the survivor&apos;s estate if properly structured</td><td>Generally included in the survivor&apos;s estate</td></tr>
                <tr><th scope="row">Income tax basis</th><td>Generally no second basis adjustment solely because the survivor dies</td><td>Generally adjusted at the survivor&apos;s death if included in the estate</td></tr>
                <tr><th scope="row">Final beneficiaries</th><td>Set by the trust&apos;s terms</td><td>Set by the trust&apos;s terms</td></tr>
              </tbody>
            </table>
          </div>
          <p>The beneficiary terms can matter especially in a blended family. Ask your attorney who can change them and under what circumstances. For basis treatment and exceptions, see <a href={irsBasis}>IRS Revenue Ruling 2023-2</a>.</p>

          <h2>How Massachusetts calculates the tax</h2>
          <p>For deaths under current law, Massachusetts uses a graduated schedule, Table B, based on the taxable estate after applicable deductions and adjustments, not simply a flat rate on the dollars over $2 million. It then allows a credit of up to $99,600 under M.G.L. c. 65C, §2A(f). The filing threshold, taxable estate, and resulting liability are different calculations. Read the <a href={maGuide}>Department of Revenue&apos;s computation and Table B</a> and <a href={maLaw}>the statute</a>.</p>
          <div className="table-scroll">
            <table>
              <thead><tr><th scope="col">Illustrative Massachusetts taxable estate</th><th scope="col">Estimated estate tax</th></tr></thead>
              <tbody>{taxExamples.map(([estate, tax]) => <tr key={estate}><td>{estate}</td><td>{tax}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="fine">Illustrative calculations using the <a href={maGuide}>Massachusetts Department of Revenue Table B</a> as of September 2026: assume all taxable property is subject to Massachusetts estate tax, no deductions and no prior taxable gifts; the Table B adjusted taxable estate is the stated taxable estate less $60,000, followed by the $99,600 state credit. This is not an estimate for a particular family. An estate planning attorney or CPA should calculate the actual liability.</p>

          <h2>Worked example: an $8 million estate</h2>
          <p>Holding asset values constant and using the same simplified Table B assumptions, the illustration compares what would be included in the survivor&apos;s estate at the second death. It does not account for growth, distributions, expenses, gifts, changes in law, or income tax consequences.</p>
          <div className="table-scroll">
            <table>
              <thead><tr><th scope="col">Approach</th><th scope="col">Estate taxed at second death</th><th scope="col">Estimated MA tax</th></tr></thead>
              <tbody>
                <tr><td>Everything passes outright to the survivor</td><td>$8,000,000</td><td>~$673,600</td></tr>
                <tr><td>A/B plan: $2 million to Trust B; $6 million to Trust A</td><td>$6,000,000</td><td>~$411,200</td></tr>
                <tr><th scope="row">Illustrative difference</th><td></td><td>~$262,400</td></tr>
              </tbody>
            </table>
          </div>
          <p className="fine">These figures are a current-law tax illustration, not a projection or a promised result. A properly drafted, elected, and funded plan is required; individual tax outcomes can differ. <a href={maGuide}>Source: Massachusetts Department of Revenue estate tax guide</a>.</p>

          <h2>A wrinkle worth asking your attorney about</h2>
          <p>Some older trusts use a formula tied to the federal estate tax exclusion. That amount is <a href={irsExclusion}>$15 million per person in 2026 according to the IRS</a>, much higher than the Massachusetts $2 million threshold. A formula tied to the federal figure may therefore direct more assets to the credit shelter trust than a Massachusetts plan intended. Whether tax is due at the first death depends on the actual terms, funding, deductions, and elections.</p>
          <p>Massachusetts permits a state QTIP election separate from a federal QTIP election on Form M-706. Ask your attorney whether an older trust supports the intended election and how its funding formula works. See the <a href={maForms}>Massachusetts estate tax forms and instructions</a>.</p>

          <h2>What to weigh before choosing this structure</h2>
          <ul>
            <li><b>Income tax basis.</b> Assets excluded from the survivor&apos;s estate generally do not receive another basis adjustment at that death; eligible QTIP assets generally do. That can create an income tax trade-off if heirs later sell appreciated assets. Treatment depends on the assets and trust terms. <a href={irsBasis}>IRS basis guidance</a>.</li>
            <li><b>Flexibility.</b> The survivor&apos;s access to Trust B principal depends on its terms, which may limit future choices.</li>
            <li><b>Administration.</b> Two trusts may mean separate accounting and tax filings, adding work and cost.</li>
            <li><b>Alternatives.</b> Titling changes, a disclaimer-based plan, or lifetime gifts may fit differently. An attorney and CPA can assess the legal and tax trade-offs.</li>
          </ul>

          <h2>Where these plans can go wrong: funding</h2>
          <p>A signed trust does not by itself change ownership of assets. The attorney&apos;s plan needs to be carried through to titling and beneficiary designations. Funding discussions often cover:</p>
          <ul>
            <li>Which taxable accounts should be retitled in accordance with the trust documents</li>
            <li>How IRA and workplace retirement plan beneficiary designations interact with the trust</li>
            <li>Ownership of the home and life insurance</li>
            <li>Whether each spouse&apos;s assets support the intended funding at the first death</li>
          </ul>
          <div className="callout reveal">Retirement accounts need separate beneficiary-designation review. They generally are not retitled into a living trust the way a taxable brokerage account may be. Make changes only with the attorney and tax professional&apos;s guidance.</div>

          <h2>Who does what</h2>
          <p>A Massachusetts estate planning attorney drafts the legal documents. Michael Cammarata, CFP®, does not draft trusts, provide legal or tax advice, or prepare tax returns. His role is to coordinate the financial planning and implementation with the professionals you engage.</p>
          <p>If you already work with an attorney and CPA, Michael can coordinate with them on the asset picture, titling, and the plan&apos;s financial assumptions. When needed, he can help identify independent professionals; clients choose and engage their attorney and CPA directly.</p>
          <ol>
            <li><b>Map the estate.</b> Organize assets, titling, and beneficiary designations for review with the attorney.</li>
            <li><b>Support the design.</b> Provide financial information and illustrations to help the attorney evaluate the trust structure.</li>
            <li><b>Coordinate funding.</b> Track the retitling and beneficiary changes specified by the attorney and follow up on implementation.</li>
            <li><b>Review periodically.</b> Revisit the plan when asset values, tax rules, or family circumstances change.</li>
          </ol>

          <div className="byline-card">
            <Image className="byline-photo" src="/michael-cammarata.jpg" alt="" width={60} height={60} />
            <div><b>Michael Cammarata, CFP®</b><p>Managing Partner and Owner, MSA Financial, LLC. Michael coordinates wealth, estate, tax, and retirement planning for Massachusetts families with their chosen attorneys and CPAs.</p></div>
          </div>

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Next Step</p>
            <h3>See how your Massachusetts estate is currently structured</h3>
            <p>A complimentary 45-minute review for Massachusetts families with $2 million or more in investable assets. No products. No obligation.</p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">Schedule a Complimentary Review <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" href="/calculator">Try the Estate Tax Calculator</Link>
            </div>
          </div>

          <p className="fine" style={{ marginTop: "2rem" }}>Michael Cammarata, CFP®, is an Investment Adviser Representative of MSA Financial, LLC (CRD #107768), a Registered Investment Adviser. This educational guide reflects Massachusetts law reviewed in September 2026. It is not legal, tax, or personalized investment advice. The figures above follow the <a href={maGuide}>Massachusetts Department of Revenue&apos;s Table B computation</a> under <a href={maLaw}>M.G.L. c. 65C, §2A</a>; actual results vary. Michael is not an attorney or CPA, does not draft legal documents or prepare tax returns, and coordinates with independent professionals selected and engaged by clients.</p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
