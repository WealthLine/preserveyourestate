import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const SEO_TITLE = "What Is Comprehensive Financial Planning? | MSA Financial";
const SEO_DESCRIPTION =
  "Comprehensive financial planning connects retirement income, tax-aware accounts, and estate structure, coordinated with your attorney and CPA. See how it works in Massachusetts.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Comprehensive%20Financial%20Planning&label=Coordinated%20with%20your%20attorney%20and%20CPA";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  alternates: { canonical: "/comprehensive-financial-planning" },
  openGraph: {
    type: "website",
    url: "/comprehensive-financial-planning",
    siteName: "MSA Financial",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial comprehensive financial planning coordinated with your attorney and CPA",
      },
    ],
  },
};

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "What is comprehensive financial planning?",
    a: "Comprehensive financial planning looks at retirement income, investments, taxes, and estate structure together rather than one at a time. At MSA Financial, it also includes coordinating with the estate attorney and CPA you choose. The scope, cost, and usefulness depend on your circumstances, and the plan may need to change as your goals or the rules change.",
  },
  {
    q: "Is comprehensive financial planning the same as investment management?",
    a: "No. Investment management focuses on the portfolio. Comprehensive planning places the portfolio in context with retirement income needs, account types, beneficiary and ownership details, and estate documents. The two can work together, but planning typically involves more questions to review and more professionals to coordinate with, which may add time and cost.",
  },
  {
    q: "Does a comprehensive plan include legal or tax advice?",
    a: "No. Michael Cammarata, CFP®, is not an attorney or CPA. He does not provide legal or tax advice, draft legal documents, or prepare tax returns. Your attorney provides legal advice and prepares documents, and your CPA provides tax advice and prepares returns. The planning work helps organize the financial information and questions those professionals may need.",
  },
  {
    q: "What if I do not have an estate attorney or CPA yet?",
    a: "MSA Financial can share referrals to independent Massachusetts estate planning attorneys and CPAs. You decide whether to engage any of them, and you contract with them directly. Their fees are separate from MSA Financial's fees.",
  },
  {
    q: "How often is a comprehensive plan reviewed?",
    a: "A review is typically held at least annually, and sooner when something material changes, such as a retirement date, a family event, a business transition, or a change in tax or estate rules. Reviews are a way to revisit assumptions. They do not guarantee any particular result.",
  },
];

