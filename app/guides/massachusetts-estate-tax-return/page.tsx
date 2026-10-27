import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/massachusetts-estate-tax-return";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Massachusetts Estate Tax Return: Who Files and When";
const SEO_DESCRIPTION =
  "Massachusetts estate tax return (Form M-706): who must file, the nine-month timeline, and what your CPA and attorney may ask a financial advisor to gather.";
const LAST_REVIEWED = "October 27, 2026";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Massachusetts%20Estate%20Tax%20Return&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const MA_FORMS = "https://www.mass.gov/info-details/dor-estate-tax-forms-and-instructions";
const MA_M706_INSTRUCTIONS =
  "https://www.mass.gov/doc/form-m-706-instructions-for-dates-of-death-on-or-after-8125/download";
const MA_DUE_DATES = "https://www.mass.gov/info-details/tax-due-dates-and-extensions";
const MA_M4768 =
  "https://www.mass.gov/doc/form-m-4768-massachusetts-estate-tax-extension-application/download";
const IRS_FILING = "https://www.irs.gov/businesses/small-businesses-self-employed/filing-estate-and-gift-tax-returns";
const IRS_WHATS_NEW =
  "https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax";
const IRS_ABOUT_706 = "https://www.irs.gov/forms-pubs/about-form-706";

