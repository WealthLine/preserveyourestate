import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/qtip-trust";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "QTIP Trust in Massachusetts: What It Is and How It Works";
const SEO_DESCRIPTION =
  "What is a QTIP trust? Learn how it may work for married Massachusetts couples, how it may fit with an A/B trust, and what to ask your attorney and CPA.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=QTIP%20Trust%20in%20Massachusetts&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const MA_FORMS = "https://www.mass.gov/info-details/dor-estate-tax-forms-and-instructions";
const IRC_2056 = "https://www.law.cornell.edu/uscode/text/26/2056";
const TREAS_REG_QTIP = "https://www.law.cornell.edu/cfr/text/26/20.2056(b)-7";
const IRS_706_INSTRUCTIONS = "https://www.irs.gov/instructions/i706";
const IRS_WHATS_NEW =
  "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "What does QTIP stand for?",
    a: "QTIP stands for qualified terminable interest property. It describes property in which a surviving spouse has a qualifying income interest for life, and for which the executor of the first spouse's estate makes an election so the property may qualify for the marital deduction. Your estate planning attorney determines whether a trust can meet the requirements.",
  },
  {
    q: "Is a QTIP trust the same as an A/B trust?",
    a: "Not exactly. An A/B trust is a two-trust arrangement in which one trust, often called the credit shelter or bypass trust, uses the first spouse's available exemption, and the other, often called the marital trust, may be a QTIP trust. A QTIP trust is one possible component of an A/B plan, and it may also be used on its own. Your attorney can explain which design fits your documents.",
  },
  {
    q: "Does a QTIP trust avoid the Massachusetts estate tax?",
    a: "A QTIP trust generally defers estate tax rather than avoiding it. If the election is made, the trust assets may qualify for the marital deduction at the first death, but QTIP property is generally included in the surviving spouse's estate at the second death. Whether any Massachusetts estate tax is due depends on the size of the estate, the trust terms, the elections made, and the law at that time.",
  },
  {
    q: "Who decides who receives a QTIP trust's assets after the surviving spouse dies?",
    a: "The first spouse generally decides, through the trust document, because the surviving spouse receives the income rather than the right to redirect the principal. That feature is why some families, including blended families, consider this structure. It may also limit the surviving spouse's flexibility, so it is worth discussing with your attorney.",
  },
  {
    q: "Does the financial advisor draft or elect a QTIP trust?",
    a: "No. Your estate planning attorney drafts the trust, the executor makes any election on the estate tax return, and your CPA advises on tax filings and consequences. A financial advisor, such as Michael Cammarata, CFP®, may coordinate the financial information, account titling, and follow-up among those professionals. He is not an attorney or CPA.",
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
    publishedTime: "2026-10-08",
    modifiedTime: "2026-10-08",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to QTIP trusts in Massachusetts",
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
        "An educational guide to QTIP trusts for married Massachusetts couples: what a QTIP trust is, the requirements, how it may interact with the $2 million Massachusetts estate tax threshold, how it compares with an A/B trust, and how an advisor coordinates with the attorney and CPA.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-08",
      dateModified: "2026-10-08",
      citation: [
        MA_ESTATE_TAX_GUIDE,
        MA_FORMS,
        IRC_2056,
        TREAS_REG_QTIP,
        IRS_706_INSTRUCTIONS,
        IRS_WHATS_NEW,
      ],
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

export default function QtipTrustGuide() {
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
            <span>QTIP Trust</span>
          </nav>
          <h1 className="hero-anim d2">
            What is a QTIP trust, and how may it work <em>in Massachusetts</em>?
          </h1>
          <p className="lead hero-anim d3">
            A QTIP trust is one way married couples may provide for a surviving spouse while the
            first spouse decides who receives the remainder. This guide explains the basics, how it
            may relate to the Massachusetts estate tax and an A/B trust, and where your attorney
            and CPA fit in.
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
          <h2>What is a QTIP trust?</h2>
          <p>
            A QTIP (qualified terminable interest property) trust is a trust that may provide a
            surviving spouse with all income for life while the first spouse&apos;s named
            beneficiaries receive what remains afterward. If the requirements are met and the
            executor makes the election, the trust may qualify for the marital deduction. Your
            attorney drafts it.
          </p>

          <div className="callout reveal">
            <p>
              <b>Key takeaways</b>
            </p>
            <ul>
              <li>
                A QTIP trust may let the first spouse direct who ultimately receives the assets
                while the surviving spouse receives the income.
              </li>
              <li>
                The marital deduction generally depends on the trust meeting specific requirements
                and on an election made on the estate tax return.
              </li>
              <li>
                QTIP property is generally included in the surviving spouse&apos;s estate, so the
                structure may defer estate tax rather than remove it.
              </li>
              <li>
                A QTIP trust is often paired with a credit shelter trust in an A/B plan, but your
                attorney decides what fits your documents.
              </li>
            </ul>
          </div>

          <p>
            The name describes the property rather than a single kind of document. &ldquo;Terminable
            interest&rdquo; refers to the fact that the surviving spouse&apos;s interest ends,
            typically at that spouse&apos;s death. &ldquo;Qualified&rdquo; refers to meeting the
            federal rules that allow the marital deduction despite that ending. The trust is
            commonly created within a revocable living trust or a will, and it generally takes
            effect after the first spouse dies.
          </p>

          <h2>What are the requirements for a QTIP trust?</h2>
          <p>
            Federal law sets the conditions. In general terms, the property must pass from the
            first spouse to the surviving spouse, the surviving spouse must have a qualifying
            income interest for life, and the executor must make the QTIP election. Each point
            below is general information, and your attorney applies it to the actual document.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>What the trust terms generally need</h3>
              <ul>
                <li>The surviving spouse is entitled to all of the income from the property, payable at least annually.</li>
                <li>During the surviving spouse&apos;s lifetime, no person may have the power to appoint any part of the property to anyone other than the surviving spouse.</li>
                <li>The property passes from the first spouse, for example through a trust created at death.</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>What happens after the first death</h3>
              <ul>
                <li>The executor makes an election to treat the property as QTIP, generally on a timely filed estate tax return.</li>
                <li>The election is generally irrevocable once made, and it may cover all or a defined share of the property.</li>
                <li>Massachusetts has its own estate tax return and its own definition of QTIP, discussed below.</li>
              </ul>
            </div>
          </div>
          <p className="fine">
            Sources:{" "}
            <a href={IRC_2056} target="_blank" rel="noopener noreferrer">
              26 U.S.C. §2056(b)(7)
            </a>
            ,{" "}
            <a href={TREAS_REG_QTIP} target="_blank" rel="noopener noreferrer">
              Treas. Reg. §20.2056(b)-7
            </a>{" "}
            and the{" "}
            <a href={IRS_706_INSTRUCTIONS} target="_blank" rel="noopener noreferrer">
              IRS Instructions for Form 706
            </a>
            . Reviewed October 8, 2026. Rules and forms may change, and whether a particular trust
            qualifies is a question for your attorney.
          </p>

          <h2>How does a QTIP trust work for a married couple?</h2>
          <p>
            The sequence below is a simplified illustration, not a description of any family&apos;s
            plan. Terms, elections and timing vary with the documents and the law in effect.
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Design</span>
              <h3>The attorney drafts the trust</h3>
              <p>
                The couple works with an estate planning attorney so the documents state who
                receives the income, who serves as trustee, and who receives the remainder.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Fund</span>
              <h3>Assets reach the trust</h3>
              <p>
                At the first death, assets pass into the trust as the documents direct. Titling
                and beneficiary designations need to match the plan for that to happen.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Elect</span>
              <h3>The executor decides on the election</h3>
              <p>
                The executor, guided by the attorney and CPA, decides whether and how much of the
                trust to elect as QTIP on the estate tax return.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Administer</span>
              <h3>Income to the survivor, remainder later</h3>
              <p>
                The surviving spouse receives the trust income. At that spouse&apos;s death, the
                remainder passes to the beneficiaries the first spouse named, and the property is
                generally included in the survivor&apos;s estate.
              </p>
            </div>
          </div>
          <p>
            Because the surviving spouse generally cannot change who receives the remainder, a QTIP
            trust is sometimes discussed by couples in blended families or by couples who want a
            more defined path for the remainder. That control is also a limitation: the surviving
            spouse may have less flexibility than if everything passed outright.
          </p>

          <h2>How might a QTIP trust interact with the Massachusetts estate tax threshold?</h2>
          <p>
            Two Massachusetts features frame the discussion. First, according to the Massachusetts
            Department of Revenue, a Massachusetts estate tax return is generally required for a
            resident decedent dying on or after January 1, 2023 when the gross estate plus adjusted
            taxable gifts exceeds $2,000,000, and a credit of $99,600 may reduce the tax. Second,
            Massachusetts generally does not allow a surviving spouse to use a deceased spouse&apos;s
            unused state exemption, so there is no state equivalent of federal portability.
          </p>
          <p>
            That is why the interaction matters. If a couple&apos;s combined estate is near or above
            $2 million, assets passing to a surviving spouse may qualify for a marital deduction at
            the first death, but they may then be counted in the survivor&apos;s estate. The
            Department of Revenue defines &ldquo;MA QTIP&rdquo; as QTIP property that is not included
            in the decedent&apos;s federal gross estate and for which a Massachusetts estate tax
            deduction was allowed, and its computation steps include adding back MA QTIP assets
            claimed on the predeceased spouse&apos;s Massachusetts return. Your attorney and CPA can
            explain whether a federal election, a Massachusetts election, or both are relevant to
            your trust.
          </p>
          <p>
            Federal law is a separate calculation. The IRS states that the federal basic exclusion
            amount is $15,000,000 for calendar year 2026, but Massachusetts computes its estate tax
            by reference to the Internal Revenue Code as of December 31, 2000, and the Department
            of Revenue states that later federal changes have no impact on the Massachusetts estate
            tax.
          </p>
          <p className="fine">
            Sources: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026) and{" "}
            <a href={MA_FORMS} target="_blank" rel="noopener noreferrer">
              Estate Tax Forms and Instructions
            </a>
            ; IRS,{" "}
            <a href={IRS_WHATS_NEW} target="_blank" rel="noopener noreferrer">
              What&apos;s new: Estate and gift tax
            </a>
            . Verified against mass.gov and irs.gov as of October 8, 2026. Thresholds, credits and
            calculation steps may change, and the amount of tax for any estate is a question for
            your attorney and CPA.
          </p>
          <p>
            To organize a general estimate before you speak with your professionals, use the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link>. It is an
            educational tool and not legal or tax advice. For the wider picture, see the{" "}
            <Link href="/guides/massachusetts-estate-planning">
              Massachusetts estate planning guide
            </Link>
            .
          </p>

          <h2>QTIP vs. A/B trust: how may the two be used together?</h2>
          <p>
            An A/B trust usually splits the estate at the first death into two trusts. Trust B, the
            credit shelter trust, may hold assets up to the first spouse&apos;s available
            exemption. Trust A, the marital trust, may hold the rest, and it is often designed as a
            QTIP trust. In that design, the QTIP trust helps defer tax on the portion above the
            exemption, while the credit shelter trust may use the first spouse&apos;s Massachusetts
            exemption that would otherwise go unused.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">QTIP (marital) trust</th>
                  <th scope="col">Credit shelter (bypass) trust</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Typical purpose</td>
                  <td>May qualify for the marital deduction, which may defer tax at the first death</td>
                  <td>May use the first spouse&apos;s available exemption</td>
                </tr>
                <tr>
                  <td>Surviving spouse&apos;s access</td>
                  <td>All income at least annually; principal access depends on the terms</td>
                  <td>As the terms specify, often for health, education, maintenance and support</td>
                </tr>
                <tr>
                  <td>At the survivor&apos;s death</td>
                  <td>Generally included in the survivor&apos;s estate</td>
                  <td>Generally not included, if properly structured</td>
                </tr>
                <tr>
                  <td>Who sets the final beneficiaries</td>
                  <td>The first spouse, through the trust terms</td>
                  <td>The first spouse, through the trust terms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            A QTIP trust may also be used without a credit shelter trust, and an A/B plan may be
            built in other ways. For the full structure, a worked example and the funding issues,
            read{" "}
            <Link href="/guides/ab-trust">
              how an A/B trust may use both Massachusetts exemptions through credit shelter and
              QTIP trusts
            </Link>
            . For the follow-through that makes either trust operate as drafted, see{" "}
            <Link href="/guides/funding-a-trust">
              how a Massachusetts trust may be funded and who coordinates each step
            </Link>
            .
          </p>

          <h2>What trade-offs should you weigh with a QTIP trust?</h2>
          <ul className="strategy-list stagger">
            <li>
              <h3>Less flexibility for the survivor</h3>
              <p>
                The surviving spouse generally receives income, and access to principal depends on
                the trust terms. That may be a poor fit if the survivor is likely to need broader
                access.
              </p>
            </li>
            <li>
              <h3>Deferral, not removal, of estate tax</h3>
              <p>
                QTIP property is generally included in the survivor&apos;s estate, so a larger
                estate at the second death may still be exposed to Massachusetts tax, depending on
                the law and values at that time.
              </p>
            </li>
            <li>
              <h3>An election that is hard to undo</h3>
              <p>
                The QTIP election is generally irrevocable, so the executor, attorney and CPA
                typically review it carefully before it is made.
              </p>
            </li>
            <li>
              <h3>Administration and income tax reporting</h3>
              <p>
                A trust may need its own accounting and tax filings, which may add cost and work.
                Retirement accounts payable to a trust raise separate questions, discussed in{" "}
                <Link href="/retirement-planning">
                  how retirement income planning may coordinate with IRA and plan beneficiary
                  decisions
                </Link>
                .
              </p>
            </li>
          </ul>

          <h2>What questions should you bring to your attorney and CPA?</h2>
          <p>
            These questions are educational starting points. Your professionals can answer them
            for your situation.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>For your attorney</h3>
              <ul>
                <li>Does my plan use a QTIP trust, and what must the terms say to qualify?</li>
                <li>Who is the trustee, and who receives the remainder after the surviving spouse?</li>
                <li>Does an older document formula still fit the current Massachusetts threshold?</li>
                <li>Which elections, federal, Massachusetts or both, would the executor consider?</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>For your CPA</h3>
              <ul>
                <li>How would trust income be reported, and who files the trust&apos;s returns?</li>
                <li>How may the trust&apos;s inclusion in the survivor&apos;s estate affect income tax basis?</li>
                <li>What estate tax filings might be required at each death?</li>
                <li>How should retirement account beneficiaries be reviewed against the trust?</li>
              </ul>
            </div>
          </div>

          <h2>How does coordination work?</h2>
          <p>
            Michael Cammarata, CFP®, is not an attorney or CPA and does not draft trusts, give legal
            or tax advice, or prepare tax returns. His role is to coordinate the financial side of
            the plan with the professionals you choose. If you need an introduction, he can offer
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
              <span className="step-tag">Map</span>
              <h3>Organize the estate picture</h3>
              <p>
                Gather accounts, titling, beneficiary designations and existing documents for the
                attorney and CPA to review.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Support</span>
              <h3>Share financial information</h3>
              <p>
                Provide asset values and illustrations so the attorney can evaluate whether a QTIP
                or A/B structure may fit.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>Track the follow-through</h3>
              <p>
                Follow the retitling and beneficiary changes the attorney specifies and note open
                items for the CPA.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Review</span>
              <h3>Revisit as things change</h3>
              <p>
                Asset values, tax rules and family circumstances change, which may call for another
                look with your professionals.
              </p>
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
              want to take to your estate attorney and CPA.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This guide is for educational purposes only and does not constitute individualized
            legal, tax, or investment advice. Investment advisory services are offered through MSA
            Financial, LLC, a Registered Investment Adviser (CRD #107768). MSA Financial is an
            SEC-registered investment adviser. Registration with the SEC does not imply a certain
            level of skill or training. Investing involves risk, including the potential loss of
            principal. Michael Cammarata is not an attorney or CPA and does not provide legal or tax
            advice. He does not draft legal documents or prepare tax returns. He coordinates with
            clients&apos; existing estate attorneys and CPAs. Tax treatment depends on individual
            circumstances, and legal and tax advice should be obtained from your own attorney and
            CPA. Massachusetts and federal estate tax figures were verified against mass.gov and
            irs.gov as of October 8, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
