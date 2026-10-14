import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/types-of-trusts";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Types of Trusts in Massachusetts: A Plain-English Guide";
const SEO_DESCRIPTION =
  "Types of trusts explained for Massachusetts families: revocable, irrevocable, living, testamentary, credit shelter and QTIP, plus who coordinates each step.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Types%20of%20Trusts%20in%20Massachusetts&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const IRC_671 = "https://www.law.cornell.edu/uscode/text/26/671";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "Which type of trust should my family use?",
    a: "This guide cannot recommend a trust for any household. Which structure, if any, may fit depends on your goals, family, assets, and the federal and Massachusetts rules in effect, and it is a decision for you, your attorney, and your CPA. The guide describes categories so you can ask better questions.",
  },
  {
    q: "Does a financial advisor draft a trust?",
    a: "No. An attorney drafts and finalizes trust documents, and a CPA advises on tax filings and tax effects. A financial advisor, such as Michael Cammarata, CFP®, may coordinate the financial information, account titling, and follow-up among those professionals. He is not an attorney or CPA and does not draft legal documents.",
  },
  {
    q: "Is a living trust the same as a revocable trust?",
    a: "Often, but not always. A living trust is created during your lifetime, and many living trusts are revocable, meaning the person who created the trust may generally change or end it. A living trust can also be irrevocable. Your attorney can explain which features your documents actually include.",
  },
  {
    q: "Does signing a trust document finish the job?",
    a: "Not necessarily. A trust may only govern the assets that are retitled into it or that name it through a beneficiary designation. Funding is a separate follow-through step, and gaps may mean an asset passes under a will, a beneficiary designation, or state default rules instead.",
  },
];

