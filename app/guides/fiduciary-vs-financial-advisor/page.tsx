import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/fiduciary-vs-financial-advisor";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "Fiduciary vs Financial Advisor: A Massachusetts Guide";
const SEO_DESCRIPTION =
  "Fiduciary vs financial advisor: learn how SEC standards of conduct differ, how advisors are paid, and what Massachusetts households may ask before hiring one.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=Fiduciary%20vs%20Financial%20Advisor&label=Massachusetts%20guide";

const SOURCE_IA_INTERPRETATION =
  "https://www.sec.gov/files/rules/interp/2019/ia-5248.pdf";
const SOURCE_REG_BI =
  "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/regulation-best-interest";
const SOURCE_STAFF_BULLETIN =
  "https://www.sec.gov/about/divisions-offices/division-trading-markets/broker-dealers/staff-bulletin-standards-conduct-broker-dealers-investment-advisers-conflicts-interest";
const SOURCE_SUITABILITY =
  "https://www.sec.gov/newsroom/speeches-statements/clayton-regulation-best-interest-investment-adviser-fiduciary-duty";
const SOURCE_CRS = "https://www.investor.gov/CRS";
const SOURCE_FEES =
  "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated";
const FORM_ADV_URL =
  "https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=1008692";
const FORM_CRS_URL = "https://reports.adviserinfo.sec.gov/crs/crs_107768.pdf";
const SOURCE_IAPD =
  "https://www.investor.gov/introduction-investing/getting-started/working-investment-professional/using-iapd";
const SOURCE_BROKERS =
  "https://www.investor.gov/introduction-investing/getting-started/working-investment-professional/brokers";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "How can I tell if my financial advisor is a fiduciary?",
    a: "Start by confirming that the person or firm is registered, using the SEC's Check Out Your Investment Professional tool at Investor.gov. Then read the firm's Form CRS and Form ADV Part 2A, and ask whether the advisor is a fiduciary for every service provided to you and whether the advisor is registered as an investment adviser, a broker-dealer, or both. Ask for the answers in writing.",
  },
  {
    q: "What are a fiduciary's duties?",
    a: "The SEC describes the investment adviser fiduciary duty as having two parts: a duty of care and a duty of loyalty. The duty of care includes providing advice that is in the client's best interest, based on a reasonable understanding of the client's objectives. The duty of loyalty means not placing the adviser's own interests ahead of the client's. Other sources may list the duties differently.",
  },
  {
    q: "What is a fiduciary not allowed to do?",
    a: "Under the duty of loyalty, an investment adviser may not place its own interests ahead of the client's, and must eliminate a conflict of interest or fully and fairly disclose it so the client can give informed consent. The SEC notes that disclosure alone may not be enough when a conflict cannot be adequately disclosed or addressed. A fiduciary standard does not promise any investment result.",
  },
  {
    q: "Is a registered investment adviser a fiduciary?",
    a: "Under the SEC's interpretation of the Investment Advisers Act of 1940, an SEC-registered investment adviser is a fiduciary, and the duty applies according to the scope of the relationship the adviser and client agree to. Registration does not imply a certain level of skill or training, and being a fiduciary does not mean an advisor has no conflicts.",
  },
  {
    q: "Should I choose a fiduciary financial advisor or a broker?",
    a: "The standard of conduct is one factor among several. Broker-dealers must act in a retail customer's best interest when making a recommendation under Regulation Best Interest, and investment advisers owe a fiduciary duty, but the two standards differ in when they apply and what they cover. Compare services, total cost, how each professional is paid, and conflicts, using Form CRS and Form ADV Part 2A.",
  },
  {
    q: "What is the average fee for a fiduciary advisor?",
    a: "This guide does not publish an average because fees depend on the firm, the services, and how the adviser is paid, such as a percentage of assets, a fixed fee, or an hourly fee. A firm's Form ADV Part 2A describes its fees, and Form CRS summarizes them. Ask what you would pay in total, directly and indirectly.",
  },
];

