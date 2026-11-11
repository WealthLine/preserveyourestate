import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/estate-planning-for-high-net-worth";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Estate Planning for High Net Worth Households in MA";
const SEO_DESCRIPTION =
  "Estate planning for high net worth Massachusetts households: the $2M estate tax threshold, no portability, and how your estate attorney and CPA coordinate.";
const LAST_REVIEWED = "November 11, 2026";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Estate%20Planning%20for%20High%20Net%20Worth&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const IRS_WHATS_NEW =
  "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";
const IRS_GIFT_TAX = "https://www.irs.gov/businesses/small-businesses-self-employed/gift-tax";

const SHORT_ANSWER =
  "Estate planning for a high net worth Massachusetts household usually involves several professionals. The estate attorney drafts and titles legal documents, the CPA advises on tax questions and returns, and the advisor coordinates financial information and annual reviews. Households near the $2,000,000 Massachusetts estate tax threshold may want to review these topics together.";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "What is estate planning for a high net worth household?",
    a: "It is the process of deciding how assets may pass, who may manage them, and how the pieces fit together, usually with an estate attorney, a CPA and a financial advisor. For households with $2,000,000 or more, the Massachusetts estate tax threshold, how accounts are titled and who is named as beneficiary may all become part of the review. This guide is educational and does not give legal or tax advice.",
  },
  {
    q: "At what level does the Massachusetts estate tax apply?",
    a: "According to the Massachusetts Department of Revenue, a return is required when the gross estate plus adjusted taxable gifts exceeds $2,000,000 for dates of death on or after January 1, 2023, and a $99,600 credit may reduce the tax. Whether a particular estate is affected is a question for the household's estate attorney and CPA. Verified against mass.gov as of November 11, 2026.",
  },
  {
    q: "Can a surviving spouse use a deceased spouse's unused Massachusetts amount?",
    a: "The Department of Revenue's Estate Tax Guide describes the $2,000,000 threshold and the credit for each decedent's estate and describes no portability election for the Massachusetts estate tax, so a first spouse's unused amount may not carry over. The IRS describes a separate federal basic exclusion amount of $15,000,000 for 2026. Whether any document structure fits a couple, and what cost or limits it may bring, is a question for their estate attorney and CPA. Verified against mass.gov and irs.gov as of November 11, 2026.",
  },
  {
    q: "What does an estate attorney do compared with a CPA and an advisor?",
    a: "The estate attorney gives legal advice and drafts documents such as wills and trusts. The CPA advises on tax questions and prepares tax returns. The advisor, who is not an attorney or CPA, may gather and organize financial information, help track account titling, beneficiary forms and trust funding, and keep annual reviews moving among the professionals the household chooses.",
  },
  {
    q: "Does this guide recommend a trust or a specific strategy?",
    a: "No. It describes topics a household may want to review and questions it may want to bring to its own professionals. Any trust or other structure may involve cost, reduced flexibility, added administration and rules that change over time, and whether one fits is for the household's estate attorney and CPA to address.",
  },
  {
    q: "What may be worth bringing to a first meeting with an estate attorney?",
    a: "A summary balance sheet, a list of how each account and property is titled, the beneficiaries named on retirement accounts and insurance, copies of existing wills and trusts, and a list of any lifetime gifts. The checklist in this guide may help organize those items. Your professionals can tell you which are relevant to your situation.",
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
    publishedTime: "2026-11-11",
    modifiedTime: "2026-11-11",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to estate planning for high net worth Massachusetts households",
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
        "An educational guide to estate planning for high net worth Massachusetts households: the $2,000,000 estate tax threshold, the lack of a portability election, and how the household, estate attorney, CPA and advisor may coordinate.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-11-11",
      dateModified: "2026-11-11",
      citation: [MA_ESTATE_TAX_GUIDE, IRS_WHATS_NEW, IRS_GIFT_TAX],
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

export default function EstatePlanningForHighNetWorthGuide() {
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
            <span>Estate Planning for High Net Worth</span>
          </nav>
          <h1 className="hero-anim d2">
            What does <em>estate planning</em> look like for a high net worth Massachusetts
            household?
          </h1>
          <p className="lead hero-anim d3">
            A plain-language guide for Massachusetts households with $2,000,000 or more in
            investable assets: the questions the state estate tax threshold may raise, and how the
            household, estate attorney, CPA and advisor may coordinate. It is educational and does
            not give legal or tax advice.
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
          <div className="callout reveal">
            <p>
              <b>Short answer</b>
            </p>
            <p>{SHORT_ANSWER}</p>
            <p className="fine">
              Last reviewed: {LAST_REVIEWED}. Source: Massachusetts Department of Revenue,{" "}
              <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
                Estate Tax Guide
              </a>{" "}
              (page updated April 23, 2026). Rules may change. Educational only; your estate
              attorney and CPA can address your situation.
            </p>
          </div>

          <h2>Why do the $2 million threshold and the lack of portability create planning questions?</h2>
          <p>
            According to the Massachusetts Department of Revenue (DOR), a Massachusetts estate tax
            return is required when the gross estate plus adjusted taxable gifts exceeds $2,000,000
            for dates of death on or after January 1, 2023. DOR also describes a $99,600 credit
            that may reduce the tax for those estates. For a household with a primary residence, a
            business interest, retirement accounts and life insurance, the total may approach that
            figure, because the gross estate may include jointly held property, retirement
            accounts and certain life insurance.
          </p>
          <p>
            The federal estate tax is a separate system. The IRS states that the federal basic
            exclusion amount is $15,000,000 for calendar year 2026, and DOR states that changes to
            federal estate tax law after December 31, 2000 have no impact on the Massachusetts
            estate tax. A household could therefore have a Massachusetts question even when no
            federal return is expected.
          </p>
          <p>
            For married couples, a second question may arise. Federal law allows a portability
            election between spouses, but DOR&apos;s Estate Tax Guide describes no equivalent
            election for the Massachusetts estate tax, so a first spouse&apos;s unused Massachusetts
            amount may not carry over. Some couples discuss document structures with their estate
            attorney in response. Those structures may involve cost, irrevocability, added
            administration and rules that change, and they may not work as drafted unless assets
            are retitled to match.
          </p>
          <p className="fine">
            Sources: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026); IRS,{" "}
            <a href={IRS_WHATS_NEW} target="_blank" rel="noopener noreferrer">
              What&apos;s new: Estate and gift tax
            </a>
            . Verified against mass.gov and irs.gov as of {LAST_REVIEWED}. Thresholds may change.
          </p>
          <p>
            To organize a general estimate before you meet with your professionals, try the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link>, which is an
            educational tool and not a tax calculation. For how the threshold and credit work
            together, read{" "}
            <Link href="/guides/massachusetts-estate-tax-planning">
              how the Massachusetts estate tax exemption may apply to your household
            </Link>
            . For the broader state context, read{" "}
            <Link href="/guides/massachusetts-estate-planning">
              what estate planning in Massachusetts involves
            </Link>
            .
          </p>

          <h2>Which estate planning topics may be worth reviewing with an estate attorney?</h2>
          <p>
            An estate attorney provides legal advice and drafts and finalizes legal documents.
            The topics below are questions a household may want to bring, not recommendations.
          </p>
          <ul>
            <li>
              <b>Trust structure.</b> Whether a trust is part of the plan, and what drafting
              choices, cost, irrevocability and administration it may involve. For one example of
              how couples discuss this, read the{" "}
              <Link href="/guides/ab-trust">A/B trust planning guide</Link> and the guide to{" "}
              <Link href="/guides/qtip-trust">how a QTIP trust may interact with the Massachusetts
              estate tax threshold</Link>.
            </li>
            <li>
              <b>Titling.</b> How each account and property is owned, such as individually,
              jointly or in a trust, since ownership may affect how an asset passes and whether a
              trust works as drafted. Read{" "}
              <Link href="/guides/funding-a-trust">the guide to funding a trust in Massachusetts</Link>{" "}
              for the account-by-account follow-through.
            </li>
            <li>
              <b>Beneficiary designations.</b> Who is named on retirement accounts, annuities and
              life insurance, and whether those forms match the household&apos;s documents.
            </li>
            <li>
              <b>Who acts.</b> Who may serve as personal representative or trustee, since DOR
              notes a personal representative may be held personally liable for tax shown on the
              return that is not otherwise paid.
            </li>
          </ul>

          <h2>Which topics may be worth reviewing with a CPA?</h2>
          <p>
            A CPA advises on tax questions and prepares returns. A household may want to ask its
            CPA about the items below and about how each interacts with its income tax picture.
          </p>
          <ul>
            <li>
              <b>Estate tax returns.</b> Whether a Massachusetts Form M-706 or a federal Form 706
              could be required, and the timeline for each. Read{" "}
              <Link href="/guides/massachusetts-estate-tax-return">
                when a Massachusetts estate tax return is required and who prepares it
              </Link>
              .
            </li>
            <li>
              <b>Lifetime gifts.</b> Whether a gift may require a federal Form 709 gift tax return,
              and how gifts may be counted. The IRS describes{" "}
              <a href={IRS_GIFT_TAX} target="_blank" rel="noopener noreferrer">
                its gift tax rules
              </a>{" "}
              on irs.gov, and the Massachusetts filing test adds adjusted taxable gifts to the
              gross estate. Read{" "}
              <Link href="/guides/lifetime-gift-tax-exemption">
                how the federal lifetime gift tax exemption differs from the Massachusetts estate
                tax
              </Link>
              .
            </li>
            <li>
              <b>Tax effects of account decisions.</b> How decisions about retirement accounts,
              business interests and appreciated property may affect income and estate tax, and
              what trade-offs they may carry.
            </li>
          </ul>

          <h2>What does the advisor coordinate?</h2>
          <p>
            MSA Financial is a Fee-based, fiduciary SEC-registered investment adviser. Michael
            Cammarata, CFP®, is not an attorney or CPA and does not draft legal documents, give
            legal or tax advice, or prepare tax returns. His role is to coordinate the financial
            side of the work with the professionals you choose: gathering account values, titling
            and beneficiary information, tracking trust funding and open items between your estate
            attorney and CPA, and revisiting the picture at annual reviews. Read more about{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor coordinates estate planning with your estate attorney and CPA
            </Link>
            , or see how this guide differs from the{" "}
            <Link href="/financial-planning-for-high-net-worth-individuals">
              financial planning service for high net worth households
            </Link>
            .
          </p>

          <h2>Who does what in a coordinated estate plan?</h2>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Decide</span>
              <h3>The household sets goals and reviews changes</h3>
              <p>
                The household shares its goals and family circumstances, makes its own decisions,
                and reviews documents and account changes before they take effect.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Draft</span>
              <h3>The estate attorney advises on the law and drafts documents</h3>
              <p>
                The estate attorney drafts wills, trusts and other legal documents and advises on
                how assets may be titled to match them.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Advise</span>
              <h3>The CPA advises on tax and prepares returns</h3>
              <p>
                The CPA reviews estate, gift and income tax effects, and prepares and files any
                tax returns.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Coordinate</span>
              <h3>The advisor coordinates funding and annual reviews</h3>
              <p>
                The advisor organizes financial information, tracks retitling and beneficiary
                follow-up, and schedules annual reviews as values and rules change.
              </p>
            </div>
          </div>

          <h2>What should you bring to meetings with your estate attorney and CPA?</h2>
          <p>
            These items are educational starting points. Your professionals can tell you which are
            relevant to your situation.
          </p>
          <div className="callout reveal">
            <p>
              <b>Checklist for professional review</b>
            </p>
            <ul>
              <li>A summary balance sheet of accounts, real estate, business interests and debts</li>
              <li>Current statements for each account, kept at a summary level without passwords</li>
              <li>A list of how each asset is titled and who is named as beneficiary</li>
              <li>Copies of existing wills and trusts, if you have them</li>
              <li>A list of which assets have been moved into any trust, and which have not</li>
              <li>A record of lifetime gifts and any gift tax returns your CPA has filed</li>
              <li>Names and contact details for your estate attorney, CPA and any named personal representative</li>
              <li>Questions about the $2,000,000 Massachusetts threshold and how it may apply to your household</li>
            </ul>
          </div>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Organize your financial information in one conversation</h3>
            <p>
              Discuss your account inventory and the questions you may want to take to your estate
              attorney and CPA.
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
            and tax advice should be obtained from your own estate attorney and CPA. The
            Massachusetts and federal figures were verified against mass.gov and irs.gov as of
            November 11, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
