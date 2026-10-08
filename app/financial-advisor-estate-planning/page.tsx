import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const SEO_TITLE = "Financial Advisor Estate Planning in Massachusetts";
const SEO_DESCRIPTION =
  "A financial advisor may coordinate beneficiaries, trust funding, and tax-aware account decisions with your attorney and CPA. Learn the role in Massachusetts.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Financial%20Advisor%20Estate%20Planning&label=Massachusetts%20financial%20coordination";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  alternates: { canonical: "/financial-advisor-estate-planning" },
  openGraph: {
    type: "website",
    url: "/financial-advisor-estate-planning",
    siteName: "MSA Financial",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial financial advisor estate planning coordination",
      },
    ],
  },
};

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "Does a financial advisor replace an estate attorney?",
    a: "No. An estate attorney provides legal advice and prepares legal documents such as wills and trusts. A financial advisor does not draft legal documents or give legal advice. At MSA Financial, the role is to help organize financial information and questions so that the attorney and CPA you choose can work from a more complete picture.",
  },
  {
    q: "What should a financial advisor coordinate in estate planning?",
    a: "Depending on your situation, an advisor may help organize an account and ownership inventory, review beneficiary designations against signed documents, flag trust-funding follow-up items, consider how account decisions may interact with tax questions for your CPA, and keep timing questions visible as circumstances change. Legal and tax conclusions stay with your attorney and CPA.",
  },
  {
    q: "How does Massachusetts estate tax affect planning?",
    a: "Massachusetts requires an estate tax return when a decedent's gross estate plus adjusted taxable gifts exceeds $2,000,000, and it does not offer spousal portability of an unused exemption. Because the rules are specific and may change, questions about how they apply to your family belong with your estate attorney and CPA. As of October 7, 2026, see the Massachusetts Department of Revenue Estate Tax Guide.",
  },
];