const FAQ_ITEMS: FaqItem[] = FAQ_TEXT;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://www.preserveyourestate.com/comprehensive-financial-planning#service",
      name: "Comprehensive Financial Planning",
      description:
        "Comprehensive financial planning for Massachusetts pre-retiree households, connecting retirement income, tax-aware account coordination, estate structure and trust funding, and an annual review with the client's own estate attorney and CPA.",
      url: "https://www.preserveyourestate.com/comprehensive-financial-planning",
      provider: {
        "@type": "FinancialService",
        "@id": "https://www.preserveyourestate.com/#org",
        name: "MSA Financial, LLC",
        url: "https://www.preserveyourestate.com",
      },
      areaServed: { "@type": "State", name: "Massachusetts" },
      serviceType: "Comprehensive Financial Planning",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.preserveyourestate.com/comprehensive-financial-planning#faq",
      mainEntity: FAQ_TEXT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ComprehensiveFinancialPlanningPage() {
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
            <span>Comprehensive Financial Planning</span>
          </nav>
          <h1 className="hero-anim d2">
            What is <em>comprehensive financial planning</em>?
          </h1>
          <p className="lead hero-anim d3">
            Comprehensive financial planning looks at retirement income, investments, taxes, and
            estate structure together instead of one at a time. At MSA Financial, it also means
            coordinating with the estate attorney and CPA you choose. Results depend on your
            circumstances, and a plan may change as your goals or the rules change.
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
          <h2>What does comprehensive financial planning include?</h2>
          <p>
            For Massachusetts pre-retiree households with $2M or more in investable assets,
            planning questions often overlap. Michael Cammarata, CFP®, acts as a central point of
            contact who helps keep those questions connected. The areas below describe the
            category-level scope, and what applies to you depends on your circumstances.
          </p>
          <ul className="strategy-list stagger">
            <li>
              <h3>Retirement income</h3>
              <p>
                Consider future spending, Social Security timing, and account withdrawals together.
                Assumptions about markets, taxes, and longevity are uncertain and may change.
              </p>
            </li>
            <li>
              <h3>Tax-aware account coordination</h3>
              <p>
                Keep taxable, tax-deferred, and Roth accounts in view together so decisions can be
                discussed with your CPA. Tax treatment depends on individual circumstances and may
                change with the rules.
              </p>
            </li>
            <li>
              <h3>Estate structure and trust funding</h3>
              <p>
                Organize account registrations, beneficiaries, and signed estate documents so
                follow-up items your attorney identifies can be tracked. Legal structures involve
                cost and trade-offs that your attorney can explain.
              </p>
            </li>
            <li>
              <h3>Annual review</h3>
              <p>
                Revisit the plan at least once a year, or when something material changes. A review
                updates assumptions, but it cannot guarantee a particular outcome.
              </p>
            </li>
          </ul>

          <h2>How is comprehensive planning different from investment management alone?</h2>
          <p>
            Investment management centers on the portfolio. Comprehensive planning places the
            portfolio alongside the other decisions that shape a household&apos;s finances, such as
            how accounts are owned, who the beneficiaries are, and how income may be drawn in
            retirement. Taking on more questions can mean more meetings and more professionals to
            coordinate, so it may not be necessary for every household.
          </p>

          <h2>How does coordination with your attorney and CPA work?</h2>
          <p>
            Coordination does not replace your other professionals. Each role stays distinct, and you
            choose and engage each professional directly.
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Household</span>
              <h3>You set the priorities</h3>
              <p>You decide your goals and which professionals to engage, and you make the final decisions.</p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Attorney</span>
              <h3>Your attorney drafts and titles documents</h3>
              <p>Provides legal advice and prepares wills, trusts, and other legal documents.</p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">CPA</span>
              <h3>Your CPA gives tax advice</h3>
              <p>Advises on how tax rules apply to your situation and prepares your tax returns.</p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Advisor</span>
              <h3>Your advisor coordinates the financial side</h3>
              <p>Organizes account information, tracks funding and beneficiary follow-up, and leads the annual review.</p>
            </div>
          </div>

          <div className="callout reveal">
            <p>
              <b>MSA Financial is not a law firm or an accounting firm.</b> Michael Cammarata is not
              an attorney or CPA. He does not provide legal or tax advice, draft legal documents, or
              prepare tax returns. If you do not yet have an attorney or CPA, he can share referrals
              to independent Massachusetts professionals, and you decide whom to engage.
            </p>
          </div>

          <h2>What questions may be worth bringing to your professionals?</h2>
          <ul className="strategy-list stagger">
            <li>
              <h3>For your attorney</h3>
              <p>
                Which accounts, if any, still need to be retitled to match your signed documents, and
                do your beneficiary designations agree with them?
              </p>
            </li>
            <li>
              <h3>For your CPA</h3>
              <p>
                Which upcoming financial events may affect your taxes, and when would you like to hear
                about them before decisions are made?
              </p>
            </li>
            <li>
              <h3>For your advisor</h3>
              <p>
                What information would each professional need from your accounts, and who is
                tracking each follow-up item?
              </p>
            </li>
          </ul>

          <h2>Where does this page fit with our other planning pages?</h2>
          <p>
            This page defines the approach. For the investment side of the relationship, see our{" "}
            <Link href="/wealth-management">tax-efficient wealth management service</Link>. For
            distribution and income questions as retirement approaches, see our{" "}
            <Link href="/retirement-planning">retirement income planning service</Link>. For
            households with more complex wealth, family, and business questions, see{" "}
            <Link href="/financial-planning-for-high-net-worth-individuals">
              financial planning for high-net-worth individuals
            </Link>
            . For the estate-planning side of the coordination, read how{" "}
            <Link href="/financial-advisor-estate-planning">a financial advisor fits into estate planning</Link>{" "}
            alongside your attorney and CPA.
          </p>
          <p>
            For educational background on the retirement side of a coordinated plan, read how{" "}
            <Link href="/guides/tax-advantaged-retirement-accounts">
              tax-advantaged retirement accounts differ and what to ask your CPA
            </Link>
            , how to{" "}
            <Link href="/guides/retirement-planning-tools">
              organize an account and income inventory before retirement planning conversations
            </Link>
            , and how{" "}
            <Link href="/guides/business-owner-retirement-planning">
              business owners may organize a retirement transition
            </Link>
            . These guides are educational and are not tax or legal advice.
          </p>

          <h2>Who may comprehensive financial planning suit?</h2>
          <p>
            It may suit Massachusetts households with $2M or more in investable assets, particularly
            in the decade before retirement, when retirement income, tax, and estate decisions begin
            to overlap. MSA Financial is a fee-based, fiduciary SEC-registered investment adviser
            serving households in Braintree, Sandwich, Framingham, and Barnstable County,
            Massachusetts. A conversation can help determine whether this scope fits your
            circumstances. To understand what a fiduciary standard means, read the guide on{" "}
            <Link href="/guides/fiduciary-vs-financial-advisor">
              what a fiduciary financial advisor is and how it differs from other advisors
            </Link>
            .
          </p>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Discuss how your financial plan connects to your attorney and CPA</h3>
            <p>
              Schedule a conversation to talk through your accounts, your planning priorities, and
              the questions you may want to bring to your attorney and CPA.
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
            He coordinates with clients&apos; existing estate attorneys and CPAs. Tax treatment
            depends on individual circumstances, and legal and tax advice should be obtained from
            your own attorney and CPA.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