const FAQ_ITEMS: FaqItem[] = FAQ_TEXT;

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  alternates: { canonical: GUIDE_PATH },
  openGraph: {
    type: "article",
    url: GUIDE_PATH,
    siteName: "MSA Financial",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to types of trusts in Massachusetts",
      },
    ],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${GUIDE_URL}#article`,
      headline: SEO_TITLE,
      description:
        "An educational overview of the types of trusts Massachusetts households commonly hear about, including revocable and irrevocable, living and testamentary, credit shelter and QTIP trusts, with a short look at grantor, spendthrift, charitable and special-needs trusts and how an advisor coordinates with the attorney and CPA.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
      citation: [MA_ESTATE_TAX_GUIDE, IRC_671],
    },
    {
      "@type": "Person",
      "@id": "https://www.preserveyourestate.com/#michael",
      name: "Michael Cammarata",
      honorificSuffix: "CFP®",
      jobTitle: "Managing Partner and Owner",
      url: "https://www.preserveyourestate.com/#about",
      image: "https://www.preserveyourestate.com/michael-cammarata.jpg",
      worksFor: { "@id": "https://www.preserveyourestate.com/#org" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.preserveyourestate.com/#org",
      name: "MSA Financial, LLC",
      url: "https://www.preserveyourestate.com",
    },
    {
      "@type": "FAQPage",
      "@id": `${GUIDE_URL}#faq`,
      mainEntity: FAQ_TEXT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function TypesOfTrustsGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav solid />

      <section className="page-hero">
        <div className="hero-glow"></div>
        <div className="wrap">
          <nav className="crumbs hero-anim d1" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#guides">Guides</Link>
            <span>/</span>
            <span>Types of Trusts</span>
          </nav>
          <h1 className="hero-anim d2">
            What are the main <em>types of trusts</em> Massachusetts families review?
          </h1>
          <p className="lead hero-anim d3">
            A plain-English overview of the trust categories you may hear about from your
            attorney, how they differ at a concept level, and how the attorney, CPA and financial
            advisor each fit in. It is educational and does not recommend any structure.
          </p>
          <p className="hero-anim d4" style={{ marginTop: "1.4rem" }}>
            <span
              className="badge"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "var(--gold-pale)",
              }}
            >
              Estate Structure Guide · Updated October 2026
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap article guide-fiduciary">
          <h2>What are the main types of trusts Massachusetts families review?</h2>
          <p>
            Massachusetts families most often hear about revocable and irrevocable trusts, living
            and testamentary trusts, credit shelter (A/B) trusts, and QTIP trusts, along with
            charitable and special-needs trusts. An attorney drafts each one, and a CPA reviews
            the tax effects. This guide explains the categories only and does not recommend any
            structure.
          </p>

          <div className="callout reveal">
            <p>
              <b>Key takeaways</b>
            </p>
            <ul>
              <li>
                Trust labels describe different features. One trust may be both a living trust and
                a revocable trust, and a credit shelter trust may be created inside a living trust.
              </li>
              <li>
                Each feature may bring a trade-off, such as less flexibility, added administration,
                or different tax treatment.
              </li>
              <li>
                A trust may only govern the assets that are actually retitled into it or directed
                to it, so the follow-through matters as much as the document.
              </li>
              <li>
                Your attorney decides what the documents say, and your CPA advises on the tax
                effects. Neither this guide nor an advisor can recommend a structure for you.
              </li>
            </ul>
          </div>

          <div className="table-scroll">
            <table>
              <caption className="fine" style={{ textAlign: "left", padding: "0 0 0.6rem" }}>
                Trust types at a glance (concept level only)
              </caption>
              <thead>
                <tr>
                  <th scope="col">Trust type</th>
                  <th scope="col">General idea</th>
                  <th scope="col">A trade-off to ask about</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Revocable</th>
                  <td>The person who created it may generally change or end it</td>
                  <td>May offer less separation from the creator&apos;s own estate</td>
                </tr>
                <tr>
                  <th scope="row">Irrevocable</th>
                  <td>Generally cannot be changed or ended easily once it is created</td>
                  <td>May limit control and flexibility</td>
                </tr>
                <tr>
                  <th scope="row">Living (inter vivos)</th>
                  <td>Created and signed during your lifetime</td>
                  <td>May need assets retitled into it to work as drafted</td>
                </tr>
                <tr>
                  <th scope="row">Testamentary</th>
                  <td>Created by a will and takes effect after death</td>
                  <td>May involve the probate court process</td>
                </tr>
                <tr>
                  <th scope="row">Credit shelter (A/B)</th>
                  <td>May use the first spouse&apos;s available exemption</td>
                  <td>May add administration and limit the survivor&apos;s access</td>
                </tr>
                <tr>
                  <th scope="row">QTIP (marital)</th>
                  <td>May qualify for the marital deduction while the first spouse names the remainder beneficiaries</td>
                  <td>Generally included in the survivor&apos;s estate, so it may defer tax rather than remove it</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What is the key difference between a living trust and an irrevocable trust?</h2>
          <p>
            The two labels answer different questions. &ldquo;Living&rdquo; says when the trust is
            created, which is during your lifetime. &ldquo;Revocable&rdquo; or
            &ldquo;irrevocable&rdquo; says whether it can be changed afterward. Many living trusts
            are revocable, so people often use the words interchangeably, but a living trust may
            also be irrevocable. The practical difference is usually control versus separation.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>Revocable trust</h3>
              <ul>
                <li>The creator may generally amend or revoke it while alive and competent.</li>
                <li>It is generally treated as part of the creator&apos;s own estate and tax picture.</li>
                <li>It may let a successor trustee manage assets if the creator cannot, depending on how it is funded.</li>
                <li>It generally does not, by itself, reduce a taxable estate.</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>Irrevocable trust</h3>
              <ul>
                <li>It is generally difficult to change once assets are transferred in.</li>
                <li>It may be treated as separate from the creator for some estate tax purposes, depending on its terms.</li>
                <li>It may involve gift tax reporting and different income tax and basis treatment.</li>
                <li>It may reduce the creator&apos;s control and access to the assets.</li>
              </ul>
            </div>
          </div>
          <p>
            Whether any trust is treated as inside or outside an estate depends on its exact terms
            and the law in effect, so this is a topic for your attorney and CPA.
          </p>

          <h2>What is the difference between a living trust and a testamentary trust?</h2>
          <p>
            A living trust is signed while you are alive and may take effect right away. A
            testamentary trust is written into a will and is created only after death, so the will
            generally has to go through the probate process first. Some families use a living trust
            to manage assets during life and at death. Others use a will with testamentary trusts,
            for example to hold an inheritance for a younger beneficiary. Each path may bring
            different cost, timing, and privacy considerations, and your attorney can explain how
            Massachusetts procedures apply to your documents.
          </p>
          <p>
            Because a living trust may only govern what it holds, a signed document is not the end
            of the process. Read{" "}
            <Link href="/guides/funding-a-trust">
              how a Massachusetts trust may be funded and who coordinates each step
            </Link>{" "}
            for the account-by-account follow-through.
          </p>

          <h2>What are credit shelter (A/B) and QTIP trusts?</h2>
          <p>
            These two terms come up most often for married couples with larger estates. A credit
            shelter trust, also called a bypass or family trust, may hold assets up to the first
            spouse&apos;s available exemption so that exemption is not unused. A QTIP (qualified
            terminable interest property) trust may hold the remaining assets, may qualify for the
            marital deduction if the requirements and election are met, and generally lets the
            first spouse decide who receives the remainder after the survivor. Together, they are
            often described as an A/B arrangement, though either may be used on its own and an
            attorney may design them in other ways.
          </p>
          <p>
            For the structure and a worked example, read{" "}
            <Link href="/guides/ab-trust">
              how a credit shelter or A/B trust may use both spouses&apos; Massachusetts estate tax
              exemptions
            </Link>
            . For the marital trust piece, see{" "}
            <Link href="/guides/qtip-trust">
              what a QTIP trust is and what the requirements may be
            </Link>
            .
          </p>

          <h2>How does the Massachusetts estate tax threshold relate to these trust types?</h2>
          <p>
            The threshold is one reason these categories come up in Massachusetts. According to the
            Massachusetts Department of Revenue, a Massachusetts estate tax return is generally
            required for a decedent dying on or after January 1, 2023 when the gross estate plus
            adjusted taxable gifts exceeds $2,000,000, and a credit of $99,600 may reduce the tax.
            Whether any tax is due, and whether a particular trust type would change that result,
            depends on the size of the estate, the document terms, elections, and the law at the
            time.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026). Verified against mass.gov as of October 14, 2026.
            Thresholds, credits and calculation steps may change, and the tax for any estate is a
            question for your attorney and CPA.
          </p>
          <p>
            To organize a general estimate before you speak with your professionals, use the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link>, an educational
            tool and not legal or tax advice. For the wider picture, see the{" "}
            <Link href="/guides/massachusetts-estate-planning">
              Massachusetts estate planning guide
            </Link>
            .
          </p>

          <h2>What is a grantor trust?</h2>
          <p>
            A grantor trust is a trust whose income is generally taxed to the person who created
            it (the grantor) under federal income tax rules. A revocable living trust is commonly a
            grantor trust, and some irrevocable trusts are drafted to be grantor trusts as well. The
            label is about income tax treatment, not about whether a trust is revocable. Your CPA
            can explain how the rules apply to a specific trust.
          </p>
          <p className="fine">
            Source: 26 U.S.C. §671 and related sections,{" "}
            <a href={IRC_671} target="_blank" rel="noopener noreferrer">
              Cornell Legal Information Institute
            </a>
            . Reviewed October 14, 2026. Rules may change.
          </p>

          <h2>What is a spendthrift trust?</h2>
          <p>
            A spendthrift trust includes a provision that limits a beneficiary&apos;s ability to
            transfer an interest in the trust, and may limit creditors&apos; ability to reach it
            before a distribution is made. Families sometimes ask about this feature when a
            beneficiary is young or when a trustee, rather than the beneficiary, may need to
            control timing. State law sets limits on how far these provisions go, and a trustee
            adds administration and cost. Ask your attorney whether any trust you are considering
            includes it.
          </p>

          <h2>What is a charitable trust?</h2>
          <p>
            A charitable trust is a trust set up to benefit a charity, and some versions also pay
            income to the donor or family for a period. Charitable remainder and charitable lead
            trusts are two commonly discussed categories. They involve specific rules, irrevocable
            decisions, and tax reporting, so they are generally reviewed with an attorney and CPA
            well before any assets are transferred.
          </p>

          <h2>What is a special-needs trust?</h2>
          <p>
            A special-needs trust is a category of trust that may be drafted so a beneficiary with
            a disability can receive support without necessarily affecting eligibility for
            means-tested government benefits. Eligibility rules are detailed and change over time,
            and drafting errors may have consequences, so this is a topic for an attorney with
            experience in that area.
          </p>

          <h2>What trade-offs may apply to almost any trust?</h2>
          <ul className="strategy-list stagger">
            <li>
              <h3>Cost and administration</h3>
              <p>
                Drafting, funding, and maintaining a trust may take legal fees, time, and ongoing
                recordkeeping. Some trusts may also need their own tax filings.
              </p>
            </li>
            <li>
              <h3>Less flexibility</h3>
              <p>
                The more a trust is meant to stand apart from you, the less easily it may be
                changed if your circumstances shift.
              </p>
            </li>
            <li>
              <h3>Changing rules</h3>
              <p>
                Federal and Massachusetts rules may change, and an older document may not fit
                current thresholds the way it was first intended.
              </p>
            </li>
            <li>
              <h3>Funding gaps</h3>
              <p>
                An unfunded or partly funded trust may not control the assets you expected it to,
                and retirement accounts raise their own beneficiary questions. See{" "}
                <Link href="/retirement-planning">
                  how retirement income planning may coordinate with IRA and plan beneficiary
                  decisions
                </Link>
                .
              </p>
            </li>
          </ul>

          <h2>How do the attorney, CPA and advisor work together on a trust?</h2>
          <p>
            Michael Cammarata, CFP®, is not an attorney or CPA and does not draft trusts, give legal
            or tax advice, or prepare tax returns. His role is to coordinate the financial side of
            the work with the professionals you choose. If you need an introduction, he can offer
            one from a network of independent Massachusetts professionals, and you decide whom to
            engage. Read more about{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor coordinates estate planning with your attorney and CPA
            </Link>
            .
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Draft</span>
              <h3>The attorney drafts the documents</h3>
              <p>
                Your attorney explains the options the law may allow and drafts and finalizes any
                trust or will.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Review</span>
              <h3>The CPA reviews the tax effects</h3>
              <p>
                Your CPA reviews income, gift, and estate tax effects and handles any tax filings
                the trust may require.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>The advisor coordinates funding and titling</h3>
              <p>
                The advisor organizes account information and follows the retitling and
                beneficiary changes the attorney specifies, noting open items for the CPA.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Revisit</span>
              <h3>The household reviews as things change</h3>
              <p>
                Family, asset values, and tax rules change, which may call for another look with
                your professionals.
              </p>
            </div>
          </div>

          <h2>What questions should you bring to your attorney and CPA?</h2>
          <p>
            These questions are educational starting points. Your professionals can answer them
            for your situation.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>For your attorney</h3>
              <ul>
                <li>Which trust features, if any, does my current plan already include?</li>
                <li>What would be hard to change later, and what could I still adjust?</li>
                <li>Does an older document formula still fit the current Massachusetts threshold?</li>
                <li>Which assets need to be retitled or have beneficiary designations updated?</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>For your CPA</h3>
              <ul>
                <li>How would a trust&apos;s income be reported, and who files its returns?</li>
                <li>How may gift, estate, or income tax basis rules apply to assets in the trust?</li>
                <li>What filings might be required at each stage?</li>
                <li>How should retirement account beneficiaries be reviewed against the plan?</li>
              </ul>
            </div>
          </div>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Review how your trust documents and accounts fit together in one conversation</h3>
            <p>
              Schedule a conversation to discuss your account inventory and the questions you may
              want to take to your attorney and CPA.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This guide is for educational purposes only and does not constitute individualized
            legal, tax, or investment advice. It does not recommend any trust or structure for any
            reader. Investment advisory services are offered through MSA Financial, LLC, a
            Registered Investment Adviser (CRD #107768). MSA Financial is an SEC-registered
            investment adviser. Registration with the SEC does not imply a certain level of skill
            or training. Investing involves risk, including the potential loss of principal.
            Michael Cammarata is not an attorney or CPA and does not provide legal or tax advice.
            He does not draft legal documents or prepare tax returns. He coordinates with
            clients&apos; existing estate attorneys and CPAs. Tax treatment depends on individual
            circumstances, and legal and tax advice should be obtained from your own attorney and
            CPA. The Massachusetts estate tax figures were verified against mass.gov as of October
            14, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