const SHORT_ANSWER =
  "A Massachusetts estate tax return, Form M-706, is required when a Massachusetts resident's gross estate plus adjusted taxable gifts exceeds $2,000,000 for deaths on or after January 1, 2023. The return and any tax are generally due nine months after death. The personal representative files it, usually with a CPA and attorney.";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "Who must file a Massachusetts estate tax return?",
    a: "According to the Massachusetts Department of Revenue, the personal representative of a decedent who was domiciled in Massachusetts must file Form M-706 when the gross estate plus adjusted taxable gifts exceeds $2,000,000 for dates of death on or after January 1, 2023. A nonresident who owned Massachusetts real estate or tangible personal property may also have a filing requirement. Whether a particular estate must file is a question for the family's attorney and CPA. Verified against mass.gov as of October 27, 2026.",
  },
  {
    q: "When is a Massachusetts estate tax return due?",
    a: "The Department of Revenue states that the return and any payment are due nine months after the date of death. A six-month extension of time to file is automatic if at least 80% of the tax finally determined to be due is paid by the original due date. Interest may accrue on unpaid tax from the original due date, and an extension of time to pay is not automatic. Verified against mass.gov as of October 27, 2026.",
  },
  {
    q: "Is the Massachusetts estate tax return the same as the federal Form 706?",
    a: "No. They are separate returns with separate thresholds. The IRS states that the federal basic exclusion amount is $15,000,000 for calendar year 2026, while Massachusetts uses a $2,000,000 filing threshold. The Department of Revenue also asks for a copy of a federal-format Form 706 to accompany Form M-706, which the family's CPA or attorney prepares. Verified against mass.gov and irs.gov as of October 27, 2026.",
  },
  {
    q: "What does a financial advisor do in the estate tax return process?",
    a: "A financial advisor who is not an attorney or CPA may gather and organize financial information, such as account values, titling, beneficiary designations and trust funding status, and may keep follow-up moving among the professionals the family chooses. The advisor does not prepare the return, give tax or legal advice, or draft legal documents.",
  },
  {
    q: "Can a household below $2 million still have a filing question?",
    a: "It may. The filing test uses the gross estate, which may include real estate, retirement accounts, life insurance the person owned and business interests, plus adjusted taxable gifts. Values and ownership change over time, so a household near the threshold may want its CPA and attorney to review the numbers. An estate that does not need a return may still have a real estate lien question, which the attorney can address.",
  },
  {
    q: "Does this guide estimate the tax an estate may owe?",
    a: "No. The Massachusetts estate tax is computed by the estate's CPA using the Department of Revenue's method, which includes a federal credit table and a $99,600 credit for deaths on or after January 1, 2023. The calculator on this site gives a general educational estimate only and is not a tax calculation for any estate.",
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
    publishedTime: "2026-10-27",
    modifiedTime: "2026-10-27",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to the Massachusetts estate tax return",
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
        "An educational guide to the Massachusetts estate tax return (Form M-706): who must file, the filing and payment timeline, and the financial information a family's CPA and attorney may ask an advisor to gather.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      citation: [
        MA_ESTATE_TAX_GUIDE,
        MA_FORMS,
        MA_M706_INSTRUCTIONS,
        MA_DUE_DATES,
        IRS_FILING,
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

export default function MassachusettsEstateTaxReturnGuide() {
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
            <span>Massachusetts Estate Tax Return</span>
          </nav>
          <h1 className="hero-anim d2">
            When is a Massachusetts <em>estate tax return</em> required, and who prepares it?
          </h1>
          <p className="lead hero-anim d3">
            A plain-language guide to who files Form M-706, the nine-month timeline, and the
            financial information a family&apos;s CPA and attorney may ask an advisor to gather. It
            is educational and does not give legal or tax advice.
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
            <p>{SHORT_ANSWER}</p>
            <p className="fine">
              Last reviewed: {LAST_REVIEWED}. Source: Massachusetts Department of Revenue,{" "}
              <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
                Estate Tax Guide
              </a>{" "}
              (page updated April 23, 2026). Rules may change. Educational only; your CPA and
              attorney can address your situation.
            </p>
          </div>

          <h2>Who must file a Massachusetts estate tax return?</h2>
          <p>
            According to the Massachusetts Department of Revenue (DOR), the personal representative
            of a decedent who was domiciled in Massachusetts must file a Massachusetts Estate Tax
            Return, Form M-706, when the gross value of the estate plus adjusted taxable gifts
            exceeds $2,000,000 for dates of death on or after January 1, 2023. For earlier dates of
            death, the threshold was $1,000,000 for deaths on or after January 1, 2006. The filing
            requirement for a nonresident who owned or transferred real estate or tangible personal
            property in Massachusetts is based on the total worldwide estate plus adjusted taxable
            gifts, and a Nonresident Decedent Affidavit (Form M-NRA) accompanies the return.
          </p>
          <p>
            DOR also states that a personal representative may be held personally liable for any
            tax shown on the return that is not otherwise paid. For that reason, many families ask
            their attorney and CPA early who would act as personal representative and who would
            handle the filing.
          </p>
          <p>
            The federal estate tax return is a separate filing with a separate threshold. The IRS
            states that the federal basic exclusion amount is $15,000,000 for calendar year 2026,
            and DOR states that later changes to federal estate tax law have no impact on the
            Massachusetts estate tax. An estate could need a Massachusetts return even when no
            federal return is required.
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
            For how the threshold and the $99,600 credit work together, read{" "}
            <Link href="/guides/massachusetts-estate-tax-planning">
              how the Massachusetts estate tax exemption may apply to your household
            </Link>
            . For the difference between an estate tax and an inheritance tax, read{" "}
            <Link href="/guides/estate-tax-vs-inheritance-tax">
              how the Massachusetts estate tax differs from an inheritance tax
            </Link>
            .
          </p>

          <h2>What does Form M-706 cover?</h2>
          <p>
            Form M-706 is the return DOR uses to report the gross estate, the allowable
            deductions, and the Massachusetts estate tax, if any. DOR describes the tax as computed
            by reference to a federal credit for state death taxes under the Internal Revenue Code
            as of December 31, 2000, reduced by a $99,600 credit for deaths on or after January 1,
            2023, and not below zero. DOR also states that the calculation steps changed for
            decedents dying on or after August 1, 2025, so the form and instructions depend on the
            date of death. Property is reported at its fair market value on the date of death, or
            on the alternate valuation date six months later.
          </p>
          <p>
            The gross estate generally includes property in which the decedent had an interest,
            which DOR says may include jointly held property, annuities, certain lifetime
            transfers, and life insurance proceeds even when they are payable to someone other than
            the estate. DOR lists supporting documents that may need to accompany the return, such
            as a copy of the death certificate, the will and any trust, Letters of Authority, and
            an executed copy of a federal-format Form 706. The estate&apos;s CPA and attorney
            decide which documents apply and prepare them.
          </p>
          <p className="fine">
            Sources: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026),{" "}
            <a href={MA_M706_INSTRUCTIONS} target="_blank" rel="noopener noreferrer">
              Instructions for Form M-706 (dates of death on or after August 1, 2025)
            </a>{" "}
            and{" "}
            <a href={MA_FORMS} target="_blank" rel="noopener noreferrer">
              Estate Tax Forms and Instructions
            </a>{" "}
            (page updated January 9, 2026). Verified against mass.gov as of {LAST_REVIEWED}.
          </p>
          <div className="callout reveal">
            <p>
              <b>Calculator call-out.</b> To organize a general estimate before you meet with your
              professionals, try the Massachusetts estate tax calculator. It is an educational tool
              and does not give legal or tax advice, and its result is not a tax calculation or a
              filing determination for your estate.
            </p>
            <Link className="text-link" href="/calculator">
              Estimate your Massachusetts estate tax with the calculator →
            </Link>
          </div>

          <h2>What are the filing and payment deadlines?</h2>
          <p>
            DOR states that if the gross estate exceeds the filing threshold for the year of death,
            the return and any tax payment are due nine months after the date of death. The table
            below summarizes the timeline DOR describes. Each step has conditions, and the
            estate&apos;s CPA and attorney confirm which apply.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Milestone</th>
                  <th scope="col">What DOR describes</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Return and payment due</td>
                  <td>Nine months after the date of death</td>
                  <td>
                    <a href={MA_DUE_DATES} target="_blank" rel="noopener noreferrer">
                      DOR, Tax due dates and extensions
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Automatic extension of time to file</td>
                  <td>
                    Six months, if at least 80% of the tax finally determined to be due is paid by
                    the original due date; otherwise the extension is void
                  </td>
                  <td>
                    <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
                      DOR, Estate Tax Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Extension of time to pay</td>
                  <td>
                    Not automatic. Requested on Form M-4768 by the original due date, and granted
                    only for undue hardship or reasonable cause; interest still accrues from the
                    original due date
                  </td>
                  <td>
                    <a href={MA_M4768} target="_blank" rel="noopener noreferrer">
                      DOR, Form M-4768
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Late filing or late payment</td>
                  <td>
                    Penalties of 1% per month, up to 25% of the tax, plus interest; the interest
                    rate may change each quarter
                  </td>
                  <td>
                    <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
                      DOR, Estate Tax Guide
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Federal Form 706, if required</td>
                  <td>
                    Generally nine months after death, with a six-month extension available if
                    requested before the due date and the estimated tax is paid
                  </td>
                  <td>
                    <a href={IRS_FILING} target="_blank" rel="noopener noreferrer">
                      IRS, Filing estate and gift tax returns
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fine">
            Verified against mass.gov and irs.gov as of {LAST_REVIEWED}. DOR&apos;s Estate Tax Guide
            was last updated April 23, 2026. Deadlines, extension terms, penalties and interest
            rates may change.
          </p>
          <p>
            DOR notes that the return may be filed and the tax paid online through MassTaxConnect,
            and says that filing and paying electronically may speed the issuance of the closing
            letter. The IRS separately lists{" "}
            <a href={IRS_ABOUT_706} target="_blank" rel="noopener noreferrer">
              Form 706 and its instructions
            </a>{" "}
            for federal filings.
          </p>

          <h2>Why can the Massachusetts estate lien matter for real estate?</h2>
          <p>
            DOR states that a lien arises automatically on real estate owned by a decedent at the
            time of death. When a return is required, a Certificate Releasing Massachusetts Estate
            Lien may be needed to sell or refinance real estate, and DOR says failing to file Form
            M-706 prevents its issuance. When the estate is below the filing threshold, DOR says an
            affidavit of the personal representative recorded at the registry of deeds is used
            instead. These are legal and tax steps handled by the family&apos;s attorney and CPA,
            and the timing may matter if a home sale is pending.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            (page updated April 23, 2026), sections on releases of lien. Verified against mass.gov
            as of {LAST_REVIEWED}.
          </p>

          <h2>What information may your CPA and attorney ask a financial advisor to gather?</h2>
          <p>
            An estate tax return depends on a complete and accurate picture of what the decedent
            owned and how it was held. A CPA and attorney may ask the household&apos;s financial
            advisor to pull together information the advisor already has access to. It is a
            gathering role only. The advisor does not decide what belongs on a return.
          </p>
          <ul>
            <li>
              <b>Account values.</b> Statement values for bank, brokerage and retirement accounts,
              which may be needed as of the date of death and, where an election applies, an
              alternate date.
            </li>
            <li>
              <b>Titling.</b> How each account and property is owned, such as individually, jointly
              or in a trust, since ownership may affect how an asset is reported and how it passes.
            </li>
            <li>
              <b>Beneficiary designations.</b> Who is named on retirement accounts, annuities and
              life insurance, and whether the forms match the family&apos;s documents.
            </li>
            <li>
              <b>Trust funding status.</b> Which assets have been retitled into a trust and which
              have not. A trust that is not funded may not work the way it was drafted, so this is
              often a question for the attorney.
            </li>
            <li>
              <b>Lifetime gifts.</b> Gifts the household has reported or discussed, because the
              Massachusetts filing test adds adjusted taxable gifts to the gross estate.
            </li>
            <li>
              <b>Liquidity.</b> Which assets could be turned into cash, since the return and any
              tax are generally due nine months after death.
            </li>
          </ul>
          <p>
            For the account-by-account follow-through on trusts, read{" "}
            <Link href="/guides/funding-a-trust">the guide to funding a trust in Massachusetts</Link>.
            For how a QTIP election may appear on a Massachusetts return, read{" "}
            <Link href="/guides/qtip-trust">
              how a QTIP trust may interact with the Massachusetts estate tax threshold
            </Link>
            .
          </p>

          <h2>What should you bring to meetings with your attorney and CPA?</h2>
          <p>
            These items are educational starting points. Your professionals can tell you which are
            relevant to your situation.
          </p>
          <div className="callout reveal">
            <p>
              <b>Checklist for your attorney and CPA meetings</b>
            </p>
            <ul>
              <li>A summary balance sheet of accounts, real estate, business interests and debts</li>
              <li>Current statements for each account, kept at a summary level without passwords</li>
              <li>A list of how each asset is titled and who is named as beneficiary</li>
              <li>Copies of wills, trusts and powers of attorney, if you have them</li>
              <li>A list of which assets have been moved into any trust, and which have not</li>
              <li>A record of lifetime gifts and any gift tax returns your CPA has filed</li>
              <li>Names and contact details for your attorney, CPA and any named personal representative</li>
              <li>Questions about who files, when the return and payment are due, and how cash might be raised</li>
            </ul>
          </div>

          <h2>Who does what when an estate tax return is involved?</h2>
          <p>
            MSA Financial is a fee-based, fiduciary SEC-registered investment adviser. Michael
            Cammarata, CFP®, is not an attorney or CPA and does not draft legal documents, give
            legal or tax advice, or prepare tax returns. His role is to coordinate the financial
            side of the work with the professionals you choose. Read more about{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor coordinates estate planning with your attorney and CPA
            </Link>
            .
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Advise</span>
              <h3>The attorney advises on the law and handles legal filings</h3>
              <p>
                Your attorney drafts and finalizes legal documents and handles court and registry
                filings, such as the appointment of a personal representative.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Prepare</span>
              <h3>The CPA advises on tax and prepares the returns</h3>
              <p>
                Your CPA reviews estate and income tax effects, and prepares and files any
                Massachusetts or federal estate tax return.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>The advisor gathers financial information and tracks follow-up</h3>
              <p>
                The advisor organizes account values, titling, beneficiary and trust funding
                information, and tracks open items between your attorney and CPA.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Revisit</span>
              <h3>The household reviews as things change</h3>
              <p>
                Asset values, family circumstances and tax rules change, which may call for another
                review with your professionals.
              </p>
            </div>
          </div>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Organize your financial information in one conversation</h3>
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
            legal, tax, or investment advice. It does not recommend any strategy for any reader.
            Investment advisory services are offered through MSA Financial, LLC, a Registered
            Investment Adviser (CRD #107768). MSA Financial is an SEC-registered investment
            adviser. Registration with the SEC does not imply a certain level of skill or training.
            Investing involves risk, including the potential loss of principal. Michael Cammarata
            is not an attorney or CPA and does not provide legal or tax advice. He does not draft
            legal documents or prepare tax returns. He coordinates with clients&apos; existing
            estate attorneys and CPAs. Tax treatment depends on individual circumstances, and legal
            and tax advice should be obtained from your own attorney and CPA. The Massachusetts and
            federal figures and deadlines were verified against mass.gov and irs.gov as of October
            27, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