const FAQ_ITEMS: FaqItem[] = FAQ_TEXT;
const LAST_REVIEWED = "October 23, 2026";

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
    modifiedTime: "2026-10-23",
    authors: ["Michael Cammarata, CFP®"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "MSA Financial guide to fiduciary vs financial advisor for Massachusetts households",
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
        "An educational guide to what a fiduciary financial advisor is, how SEC standards of conduct differ for investment advisers and broker-dealers, how advisors are paid, and questions Massachusetts households may ask before hiring an advisor.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-08",
      dateModified: "2026-10-23",
      citation: [
        SOURCE_IA_INTERPRETATION,
        SOURCE_REG_BI,
        SOURCE_STAFF_BULLETIN,
        SOURCE_CRS,
        SOURCE_FEES,
        SOURCE_IAPD,
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

export default function FiduciaryVsFinancialAdvisorGuide() {
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
            <span>Fiduciary vs Financial Advisor</span>
          </nav>
          <h1 className="hero-anim d2">
            What is a <em>fiduciary financial advisor</em>, and how does it differ from other
            advisors?
          </h1>
          <p className="lead hero-anim d3">
            A fiduciary financial advisor is an investment adviser that owes clients a duty of care
            and loyalty under federal law, which the SEC describes as acting in the client&apos;s
            best interest and addressing conflicts of interest. &ldquo;Financial advisor&rdquo; is a
            general title, so the standard that applies depends on how a person or firm is
            registered.
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
              Advisor Selection Guide · Last reviewed {LAST_REVIEWED}
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap article guide-fiduciary">
          <div className="callout reveal">
            <p>
              <b>Key takeaways</b>
            </p>
            <ul>
              <li>
                &ldquo;Financial advisor&rdquo; is a general job title. The legal standard that
                applies depends on how the person or firm is registered and what service is
                provided.
              </li>
              <li>
                Fiduciary and fee-based describe different things: the first is a standard of
                conduct, the second is a way of describing compensation.
              </li>
              <li>
                Every compensation model can involve conflicts. Form ADV Part 2A and Form CRS are
                places to review them.
              </li>
              <li>
                Questions about wills, trusts, and taxes belong with your own attorney and CPA.
              </li>
            </ul>
          </div>

          <h2>What is a fiduciary financial advisor?</h2>
          <p>
            In the SEC&apos;s interpretation of the Investment Advisers Act of 1940, an investment
            adviser is a fiduciary. That fiduciary duty has two parts, and the SEC describes them
            this way:
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>Duty of care</h3>
              <ul>
                <li>Provide advice that is in the client&apos;s best interest.</li>
                <li>Base advice on a reasonable understanding of the client&apos;s objectives.</li>
                <li>
                  Depending on the relationship, provide advice and monitoring over the course of
                  the relationship.
                </li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>Duty of loyalty</h3>
              <ul>
                <li>Not place the adviser&apos;s own interests ahead of the client&apos;s.</li>
                <li>
                  Eliminate a conflict of interest or fully and fairly disclose it so the client
                  can give informed consent.
                </li>
                <li>
                  Disclosure alone may not be enough when a conflict cannot be adequately
                  disclosed or addressed.
                </li>
              </ul>
            </div>
          </div>
          <p>
            The duty applies according to the scope of the relationship the adviser and client
            agree to. It is a standard of conduct. It does not promise investment results, and it
            does not remove risk from investing.
          </p>
          <p className="fine">
            Source: U.S. Securities and Exchange Commission,{" "}
            <a href={SOURCE_IA_INTERPRETATION} target="_blank" rel="noopener noreferrer">
              Commission Interpretation Regarding Standard of Conduct for Investment Advisers
              (Release IA-5248, effective July 12, 2019)
            </a>
            . Reviewed October 8, 2026.
          </p>

          <h2>Fiduciary vs. suitability standard: what is the difference?</h2>
          <p>
            Broker-dealers and investment advisers can offer different types of relationships,
            services, and compensation models. The SEC treats them under different standards of
            conduct. Historically, broker-dealer recommendations were generally governed by a
            suitability standard. The SEC&apos;s Regulation Best Interest, adopted June 5, 2019,
            now requires a broker-dealer to act in a retail customer&apos;s best interest at the
            time it makes a recommendation of a securities transaction or investment strategy,
            without placing its own interests ahead of the customer&apos;s. The SEC describes this
            as enhancing broker-dealer obligations beyond the earlier suitability requirements.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Investment adviser</th>
                  <th scope="col">Broker-dealer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard of conduct</td>
                  <td>Fiduciary duty of care and loyalty under the Advisers Act.</td>
                  <td>
                    Regulation Best Interest: disclosure, care, conflict-of-interest, and
                    compliance obligations.
                  </td>
                </tr>
                <tr>
                  <td>When it applies</td>
                  <td>Generally throughout the advisory relationship, according to its scope.</td>
                  <td>
                    When a recommendation is made to a retail customer. It does not, by itself,
                    require ongoing advice or monitoring.
                  </td>
                </tr>
                <tr>
                  <td>Typical services</td>
                  <td>
                    Often ongoing advice about a portfolio; may monitor or manage accounts.
                  </td>
                  <td>
                    Often transactional, such as executing orders and recommending investments.
                  </td>
                </tr>
                <tr>
                  <td>Typical compensation</td>
                  <td>
                    Often an ongoing fee based on assets; may instead or also be fixed, hourly, or
                    other fees.
                  </td>
                  <td>Often a commission or markup on a transaction.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Neither model is automatically a better fit for every household. The right comparison
            is the total expected cost against the services you actually receive. Some firms and
            professionals can act in more than one capacity, so it may help to ask which role
            applies to each recommendation.
          </p>
          <p className="fine">
            Sources: SEC,{" "}
            <a href={SOURCE_REG_BI} target="_blank" rel="noopener noreferrer">
              Regulation Best Interest compliance guide
            </a>
            ;{" "}
            <a href={SOURCE_STAFF_BULLETIN} target="_blank" rel="noopener noreferrer">
              staff bulletin on standards of conduct for broker-dealers and investment advisers
            </a>
            ;{" "}
            <a href={SOURCE_SUITABILITY} target="_blank" rel="noopener noreferrer">
              Chairman Clayton statement on Regulation Best Interest and the adviser fiduciary
              duty
            </a>
            ; and Investor.gov,{" "}
            <a href={SOURCE_CRS} target="_blank" rel="noopener noreferrer">
              Form CRS (relationship summary)
            </a>
            . Reviewed October 8, 2026. SEC staff bulletins are guidance, not rules.
          </p>

          <h2>How are fiduciary, fee-based advisors paid and what conflicts can remain?</h2>
          <p>
            &ldquo;Fee-based&rdquo; generally refers to compensation that comes from fees paid by
            the client. It is not a single regulatory category, and the term can be used
            differently across the industry, so it is reasonable to ask any advisor to explain
            exactly what it means in their practice. Investor.gov notes that investment
            professionals are commonly paid through transaction fees, such as commissions, or
            ongoing fees, such as a percentage of assets, and that other costs may apply.
          </p>
          <p>
            Being a fiduciary does not mean an advisor has no conflicts. Examples of conflicts that
            can exist under different pay structures include:
          </p>
          <ul className="strategy-list stagger">
            <li>
              <h3>Asset-based fees</h3>
              <p>
                When a fee is based on assets managed, an advisor may have an incentive to
                encourage keeping or adding assets in the account, which a client may want to
                weigh against other uses of the same money.
              </p>
            </li>
            <li>
              <h3>Commissions and product-based pay</h3>
              <p>
                When compensation varies by product or account type, a professional may have an
                incentive to recommend one over another.
              </p>
            </li>
            <li>
              <h3>Third-party payments and affiliations</h3>
              <p>
                Referral arrangements, affiliated firms, or other payments may create
                incentives that a client may want to understand.
              </p>
            </li>
          </ul>
          <p>
            Under the duty of loyalty described above, an adviser must eliminate a conflict or
            fully and fairly disclose it, so the practical step is to read the disclosures. An
            adviser&apos;s Form ADV Part 2A describes its services, fees, and conflicts in more
            detail, and Form CRS provides a short summary. Neither a transaction-based nor an
            ongoing-fee structure is automatically lower in cost.
          </p>
          <p className="fine">
            Source: Investor.gov,{" "}
            <a href={SOURCE_FEES} target="_blank" rel="noopener noreferrer">
              How Fees and Expenses Affect Your Investment Portfolio
            </a>{" "}
            and{" "}
            <a href={SOURCE_CRS} target="_blank" rel="noopener noreferrer">
              Form CRS
            </a>
            . Reviewed October 8, 2026.
          </p>

          <h2>How can you tell if your financial advisor is a fiduciary?</h2>
          <p>
            You can check registration and read the disclosures yourself, then ask the advisor
            directly. This is a general process, not a verdict on any one advisor.
          </p>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Check</span>
              <h3>Confirm registration</h3>
              <p>
                Search the name on Investor.gov&apos;s Check Out Your Investment Professional tool,
                which uses the IAPD database, and confirm the person or firm is currently registered.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Read</span>
              <h3>Review the disclosures</h3>
              <p>
                Read the firm&apos;s Form CRS and Form ADV Part 2A for services, fees, conflicts, and
                disciplinary history.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Ask</span>
              <h3>Ask about the standard</h3>
              <p>
                Ask whether the person is a fiduciary for every service provided to you, and whether
                they are registered as an investment adviser, a broker-dealer, or both.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Confirm</span>
              <h3>Get the answers in writing</h3>
              <p>
                Keep written answers to compare advisors, and take legal or tax questions to your own
                attorney and CPA.
              </p>
            </div>
          </div>
          <p className="fine" style={{ marginTop: "1.5rem" }}>
            Sources: Investor.gov,{" "}
            <a href={SOURCE_IAPD} target="_blank" rel="noopener noreferrer">
              Using IAPD
            </a>
            ,{" "}
            <a href={SOURCE_CRS} target="_blank" rel="noopener noreferrer">
              Form CRS
            </a>{" "}
            and{" "}
            <a href={SOURCE_BROKERS} target="_blank" rel="noopener noreferrer">
              Brokers
            </a>
            . Reviewed {LAST_REVIEWED}. Registration rules can differ for firms and individual
            representatives, so contact your state securities regulator if a registration is
            unclear.
          </p>

          <h2>What questions should you ask before hiring an advisor?</h2>
          <p>
            These questions are educational starting points and apply to any advisor, including
            MSA Financial. Written answers may help you compare them.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>About the standard</h3>
              <ul>
                <li>Are you a fiduciary for every service you provide to me, at all times?</li>
                <li>Are you registered as an investment adviser, a broker-dealer, or both?</li>
                <li>Where can I read your Form CRS and Form ADV Part 2A?</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>About pay and conflicts</h3>
              <ul>
                <li>What will I pay in total, directly and indirectly?</li>
                <li>Does your compensation change with the products or accounts I choose?</li>
                <li>What conflicts of interest could affect your recommendations?</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>About your attorney and CPA</h3>
              <ul>
                <li>
                  How do you work with my estate attorney and CPA, and how often do you
                  communicate with them?
                </li>
                <li>
                  Which decisions do you leave to my attorney or CPA, and where do you stop?
                </li>
                <li>
                  Who tracks follow-up items, such as retitling assets into a trust and reviewing
                  beneficiary designations?
                </li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>About the relationship</h3>
              <ul>
                <li>What services are included, and how often will we review my plan?</li>
                <li>How many households like mine do you work with?</li>
                <li>What is your disciplinary history, if any, on the SEC&apos;s adviser database?</li>
              </ul>
            </div>
          </div>
          <p>
            For Massachusetts households with larger estates, the coordination questions can matter
            because estate documents, account titling, and tax decisions are handled by different
            professionals. The{" "}
            <Link href="/guides/massachusetts-estate-planning">
              Massachusetts estate planning guide
            </Link>{" "}
            outlines how those pieces may connect. Legal and tax questions should go to your own
            attorney and CPA.
          </p>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <h2>How does MSA Financial approach this?</h2>
          <p>
            MSA Financial, LLC is an SEC-registered investment adviser (CRD #107768). The firm
            describes its approach as fiduciary and fee-based, with no products to sell or
            commissions at stake. Registration with the SEC does not imply a certain level of
            skill or training, and a fiduciary standard does not guarantee any outcome.
          </p>
          <p>
            Michael Cammarata, CFP®, acts as a central point of contact between your investment
            portfolio, your estate attorney, and your CPA. He is not an attorney or CPA and does
            not draft legal documents, provide legal or tax advice, or prepare tax returns. See how
            that role works in practice in{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor fits into estate planning
            </Link>{" "}
            and the firm&apos;s{" "}
            <Link href="/wealth-management">tax-efficient wealth management service</Link>. For
            households weighing several planning areas together, see{" "}
            <Link href="/financial-planning-for-high-net-worth-individuals">
              financial planning for high-net-worth individuals
            </Link>
            .
          </p>
          <p>
            Like any advisory firm, MSA Financial has potential conflicts of interest. You can
            review the firm&apos;s{" "}
            <a href={FORM_ADV_URL} target="_blank" rel="noopener noreferrer">
              Form ADV Part 2A and 2B
            </a>{" "}
            and{" "}
            <a href={FORM_CRS_URL} target="_blank" rel="noopener noreferrer">
              Form CRS
            </a>{" "}
            for the firm&apos;s services, fees, and conflicts before deciding whether the
            relationship fits your circumstances.
          </p>

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Bring your questions about the advisor relationship to one conversation</h3>
            <p>
              Schedule a conversation to review how coordination with your attorney and CPA may
              work, and to ask any of the questions in this guide.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This guide is for educational purposes only and does not constitute individualized
            legal, tax, or investment advice. Investment advisory services are offered through
            MSA Financial, LLC, a Registered Investment Adviser (CRD #107768). MSA Financial is an
            SEC-registered investment adviser. Registration with the SEC does not imply a certain
            level of skill or training. Investing involves risk, including the potential loss of
            principal. Michael Cammarata is not an attorney or CPA and does not provide legal or
            tax advice. He does not draft legal documents or prepare tax returns. He coordinates
            with clients&apos; existing estate attorneys and CPAs. Tax treatment depends on
            individual circumstances, and legal and tax advice should be obtained from your own
            attorney and CPA. Regulatory descriptions reflect SEC materials reviewed October 8
            and October 23, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
