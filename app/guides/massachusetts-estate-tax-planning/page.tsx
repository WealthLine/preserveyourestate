import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/massachusetts-estate-tax-planning";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Massachusetts Estate Tax Exemption (2026): What to Review";
const SEO_DESCRIPTION =
  "Massachusetts estate tax exemption for 2026: the $2M filing threshold, $99,600 credit, spousal portability, and questions for your attorney and CPA.";
const LAST_REVIEWED = "October 20, 2026";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Massachusetts%20Estate%20Tax%20Exemption&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const MA_ESTATE_TAX_FAQ = "https://www.mass.gov/info-details/faqs-new-estate-tax-changes";
const MA_SURTAX = "https://www.mass.gov/info-details/massachusetts-4-surtax-on-taxable-income";
const MA_MARITAL = "https://www.mass.gov/directive/directive-95-1-the-massachusetts-unlimited-marital-deduction";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "How does the Massachusetts estate tax exemption work?",
    a: "For decedents dying on or after January 1, 2023, Massachusetts uses a $2,000,000 filing threshold and a $99,600 credit rather than a simple deduction. The tax is calculated from a federal credit table and then reduced by the credit, so any actual result for an estate is a question for your CPA. Figures were verified against mass.gov as of October 20, 2026 and may change.",
  },
  {
    q: "Does Massachusetts allow spouses to share the exemption?",
    a: "Not through a portability election. The Department of Revenue's Estate Tax Guide describes the threshold and credit for each decedent's estate and describes no election that lets a surviving spouse add a first spouse's unused Massachusetts amount. Ask your attorney and CPA how that may affect your documents and what limits, such as cost or less flexibility, any structure could bring.",
  },
  {
    q: "Can a household reduce its Massachusetts estate tax exposure?",
    a: "This guide cannot say for any household. Some families discuss categories such as changes to ownership and beneficiary designations, trust structures, lifetime gifts, or charitable giving with their attorney and CPA. Each may involve cost, less flexibility, reporting, and rules that change, and the right answer depends on individual circumstances.",
  },
  {
    q: "What documents are usually part of an estate plan?",
    a: "Common documents include a will, powers of attorney, health care directives, and sometimes trusts, along with beneficiary designations on accounts. The Massachusetts estate planning guide on this site describes these at a general level. Your attorney decides what your documents should say.",
  },
  {
    q: "Does a household below $2 million need to think about the Massachusetts estate tax?",
    a: "It may be worth a look. The state measures the gross estate, which may include more than investment accounts, such as real estate, retirement accounts, life insurance you own, and business interests, and adjusted taxable gifts are added for the filing test. Values also change over time, so a household near the line may want to review its numbers with a CPA and attorney.",
  },
  {
    q: "Does a financial advisor prepare estate tax returns or draft estate documents?",
    a: "No. An attorney drafts legal documents, and a CPA advises on tax matters and prepares tax returns. Michael Cammarata, CFP®, is not an attorney or CPA. He may coordinate the financial information, account ownership and follow-up among the professionals you choose.",
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
    modifiedTime: "2026-10-20",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to the Massachusetts estate tax exemption",
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
        "An educational guide to the Massachusetts estate tax exemption, including the $2,000,000 filing threshold, the $99,600 credit, spousal portability, and the planning questions Massachusetts pre-retirees may want to prepare for their attorney and CPA.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-14",
      dateModified: "2026-10-20",
      citation: [MA_ESTATE_TAX_GUIDE, MA_ESTATE_TAX_FAQ, MA_SURTAX, MA_MARITAL],
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
      alternateName: "Preserve Your Estate",
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

export default function MassachusettsEstateTaxPlanningGuide() {
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
            <span>Massachusetts Estate Tax Exemption</span>
          </nav>
          <h1 className="hero-anim d2">
            What does the Massachusetts <em>estate tax exemption</em> mean for your estate
            planning?
          </h1>
          <p className="lead hero-anim d3">
            A question-by-question guide to what a household may want to prepare before meeting
            with its attorney and CPA, and where a financial advisor may coordinate the
            information. It is educational and does not recommend any strategy.
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
              Estate Tax Guide · Last reviewed {LAST_REVIEWED}
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap article guide-fiduciary">
          <div className="callout reveal">
            <p>
              <b>Short answer</b>
            </p>
            <p>
              As of {LAST_REVIEWED}, for Massachusetts residents dying on or after January 1, 2023,
              the Department of Revenue requires an estate tax return when the gross estate plus
              adjusted taxable gifts exceeds $2,000,000, and allows a $99,600 credit. Mass.gov
              describes no portability election, so a spouse&apos;s unused amount may not carry over.
              Rules may change.
            </p>
            <p className="fine">
              Last reviewed: {LAST_REVIEWED}. Source: Massachusetts Department of Revenue,{" "}
              <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
                Estate Tax Guide
              </a>{" "}
              (page updated April 23, 2026). Educational only; your attorney and CPA can address your
              situation.
            </p>
          </div>

          <h2>What should you review first in Massachusetts estate tax planning?</h2>
          <p>
            Massachusetts pre-retirees may want to review a complete balance sheet, how assets are
            owned and who is named as beneficiary, the lack of spousal portability, liquidity for
            a possible tax bill, lifetime gifts, and how often to revisit the plan. Each is a
            question to bring to your attorney and CPA.
          </p>

          <div className="callout reveal">
            <p>
              <b>Key takeaways</b>
            </p>
            <ul>
              <li>
                This page is about the planning questions, not the answers. Your attorney advises
                on the law and drafts documents, and your CPA advises on tax effects.
              </li>
              <li>
                Estate value may include more than investment accounts, so a complete balance sheet
                may be a helpful first step.
              </li>
              <li>
                Any planning choice may carry limits, such as cost, less flexibility, reporting
                requirements, and rules that change.
              </li>
              <li>
                A financial advisor is not an attorney or CPA. The advisor&apos;s role here is to
                help organize information and keep follow-up moving among your professionals.
              </li>
            </ul>
          </div>

          <h2>Where does the $2M Massachusetts estate tax threshold apply?</h2>
          <p>
            According to the Massachusetts Department of Revenue, a Massachusetts estate tax
            return is required for a decedent who was a Massachusetts domiciliary dying on or after
            January 1, 2023 when the gross estate plus adjusted taxable gifts exceeds $2,000,000.
            Estates of decedents dying on or after that date are allowed a credit of $99,600 that
            may reduce the tax. The department also notes that the calculation steps changed for
            decedents dying on or after August 1, 2025, and that a return and any tax are generally
            due nine months after the date of death.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026) and{" "}
            <a href={MA_ESTATE_TAX_FAQ} target="_blank" rel="noopener noreferrer">
              FAQs: New Estate Tax Changes
            </a>{" "}
            (page updated October 31, 2024). Verified against mass.gov as of {LAST_REVIEWED}. Thresholds, credits and calculation
            steps may change, and the tax for any estate is a question for your attorney and CPA.
          </p>
          <p>
            This page does not repeat the broader overview. For documents, the role of each
            professional, and the wider planning picture, read the{" "}
            <Link href="/guides/massachusetts-estate-planning">
              Massachusetts estate planning guide
            </Link>
            . For the difference between the two taxes, read{" "}
            <Link href="/guides/estate-tax-vs-inheritance-tax">
              how estate tax differs from inheritance tax in Massachusetts
            </Link>
            .
          </p>

          <h2>How does the Massachusetts estate tax exemption work?</h2>
          <p>
            Department of Revenue materials use the terms filing threshold and credit rather than
            exemption, but many households search for it as an exemption. Two separate steps are
            involved. The first is the filing test: for decedents dying on or after January 1,
            2023, a return is required when the gross estate plus adjusted taxable gifts exceeds
            $2,000,000. The second is the tax calculation: the amount subject to Massachusetts
            estate tax is worked out after excluding real and tangible property located outside
            Massachusetts and applying allowable deductions, run through a federal credit table
            (Table B, based on the Internal Revenue Code as of December 31, 2000), and then reduced
            by a $99,600 credit, never below zero.
          </p>
          <p>
            That is why the $2 million figure is not simply a deduction that is subtracted from an
            estate before a flat rate is applied. The filing test and the tax calculation measure
            different things, so an estate may need to file a return even when the calculation
            produces little or no tax. The department also notes that the calculation steps changed
            for decedents dying on or after August 1, 2025, and the rules may change again. Your
            CPA calculates any actual tax for an estate; this page does not estimate one.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026), including the Massachusetts Estate Tax Computation
            section and Table B. Verified against mass.gov as of {LAST_REVIEWED}.
          </p>

          <div className="callout reveal">
            <p>
              <b>Calculator call-out.</b> To organize a general estimate before you meet with your
              professionals, try the Massachusetts estate tax calculator. It is an educational
              tool and does not give legal or tax advice, and its result is not a tax calculation
              for your estate.
            </p>
            <Link className="text-link" href="/calculator">
              Estimate your Massachusetts estate tax with the calculator →
            </Link>
          </div>

          <h2>Have you built a complete balance sheet?</h2>
          <p>
            The first question for your CPA and attorney is often what the estate actually
            includes. The state looks at property however it is held,
            which may include real estate, bank and investment accounts, retirement accounts, life
            insurance you own, business interests, and tangible personal property. Debts and
            expected expenses matter as well. Property located outside Massachusetts may be treated
            differently in the state calculation, so ask your CPA how any out-of-state real estate
            or tangible property is handled.
          </p>
          <p>
            A shared, current inventory may help each professional work from the same numbers. Keep
            it at a summary level and leave account numbers and passwords out of it. Values and
            ownership change, so the inventory is a snapshot, not a conclusion.
          </p>

          <h2>Do ownership and beneficiary designations match your documents?</h2>
          <p>
            How an asset is titled and who is named on a beneficiary form may control where it goes,
            regardless of what a will says. Gaps are common after a move, a remarriage, a new
            account, or a change in family circumstances. Ask your attorney which assets are meant
            to be governed by which document, and ask whether any title or designation should be
            updated. If a trust is part of the plan, the{" "}
            <Link href="/guides/funding-a-trust">
              guide to funding a trust in Massachusetts
            </Link>{" "}
            walks through the account-by-account follow-through. Retirement accounts may raise
            their own income tax and beneficiary questions for your CPA.
          </p>

          <h2>Does Massachusetts allow spouses to share the exemption?</h2>
          <p>
            Not through a portability election. At the federal level, a surviving spouse may be
            able to use the first spouse&apos;s unused exclusion through a portability election. The
            Department of Revenue&apos;s Estate Tax Guide describes the $2,000,000 filing threshold
            and the $99,600 credit for each decedent&apos;s estate and describes no comparable
            election, so a first spouse&apos;s unused Massachusetts amount generally may not carry
            over to the survivor. If everything passes outright to the survivor, the combined
            estate may later be measured against a single state threshold. Massachusetts does allow
            an{" "}
            <a href={MA_MARITAL} target="_blank" rel="noopener noreferrer">
              unlimited marital deduction
            </a>{" "}
            (Directive 95-1), which may defer rather than remove the question for the survivor&apos;s
            estate. Whether any document structure fits a particular couple, and what limits it would
            bring, such as cost, irrevocability, or rules that change, is a question for your
            attorney and CPA. For general background, read the{" "}
            <Link href="/guides/ab-trust">
              A/B trust guide on how both spouses&apos; Massachusetts exemptions may be considered
            </Link>
            , read{" "}
            <Link href="/guides/types-of-trusts">
              the main types of trusts Massachusetts families review and how they differ
            </Link>
            {" "}for the labels you may hear, and use the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link> for a general,
            educational estimate.
          </p>
          <p className="fine">
            Sources: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            and{" "}
            <a href={MA_MARITAL} target="_blank" rel="noopener noreferrer">
              Directive 95-1
            </a>
            . Verified against mass.gov as of {LAST_REVIEWED}.
          </p>

          <h2>Is there liquidity for a possible tax bill?</h2>
          <p>
            An estate may hold value in assets that are not easy to turn into cash, such as a
            home, a business interest, or retirement accounts that may create income tax when
            withdrawn. If tax is due, the Department of Revenue says it is generally payable nine
            months after death, and interest may accrue on any unpaid tax from the original due
            date even when an extension applies. Ask your CPA and attorney how an estate might
            raise cash, who would be responsible for filing, and what timing questions could arise.
            For the filing and payment timeline, read{" "}
            <Link href="/guides/massachusetts-estate-tax-return">
              who files a Massachusetts estate tax return, when it is due, and what information
              your CPA and attorney may ask for
            </Link>
            .
          </p>
          <p>
            Income tax is a separate matter. For tax year 2026, Massachusetts applies a 4% surtax
            to taxable income above $1,107,750, and a large sale or withdrawal in one year may be
            part of that conversation with your CPA.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_SURTAX} target="_blank" rel="noopener noreferrer">
              Massachusetts 4% Surtax on Taxable Income
            </a>{" "}
            (page updated June 1, 2026). Verified against mass.gov as of {LAST_REVIEWED}. The
            threshold is adjusted annually for inflation.
          </p>

          <h2>How do lifetime gifts relate to the Massachusetts estate tax?</h2>
          <p>
            The Massachusetts filing test adds adjusted taxable gifts to the gross estate, so a
            lifetime gift may still matter for the state estate tax even when it is outside the
            estate. Gifts may also involve reporting, a loss of control over the asset, and tax
            basis questions for the person who receives it. The federal gift tax rules and the
            Massachusetts estate tax are different systems, which is why the questions belong with
            your attorney and CPA. For the concepts, read{" "}
            <Link href="/guides/lifetime-gift-tax-exemption">
              how the federal lifetime gift tax exemption differs from the Massachusetts estate tax
            </Link>
            .
          </p>

          <h2>How often should you review your estate tax planning?</h2>
          <p>
            Many households revisit the plan on a regular schedule, and also after a major event
            such as retirement, a move, a marriage or death in the family, a sale of a business,
            an inheritance, or a change in tax law. Asset values may move above or below the
            threshold between reviews, and older documents may not reflect current rules. Ask your
            attorney and CPA what review schedule fits your circumstances.
          </p>

          <h2>Who does what in estate tax planning?</h2>
          <p>
            Michael Cammarata, CFP®, is not an attorney or CPA and does not draft legal documents,
            give legal or tax advice, or prepare tax returns. His role is to coordinate the
            financial side of the work with the professionals you choose. Read more about{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor coordinates estate planning with your attorney and CPA
            </Link>
            .
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Advise</span>
              <h3>The attorney advises on the law and drafts documents</h3>
              <p>
                Your attorney explains the options the law may allow and drafts and finalizes any
                will, trust, or other legal document.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Review</span>
              <h3>The CPA reviews the tax effects</h3>
              <p>
                Your CPA reviews estate, gift, and income tax effects and prepares any tax
                returns.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>The advisor organizes information and coordinates follow-up</h3>
              <p>
                The advisor organizes the balance sheet, titling and beneficiary information, and
                liquidity details, and tracks open items between your attorney and CPA.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Revisit</span>
              <h3>The household reviews as things change</h3>
              <p>
                Family, asset values, and tax rules change, which may call for another review with
                your professionals.
              </p>
            </div>
          </div>

          <h2>What questions should you bring to your attorney and CPA?</h2>
          <p>
            These questions are educational starting points. Your professionals can answer them for
            your situation.
          </p>
          <div className="callout reveal">
            <p>
              <b>Questions to bring to your professionals</b>
            </p>
            <ul>
              <li>What does my gross estate include, and what is my current estimate of its value?</li>
              <li>Do my titles and beneficiary designations match what my documents say?</li>
              <li>Could my estate exceed the $2,000,000 threshold, and how are adjusted taxable gifts counted?</li>
              <li>If I am married, how does the lack of spousal portability affect our documents?</li>
              <li>How might my estate pay a tax bill, and who would handle the filing?</li>
              <li>How do lifetime gifts fit with the Massachusetts estate tax and with my own needs?</li>
              <li>How may out-of-state property be treated in the calculation?</li>
              <li>What events or changes in the law should prompt another review, and how often should we meet?</li>
            </ul>
          </div>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Organize your balance sheet and questions in one conversation</h3>
            <p>
              Schedule a conversation to discuss your account inventory and the estate tax
              questions you may want to take to your attorney and CPA.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This guide is for educational purposes only and does not constitute individualized
            legal, tax, or investment advice. It does not recommend any strategy for any reader.
            Investment advisory services are offered through MSA Financial, LLC, a Registered
            Investment Adviser (CRD #107768). MSA Financial is an SEC-registered investment
            adviser. Registration with the SEC does not imply a certain level of skill or training.
            Investing involves risk, including the potential loss of principal. Michael Cammarata
            is not an attorney or CPA and does not provide legal or tax advice. He does not draft
            legal documents or prepare tax returns. He coordinates with clients&apos; existing
            estate attorneys and CPAs. Tax treatment depends on individual circumstances, and legal
            and tax advice should be obtained from your own attorney and CPA. The Massachusetts tax
            figures were verified against mass.gov as of October 20, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
