import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/massachusetts-estate-planning";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Estate Planning in Massachusetts: What to Know (2026)";
const SEO_DESCRIPTION =
  "Estate planning in Massachusetts explained: key documents, the $2M estate tax filing threshold, no spousal portability, and coordinating your attorney and CPA.";
const LAST_REVIEWED = "October 23, 2026";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Massachusetts%20Estate%20Planning%20Guide&label=Educational%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const MA_ESTATE_TAX_FAQ = "https://www.mass.gov/info-details/faqs-new-estate-tax-changes";
const MA_SURTAX = "https://www.mass.gov/info-details/massachusetts-4-surtax-on-taxable-income";
const IRS_WHATS_NEW = "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "How much does estate planning cost in Massachusetts?",
    a: "Costs depend on the household, the documents involved, and the professionals engaged, so this guide does not give a typical figure. Ask your estate attorney for a written fee quote that states what is included, and ask your CPA and any financial advisor how they are paid.",
  },
  {
    q: "What documents are part of a Massachusetts estate plan?",
    a: "Common documents include a will, a durable power of attorney, a health care proxy, and sometimes a revocable trust, along with beneficiary designations and the way accounts are titled. Your attorney advises which of these fit your situation and prepares them.",
  },
  {
    q: "Is it better to put a house in a will or a trust?",
    a: "It depends on the household, and your attorney is the right person to advise. Property passed by a will generally goes through the court-supervised probate process, while property properly transferred to a trust is generally administered under the trust's terms. A trust may involve upfront cost, retitling work, and ongoing administration, so ask your attorney how each option may apply to your home.",
  },
  {
    q: "Does Massachusetts have an estate tax?",
    a: "Yes. For Massachusetts residents dying on or after January 1, 2023, the Department of Revenue requires a return when the gross estate plus adjusted taxable gifts exceeds $2,000,000, and allows a credit of up to $99,600. The federal exclusion is a separate system. Figures were verified against official sources as of October 23, 2026 and may change.",
  },
  {
    q: "Can a financial advisor help with estate planning?",
    a: "A financial advisor may help organize your balance sheet, review account ownership and beneficiary designations, and coordinate follow-up among the professionals you choose. An advisor does not replace an estate attorney, who drafts legal documents, or a CPA, who advises on tax and prepares returns. Michael Cammarata, CFP®, is not an attorney or CPA.",
  },
  {
    q: "How often should an estate plan be reviewed?",
    a: "Many households review on a regular schedule and after events such as retirement, a move, a marriage, a death in the family, a sale of a business, an inheritance, or a change in the law. Ask your attorney and CPA what schedule fits your circumstances.",
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
    publishedTime: "2026-09-08",
    modifiedTime: "2026-10-23",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to estate planning in Massachusetts",
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
        "An educational guide to estate planning in Massachusetts: the documents that are commonly part of a plan, the $2,000,000 estate tax filing threshold, the lack of spousal portability, and how a household may coordinate its attorney, CPA, and financial plan.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-09-08",
      dateModified: "2026-10-23",
      citation: [MA_ESTATE_TAX_GUIDE, MA_ESTATE_TAX_FAQ, MA_SURTAX, IRS_WHATS_NEW],
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

export default function MassachusettsEstatePlanningGuide() {
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
            <span>Massachusetts Estate Planning</span>
          </nav>
          <h1 className="hero-anim d2">
            What does <em>estate planning in Massachusetts</em> involve?
          </h1>
          <p className="lead hero-anim d3">
            Estate planning in Massachusetts typically combines legal documents, such as a will,
            powers of attorney, and sometimes a trust, with account titling, beneficiary
            designations, and a review of the Massachusetts estate tax, which has a $2 million
            filing threshold. Your attorney and CPA advise on legal and tax questions, and rules
            may change.
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
              Estate Planning Guide · Last reviewed {LAST_REVIEWED}
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap article guide-fiduciary">
          <h2>What is included in a Massachusetts estate plan?</h2>
          <p>
            A complete estate plan typically brings together your wishes for property, health care,
            decision-making authority, beneficiary designations, and the way assets are titled. It
            also needs to work with the financial plan and with the tax and legal guidance you
            receive from your own professionals.
          </p>
          <p>
            The goal is not simply to create documents. It is to help keep the documents, accounts,
            insurance, real estate, and family intentions aligned. Individual circumstances, legal
            requirements, and tax consequences vary, so planning should be reviewed with qualified
            legal and tax professionals.
          </p>

          <h2>Does Massachusetts have an estate tax, and what is the $2 million threshold?</h2>
          <p>
            Yes. According to the Massachusetts Department of Revenue, a Massachusetts estate tax
            return is required when a decedent&apos;s gross estate plus adjusted taxable gifts exceeds
            $2,000,000, for decedents dying on or after January 1, 2023. Those estates are allowed a
            credit of up to $99,600 that may reduce the tax. The department also notes that the
            calculation steps changed for decedents dying on or after August 1, 2025, so any actual
            result is a question for your CPA.
          </p>
          <p>
            The $2 million figure is a filing test and a credit, not a simple deduction followed by
            a flat rate, which is why a current estimate can be useful when evaluating the broader
            planning picture. Massachusetts also does not follow the federal exclusion. For 2026 the
            IRS lists a federal basic exclusion amount of $15,000,000, but the Department of Revenue
            states that federal estate tax changes after December 31, 2000 have no impact on the
            Massachusetts estate tax. A household can be well under the federal figure and still
            have a Massachusetts question.
          </p>
          <p className="fine">
            Sources: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026) and{" "}
            <a href={MA_ESTATE_TAX_FAQ} target="_blank" rel="noopener noreferrer">
              FAQs: New Estate Tax Changes
            </a>{" "}
            (page updated October 31, 2024); IRS,{" "}
            <a href={IRS_WHATS_NEW} target="_blank" rel="noopener noreferrer">
              What&apos;s new: Estate and gift tax
            </a>
            . Verified as of {LAST_REVIEWED}. Thresholds, credits, and calculation steps may change.
          </p>

          <p>
            For families with substantial real estate, retirement accounts, concentrated business
            ownership, life insurance, or interests held through trusts and entities, the first task
            is often to establish a complete balance sheet. Account values alone may not tell the
            full story. Ownership, beneficiary designations, debt, liquidity needs, and the timing
            of a transfer can all create questions for the attorney and CPA to evaluate.
          </p>
          <div className="callout reveal">
            <p>
              <b>Start with a current inventory.</b> Your estate may include more than an investment
              account: real estate, retirement accounts, life insurance you own, business interests,
              and other property can all matter.
            </p>
            <Link className="text-link" href="/calculator">
              Estimate your Massachusetts estate tax with the calculator →
            </Link>
          </div>

          <p>
            Wondering who pays tax when someone inherits? Read our focused comparison of{" "}
            <Link href="/guides/estate-tax-vs-inheritance-tax">estate tax versus inheritance tax in Massachusetts</Link>.
            Considering lifetime gifts? This educational explanation of{" "}
            <Link href="/guides/lifetime-gift-tax-exemption">how the federal lifetime gift tax exemption differs from the Massachusetts estate tax</Link>{" "}
            may help you prepare questions for your attorney and CPA. If a return may be involved, this
            guide explains{" "}
            <Link href="/guides/massachusetts-estate-tax-return">who files a Massachusetts estate tax return, when it is due, and what information your CPA and attorney may ask for</Link>.
          </p>

          <p>
            For a question-by-question checklist to prepare before meeting your professionals, read{" "}
            <Link href="/guides/massachusetts-estate-tax-planning">
              what Massachusetts pre-retirees may want to review in estate tax planning
            </Link>
            .
          </p>

          <h3>Does Massachusetts allow spouses to share the exemption?</h3>
          <p>
            Not through a portability election. The Department of Revenue&apos;s Estate Tax Guide
            describes the $2,000,000 filing threshold and the $99,600 credit for each decedent&apos;s
            estate and describes no election that lets a surviving spouse add a first spouse&apos;s
            unused Massachusetts amount. For married couples, that makes the design and funding of
            the estate plan worth discussing with an estate planning attorney, CPA, and financial
            advisor as appropriate. A coordinated review may identify questions for those
            professionals, but it cannot determine the right legal or tax strategy for every
            family.
          </p>

          <h3>Does the 4% Millionaire Surtax belong in the estate planning picture?</h3>
          <p>
            It is an income tax consideration rather than an estate tax. Massachusetts applies a 4%
            surtax to taxable income above an inflation-adjusted threshold, which is $1,107,750 for
            tax year 2026. A CPA can help explain how income, liquidity events, charitable
            decisions, and other planning choices may interact with a family&apos;s broader tax
            picture. Tax treatment depends on individual circumstances and can change.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_SURTAX} target="_blank" rel="noopener noreferrer">
              Massachusetts 4% Surtax on Taxable Income
            </a>{" "}
            (page updated June 1, 2026). Verified as of {LAST_REVIEWED}.
          </p>

          <h2>Which documents are part of a Massachusetts estate plan?</h2>
          <p>
            An estate planning attorney can advise on the documents that fit your situation. For a
            sophisticated household, the documents should be read as an operating system rather than
            a stack of forms: they establish who has authority, how assets are controlled, and how
            decisions are carried out if a person becomes incapacitated or dies. Many plans include
            some combination of the following:
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>A will</h3>
              <p>
                A will can state how certain property should be distributed and name guardians for
                minor children. It generally works alongside, rather than replaces, beneficiary
                designations and trust planning. An attorney can also explain how it coordinates
                with property that passes by title, contract, or trust terms.
              </p>
            </div>
            <div className="coord-card">
              <h3>A revocable trust</h3>
              <p>
                A revocable trust may be used to hold assets and provide instructions for management
                or distribution. It can also establish successor trustee responsibilities and a
                process for administering assets. Its usefulness depends in part on whether assets
                are properly titled or transferred to the trust.
              </p>
            </div>
            <div className="coord-card">
              <h3>Durable power of attorney</h3>
              <p>
                This document can designate someone to handle specified financial matters if you are
                unable to act. The scope and validity of the authority are legal questions for your
                attorney.
              </p>
            </div>
            <div className="coord-card">
              <h3>Health care proxy</h3>
              <p>
                A health care proxy can name a person to make health care decisions if you cannot.
                Discuss its preparation and use with your attorney and health care providers.
              </p>
            </div>
            <div className="coord-card">
              <h3>Beneficiary designations</h3>
              <p>
                Retirement accounts, life insurance, and many other accounts pass according to the
                beneficiary form on file, which may override what a will says. Review these forms
                whenever circumstances change and ask your attorney and CPA how they fit the overall
                plan.
              </p>
            </div>
            <div className="coord-card">
              <h3>Account titling and ownership</h3>
              <p>
                How an account or property is titled, such as individually, jointly, or in a trust,
                may affect how it passes. Retitling is often a follow-up step after documents are
                signed, and your attorney can advise on what ownership fits your plan.
              </p>
            </div>
          </div>

          <h2>How does coordinated estate planning work?</h2>
          <p>
            Estate planning often involves several professionals with different responsibilities.
            Your estate attorney prepares legal documents and provides legal advice. Your CPA
            advises on tax matters and prepares tax returns. Michael Cammarata, CFP®, helps
            coordinate the financial planning and investment information those professionals may
            need, while you remain in control of whom you engage and the decisions you make.
          </p>
          <p>
            Coordination is particularly useful when a family has multiple account types, several
            generations of beneficiaries, closely held business interests, or a plan that has not
            been reviewed since a major change in assets, family circumstances, residency, or tax
            law. A structured review can organize the facts and identify decisions that merit legal
            or tax advice. It does not substitute for that advice.
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
                Your CPA reviews estate, gift, and income tax effects and prepares any tax returns.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>The advisor coordinates funding, titling, and annual review</h3>
              <p>
                The advisor organizes the balance sheet, titling, and beneficiary information, and
                tracks open items between your attorney and CPA.
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

          <div className="callout" style={{ marginTop: "2rem" }}>
            <p>
              Coordination can include organizing an asset and beneficiary inventory, identifying
              questions for your attorney or CPA, reviewing whether account ownership is consistent
              with signed documents, and helping keep the financial plan aligned as circumstances
              change. It does not replace legal or tax advice. If retirement-account distributions or
              Social Security timing are part of the conversation, review the related{" "}
              <Link href="/retirement-planning">retirement income planning service</Link>.
            </p>
          </div>

          <p>
            To understand the financial advisor&apos;s role alongside your attorney and CPA, see how{" "}
            <Link href="/financial-advisor-estate-planning">a financial advisor coordinates estate planning in Massachusetts</Link>.
            Estate questions also connect to income, investments, and tax planning, which the{" "}
            <Link href="/comprehensive-financial-planning">comprehensive financial planning overview</Link>{" "}
            describes. If you are comparing advisors, read{" "}
            <Link href="/guides/fiduciary-vs-financial-advisor">what a fiduciary financial advisor is and how it differs from other advisors</Link>.
            Households with a business interest may also review the{" "}
            <Link href="/guides/business-owner-retirement-planning">Massachusetts business owner retirement planning guide</Link>{" "}
            for questions to bring to their professionals.
          </p>

          <h2>What is an unfunded trust, and why does it come up?</h2>
          <p>
            A trust document alone may not carry out its intended role if assets are never retitled
            or beneficiary designations are left inconsistent with the plan. This is often called an
            unfunded trust. Reviewing account registration, beneficiaries, insurance ownership, and
            other asset details with the appropriate professionals can help surface follow-up items.
            For a checklist by account type, see{" "}
            <Link href="/guides/funding-a-trust">
              how a Massachusetts trust may be funded and who coordinates each step
            </Link>
            .
          </p>
          <p>
            For married Massachusetts families exploring how both spouses&apos; estate tax exemptions
            may be considered, read our educational <Link href="/guides/ab-trust">A/B trust planning guide</Link>,
            and for the marital trust piece of that structure, see{" "}
            <Link href="/guides/qtip-trust">what a QTIP trust is and what the requirements may be</Link>.
            For a plain-English overview of the trust categories you may hear about, see{" "}
            <Link href="/guides/types-of-trusts">
              the main types of trusts Massachusetts families review
            </Link>
            . Any trust structure should be evaluated and drafted by a qualified estate planning
            attorney for your specific circumstances.
          </p>

          <h2>How much does estate planning cost in Massachusetts?</h2>
          <p>
            Costs depend on the household, the documents involved, and the professionals engaged, so
            this guide does not publish a typical figure. Before you hire anyone, ask your estate
            attorney for a written fee quote that states what is included, such as which documents
            are prepared and whether signing and funding support are covered. Ask your CPA about fees
            for any estate or fiduciary tax work, and ask any financial advisor how they are paid.
            The services, fees, and business practices of MSA Financial are described in its Form ADV
            Part 2A, available at adviserinfo.sec.gov.
          </p>

          <h2>What questions should you ask your attorney and CPA?</h2>
          <p>
            These questions are educational starting points. Your professionals can answer them for
            your situation.
          </p>
          <div className="callout reveal">
            <p>
              <b>Questions to bring to your professionals</b>
            </p>
            <ul>
              <li>Which documents do I have, and when were they last reviewed?</li>
              <li>
                What does my gross estate include, and could it exceed the $2,000,000 Massachusetts
                threshold once adjusted taxable gifts are counted?
              </li>
              <li>Do my titles and beneficiary designations match what my documents say?</li>
              <li>
                If I am married, how does the lack of spousal portability affect our documents, and
                what limits could any trust structure bring?
              </li>
              <li>If I have a trust, is it funded, and who is responsible for each retitling step?</li>
              <li>Who would serve as personal representative and successor trustee, and do they know?</li>
              <li>
                How might my estate pay a tax bill, and how could income tax, including the 4%
                surtax, interact with the plan?
              </li>
              <li>What events or changes in the law should prompt another review?</li>
            </ul>
          </div>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Bring the moving parts of your plan into one conversation</h3>
            <p>
              Schedule a conversation to discuss your current estate plan, financial accounts, and
              the questions you may want to take to your estate attorney and CPA.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/calculator">
                Use the Estate Tax Calculator
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
            and tax advice should be obtained from your own attorney and CPA. The Massachusetts and
            federal tax figures were verified against mass.gov and irs.gov as of October 23, 2026
            and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