const FAQ_ITEMS: FaqItem[] = FAQ_TEXT;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://www.preserveyourestate.com/financial-advisor-estate-planning#service",
      name: "Financial Advisor Estate Planning Coordination",
      description:
        "Financial coordination for Massachusetts families, connecting beneficiary designations, trust-funding follow-up, and tax-aware account questions with the client's own estate attorney and CPA.",
      url: "https://www.preserveyourestate.com/financial-advisor-estate-planning",
      provider: {
        "@type": "FinancialService",
        "@id": "https://www.preserveyourestate.com/#org",
        name: "MSA Financial, LLC",
        url: "https://www.preserveyourestate.com",
      },
      areaServed: { "@type": "State", name: "Massachusetts" },
      serviceType: "Estate Structure & Trust Funding",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.preserveyourestate.com/financial-advisor-estate-planning#faq",
      mainEntity: FAQ_TEXT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function FinancialAdvisorEstatePlanningPage() {
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
            <span>Financial Advisor Estate Planning</span>
          </nav>
          <h1 className="hero-anim d2">
            How a financial advisor fits into <em>estate planning</em> for Massachusetts families
          </h1>
          <p className="lead hero-anim d3">
            A financial advisor&apos;s role in estate planning is coordination. At MSA Financial, that
            may include reviewing beneficiary designations, organizing trust-funding follow-up, and
            preparing questions for your CPA. Your estate attorney provides legal advice and drafts
            documents, and your CPA advises on taxes. Michael Cammarata, CFP®, is neither an attorney
            nor a CPA.
          </p>
          <div className="hero-ctas hero-anim d4">
            <Link className="btn btn-gold" href="/#booking">
              Schedule a Coordination Conversation <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap article">
          <h2>What does a financial advisor coordinate in estate planning?</h2>
          <p>
            Estate documents and financial accounts are handled by different professionals, and the
            details between them can be easy to miss. Michael Cammarata, CFP®, acts as a central
            point of contact for the financial side of that picture, helping connect your portfolio
            with the attorney and CPA you engage. The items below describe what that coordination may
            include.
          </p>
          <ul className="strategy-list stagger">
            <li>
              <h3>Beneficiary designations</h3>
              <p>
                Compare the beneficiaries named on retirement accounts, insurance, and other accounts
                with your signed estate documents, so differences can be raised with your attorney.
              </p>
            </li>
            <li>
              <h3>Trust funding handoffs</h3>
              <p>
                Organize account registrations and ownership details so that retitling steps your
                attorney identifies can be tracked and completed. A trust document alone may not
                address assets that were never retitled. See{" "}
                <Link href="/guides/funding-a-trust">
                  how funding a trust works and how the attorney, advisor and CPA hand off the steps
                </Link>
                .
              </p>
            </li>
            <li>
              <h3>Tax-aware account decisions</h3>
              <p>
                Keep decisions about taxable, tax-deferred, and Roth accounts in context with estate
                planning questions that your CPA may want to evaluate.
              </p>
            </li>
            <li>
              <h3>Timing with the CPA</h3>
              <p>
                Flag financial events, such as large distributions or property sales, that may affect
                tax questions, so your CPA can weigh in before decisions are made.
              </p>
            </li>
          </ul>

          <h2>What stays with your estate attorney and CPA?</h2>
          <p>
            Coordination does not replace your other professionals. Some responsibilities remain with
            them, and you choose and engage each one directly.
          </p>
          <ul className="strategy-list stagger">
            <li>
              <h3>Your estate attorney</h3>
              <p>
                Provides legal advice, decides which legal structures may fit your family, and drafts
                wills, trusts, and other legal documents.
              </p>
            </li>
            <li>
              <h3>Your CPA</h3>
              <p>
                Provides tax advice, determines how tax rules apply to your situation, and prepares
                tax returns.
              </p>
            </li>
          </ul>
          <div className="callout reveal">
            <p>
              <b>MSA Financial is not a law firm or an accounting firm.</b> Michael Cammarata is not an
              attorney or CPA. He does not provide legal or tax advice, draft legal documents, or
              prepare tax returns. If you do not yet have an attorney or CPA, he can share referrals
              to independent Massachusetts professionals, and you decide whom to engage.
            </p>
          </div>

          <h2>How does the four-step coordination process work?</h2>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Inventory</span>
              <h3>Map the estate</h3>
              <p>Gather accounts, ownership, beneficiaries, and current estate documents in one place.</p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Model</span>
              <h3>Support the design</h3>
              <p>Provide financial information your attorney and CPA may use when evaluating options.</p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Coordinate</span>
              <h3>Track the handoffs</h3>
              <p>Follow up on retitling and beneficiary items identified by your attorney and CPA.</p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Review</span>
              <h3>Revisit annually</h3>
              <p>Update the picture as assets, family priorities, or Massachusetts rules change.</p>
            </div>
          </div>

          <h2>Which Massachusetts factors may affect estate planning?</h2>
          <p>
            Two Massachusetts features often shape these conversations. First, the state&apos;s estate
            tax filing threshold is $2,000,000, which is lower than the federal threshold. According to
            the Massachusetts Department of Revenue{" "}
            <a
              href="https://www.mass.gov/info-details/estate-tax-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estate Tax Guide
            </a>{" "}
            (updated April 23, 2026; reviewed October 7, 2026), a return is required for decedents
            dying on or after January 1, 2023 when the gross estate plus adjusted taxable gifts exceeds
            $2,000,000, and a credit of $99,600 applies. The guide also notes that the calculation
            steps changed for decedents dying on or after August 1, 2025, so the amount of tax for any
            estate is a question for your attorney and CPA.
          </p>
          <p>
            Second, Massachusetts does not offer spousal portability for its estate tax exemption, so
            a surviving spouse generally cannot use a deceased spouse&apos;s unused Massachusetts
            exemption. Married couples sometimes discuss trust structures with their attorney for this
            reason. For general background, read the educational{" "}
            <Link href="/guides/ab-trust">A/B trust planning guide</Link>, and for the marital trust
            often paired with it, read{" "}
            <Link href="/guides/qtip-trust">how a QTIP trust may work for a married Massachusetts couple</Link>.
            Any structure should be evaluated and drafted by a qualified estate planning attorney.
          </p>
          <p>
            To organize a general estimate before you speak with your professionals, use the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link>. It is an educational
            tool, not legal or tax advice.
          </p>

          <h2>Who does MSA Financial work with?</h2>
          <ul className="strategy-list stagger">
            <li>
              <h3>Households with $2M+ in investable assets</h3>
              <p>
                The practice is designed for households with complex estate and tax questions that
                span more than one professional.
              </p>
            </li>
            <li>
              <h3>Massachusetts residents</h3>
              <p>
                Planning questions often involve the Massachusetts estate tax and state-specific
                rules, which are worth reviewing with Massachusetts professionals.
              </p>
            </li>
            <li>
              <h3>Pre-retirees</h3>
              <p>
                The decade before retirement is often when estate, tax, and retirement income
                decisions begin to overlap.
              </p>
            </li>
          </ul>
          <p>
            MSA Financial is a fee-based, fiduciary SEC-registered investment adviser serving
            households in Braintree, Sandwich, Framingham, and Barnstable County, Massachusetts. A
            conversation can help determine whether this scope fits your circumstances. To
            understand what a fiduciary standard means, read the guide on{" "}
            <Link href="/guides/fiduciary-vs-financial-advisor">
              what a fiduciary financial advisor is and how it differs from other advisors
            </Link>
            . For the
            investment side of the relationship, see our{" "}
            <Link href="/wealth-management">tax-efficient wealth management service</Link>. For a
            broader view of planning across estate, tax, retirement, and business questions, see{" "}
            <Link href="/financial-planning-for-high-net-worth-individuals">
              financial planning for high-net-worth individuals
            </Link>
            . For general estate-planning education, read the{" "}
            <Link href="/guides/massachusetts-estate-planning">Massachusetts estate planning guide</Link>.
          </p>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Discuss how your financial picture connects to your estate plan</h3>
            <p>
              Schedule a conversation to talk through your accounts, beneficiaries, and the questions
              you may want to bring to your attorney and CPA.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This page is for educational purposes only and does not constitute individualized legal,
            tax, or investment advice. Investment advisory services are offered through MSA
            Financial, LLC, a Registered Investment Adviser (CRD #107768). MSA Financial is an
            SEC-registered investment adviser. Registration with the SEC does not imply a certain
            level of skill or training. Michael Cammarata is not an attorney or CPA and does not
            provide legal or tax advice. He does not draft legal documents or prepare tax returns.
            He coordinates with clients&apos; existing estate attorneys and CPAs. Tax treatment depends
            on individual circumstances, and legal and tax advice should be obtained from your own
            attorney and CPA.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
