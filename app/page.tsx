import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MsaLockup from "@/components/MsaLockup";
import GapCard, { type Gap } from "@/components/GapCard";
import CoordinationHub from "@/components/CoordinationHub";
import TeaserCalc from "@/components/TeaserCalc";
import ReadinessChecklist from "@/components/ReadinessChecklist";
import FitSection from "@/components/FitSection";
import Faq, { type FaqItem } from "@/components/Faq";
import { BookingForm } from "@/components/LeadForms";

export const metadata: Metadata = {
  title: {
    absolute: "Massachusetts Estate Planning: Wealth Management | MSA Financial",
  },
  description:
    "Massachusetts estate planning and tax-focused wealth management, coordinated with your attorney and CPA. Explore guidance from MSA Financial.",
  openGraph: {
    title: "Massachusetts Estate Planning: Wealth Management | MSA Financial",
    description:
      "Massachusetts estate planning and tax-focused wealth management, coordinated with your attorney and CPA. Explore guidance from MSA Financial.",
    images: [
      {
        url: "https://www.preserveyourestate.com/og?topic=Massachusetts%20Estate%20Planning&label=MSA%20Financial",
        width: 1200,
        height: 630,
        alt: "MSA Financial Massachusetts estate planning resources",
      },
    ],
  },
};

const MAIN_OFFICE_PHONE = "(781) 843-3500";
const MAIN_OFFICE_PHONE_HREF = "tel:+17818433500";

type Office = {
  city: string;
  label: string;
  address: string;
  streetAddress?: string;
  postalCode: string;
};

const OFFICES: readonly Office[] = [
  {
    city: "Braintree",
    label: "South Shore headquarters",
    address: "25 Braintree Hill Park, Suite 303, Braintree, MA 02184",
    streetAddress: "25 Braintree Hill Park, Suite 303",
    postalCode: "02184",
  },
  {
    city: "Sandwich",
    label: "Cape Cod & the Islands",
    address: "90 Route 6A, Unit 4A, Sandwich, MA 02563",
    streetAddress: "90 Route 6A, Unit 4A",
    postalCode: "02563",
  },
  {
    city: "Framingham",
    label: "MetroWest, by appointment",
    address: "By appointment, Framingham, MA 01701",
    postalCode: "01701",
  },
];

const GAPS: Gap[] = [
  {
    num: "01",
    title: "The Unfunded Trust",
    tease: "A trust that was never funded may not work as it was drafted.",
    impact:
      "A revocable trust generally works only for assets that are titled in the trust's name or that name it as beneficiary. If funding was never finished, assets may still pass through probate and the trust may not operate as intended. Your attorney advises on retitling, and the advisor helps track the follow-up.",
    statBig: "Titling",
    statNote: "How each account and property is titled may determine whether a trust holds it.",
  },
  {
    num: "02",
    title: "No Massachusetts Portability",
    tease: "A surviving spouse may not be able to use the first spouse's unused Massachusetts amount.",
    impact:
      "Federal law allows a portability election between spouses. The Massachusetts Department of Revenue's Estate Tax Guide describes no equivalent election, so a first spouse's unused Massachusetts amount may go unused. Whether any document structure fits a couple is a question for their attorney and CPA.",
    statBig: "None",
    statNote:
      "Massachusetts describes no portability election (Mass. DOR Estate Tax Guide, updated April 23, 2026). The 2026 federal basic exclusion is $15M (IRS).",
  },
  {
    num: "03",
    title: "The RMD Timing Question",
    tease: "Required minimum distributions may raise taxable income in some years.",
    impact:
      "Once required minimum distributions begin, IRA withdrawals are required whether or not the income is needed. They may add to Social Security, pension, and other income, and may interact with the Massachusetts surtax. Your CPA advises on the tax effects.",
    statBig: "73 to 75",
    statNote:
      "Age when RMDs generally begin, depending on birth year (IRS; Congress.gov CRS on SECURE 2.0). Confirm yours with your CPA.",
  },
  {
    num: "04",
    title: "Massachusetts Estate Tax Exposure",
    tease: "Whether the Massachusetts estate tax applies depends on the size of the estate.",
    impact:
      "For decedents dying on or after January 1, 2023, a Massachusetts return is required when the gross estate plus adjusted taxable gifts exceeds $2,000,000, and a credit of up to $99,600 applies (Mass. DOR, Estate Tax Guide, updated April 23, 2026). With local home values, some households may find the threshold is relevant to them.",
    statBig: "$82,400",
    statNote:
      "Illustrative tax on a $3M estate before any planning, using the DOR credit-table method for 2026. Your CPA calculates any actual tax.",
  },
  {
    num: "05",
    title: "The Millionaire Surtax",
    tease: "A 4% surtax applies to taxable income above $1,107,750 for tax year 2026.",
    impact:
      "Massachusetts voters approved a 4% income surtax effective 2023. A large capital gain, Roth conversion, or property sale may raise taxable income above the threshold in a given year. Your CPA advises on the tax effects.",
    statBig: "4%",
    statNote: "Surtax on Massachusetts taxable income above the threshold (Mass. DOR, updated June 1, 2026).",
  },
  {
    num: "06",
    title: "Disconnected Professionals",
    tease: "Your attorney, CPA, and advisor each have a separate role.",
    impact:
      "The attorney drafts the legal documents. The CPA advises on taxes and prepares returns. The advisor manages the portfolio. When each works separately, open items may not be tracked across the three. Coordination seeks to organize those handoffs but does not replace legal or tax advice.",
    statBig: "3",
    statNote: "Separate professionals with separate roles: attorney, CPA, and advisor.",
  },
];

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "Does Massachusetts have an estate tax in 2026?",
    a: "Yes. For Massachusetts residents dying on or after January 1, 2023, the Department of Revenue requires a return when the gross estate plus adjusted taxable gifts exceeds $2,000,000, and allows a credit of up to $99,600. A household below the federal exclusion may still have a Massachusetts estate tax question. Source: Massachusetts Department of Revenue, Estate Tax Guide (updated April 23, 2026), M.G.L. c. 65C. Verified October 28, 2026. Rules may change.",
  },
  {
    q: "How might a married couple approach the Massachusetts estate tax?",
    a: "Massachusetts describes no portability election, so a surviving spouse generally cannot use a deceased spouse's unused $2,000,000 Massachusetts amount (Department of Revenue, Estate Tax Guide). Some couples discuss credit shelter (A/B) trusts with their estate attorney. These trusts may involve cost, irrevocability, added administration, and rules that change, and they may not work as drafted unless they are funded. Whether any structure fits is a question for your attorney and CPA.",
  },
  {
    q: "Does life insurance count toward the Massachusetts estate tax?",
    a: "It may. The Department of Revenue's Estate Tax Guide lists insurance among the types of intangible property that can be part of a decedent's estate, and treats life insurance not payable to the estate as nonprobate property. Whether a particular policy counts, and whether any trust is appropriate, is a question for your attorney and CPA.",
  },
  {
    q: "Is Michael an estate attorney?",
    a: "No. Michael Cammarata is a CERTIFIED FINANCIAL PLANNER® and Managing Partner at MSA Financial, LLC. He is not an attorney or CPA. He does not draft legal documents, provide legal or tax advice, or prepare tax returns. His role is coordination: organizing your portfolio, tax, and estate information and working alongside independent Massachusetts estate attorneys and CPAs.",
  },
  {
    q: "What is the Massachusetts Millionaire Surtax?",
    a: "A 4% surtax on Massachusetts taxable income above an inflation-adjusted threshold, which is $1,107,750 for tax year 2026 (Massachusetts Department of Revenue, page updated June 1, 2026). It applies in addition to regular income tax. A business sale, a large capital gain, or a Roth conversion may raise taxable income in a given year. Your CPA advises on the tax effects.",
  },
  {
    q: "Do I need $2 million to work with Michael?",
    a: "The practice focuses on Massachusetts households with $2 million or more in investable assets. If you are close to that level, a conversation can help determine whether the practice fits your circumstances.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  FAQ_TEXT[0],
  {
    q: "How much is the estate tax on a $3 million Massachusetts estate?",
    a: (
      <>
        Approximately $82,400 under 2026 law, before any planning (illustrative). The tax is
        computed on a graduated scale and reduced by the $99,600 credit. Actual tax depends on
        deductions, elections, and the law at the date of death, and your CPA calculates it.{" "}
        <Link href="/calculator">Model an illustrative estimate here</Link>.
      </>
    ),
  },
  ...FAQ_TEXT.slice(1),
];

const JSON_LD = {
  "@context": "https://schema.org", "@graph": [
    {
      "@type": ["FinancialService", "Organization"], "@id": "https://www.preserveyourestate.com/#org", name: "MSA Financial, LLC", alternateName: "Preserve Your Estate", url: "https://www.preserveyourestate.com/", telephone: "+1-781-843-3500", foundingDate: "1997", description:
        "Independent SEC-registered investment adviser (CRD #107768) providing coordinated wealth, estate, and tax planning across Massachusetts.", address: OFFICES.map((office) => ({
        "@type": "PostalAddress", streetAddress: office.streetAddress, addressLocality: office.city, addressRegion: "MA", postalCode: office.postalCode, addressCountry: "US",
      })), areaServed: { "@type": "State", name: "Massachusetts" }, sameAs: ["https://www.msaplan.com/", "https://adviserinfo.sec.gov/firm/summary/107768"], }, {
      "@type": "Person", "@id": "https://www.preserveyourestate.com/#michael", name: "Michael Cammarata", honorificSuffix: "CFP®", jobTitle: "Managing Partner and Owner", image: "https://www.preserveyourestate.com/michael-cammarata.jpg", worksFor: { "@id": "https://www.preserveyourestate.com/#org" }, knowsAbout: [
        "Massachusetts estate tax", "Roth conversion planning", "trust funding", "tax-efficient investing", ], }, { "@type": "WebSite", url: "https://www.preserveyourestate.com/", name: "Preserve Your Estate", publisher: { "@id": "https://www.preserveyourestate.com/#org" } }, {
      "@type": "FAQPage", mainEntity: FAQ_TEXT.map((f) => ({
        "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }, })), }, ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />

      {/* ═══════════ ACT 1 · MAKE IT PERSONAL ═══════════ */}

      {/* ---- Hero ---- */}
      <Hero />

      {/* ---- Proof row: credibility before the first ask ---- */}
      <div className="proof-row" aria-label="Firm credentials">
        <span>Since 1997</span>
        <span>~$1.5B AUM as of 8/12/2026</span>
        <span>SEC-Registered RIA</span>
        <span>CFP® Fiduciary</span>
        <span>7 Advisors</span>
      </div>

      {/* ---- The Problem: Six Gaps ---- */}
      <section id="problem">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Six Coordination Gaps</p>
            <h2>
              Six places where Massachusetts estate plans <em>may fall short</em>
            </h2>
            <p className="lead">
              Gaps that may come up in Massachusetts estate plans. They can involve legal
              documents, taxes, and investments, so they often call for several professionals.
            </p>
          </div>
          <div className="grid g3 stagger">
            {GAPS.map((gap) => (
              <GapCard key={gap.num} gap={gap} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Calculator: make the problem personal ---- */}
      <section className="calc-teaser" id="calc">
        <div className="wrap calc-teaser-grid">
          <div className="reveal">
            <p className="eyebrow">An Educational Estimate</p>
            <h2>
              What might the Massachusetts estate tax look like? <em>Get an illustrative number in 60&nbsp;seconds.</em>
            </h2>
            <p className="lead" style={{ marginTop: "1.1rem" }}>
              Set your estate&apos;s approximate value (home, retirement accounts, investments,
              life insurance) and see an illustrative Massachusetts estate tax estimate under 2026
              law. Your CPA calculates any actual tax.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link className="btn btn-gold" href="/calculator">
                See the Full Breakdown <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <TeaserCalc />
        </div>
      </section>

      {/* ═══════════ ACT 2 · THE ANSWER ═══════════ */}

      {/* ---- Coordination Hub (the solution) ---- */}
      <CoordinationHub />

      {/* ---- Tax-Efficient Wealth ---- */}
      <section id="tax" className="bg-cream">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Tax-Efficient Wealth Management</p>
            <h2>
              Investment management that{" "}
              <em>considers the estate and tax picture</em>
            </h2>
            <p className="lead">
              Investment decisions can interact with taxes and estate planning, so they are
              reviewed alongside the work of your CPA and attorney. Investing involves risk,
              including the potential loss of principal.
            </p>
          </div>
          <div className="tax-grid">
            <div>
              <ul className="strategy-list stagger">
                <li>
                  <h3>Asset Location Review</h3>
                  <p>
                    Considering which account types hold which investments. The effect depends on
                    your accounts, your tax situation, and the law, and it may not lower taxes in
                    every year.
                  </p>
                </li>
                <li>
                  <h3>Roth Conversion Review</h3>
                  <p>
                    Reviewing with your CPA whether a conversion may fit a given year, considering
                    tax brackets, IRMAA tiers, and the surtax threshold. A conversion adds taxable
                    income in the year it occurs and may not suit every household.
                  </p>
                </li>
                <li>
                  <h3>Capital Gains Review</h3>
                  <p>
                    Considering when gains may be recognized and how cost basis may affect taxes,
                    in coordination with your CPA. Results depend on market conditions and tax
                    law.
                  </p>
                </li>
                <li>
                  <h3>Charitable and Gifting Questions</h3>
                  <p>
                    Organizing questions about charitable giving or gifts of appreciated assets for
                    your attorney and CPA to evaluate. These choices may involve cost,
                    irrevocability, and tax rules that change.
                  </p>
                </li>
              </ul>
              <p className="fine" style={{ marginTop: "1.2rem" }}>
                Individual situations vary. This information is educational, does not constitute
                tax, legal, or investment advice, and is not a recommendation of any strategy.
                Tax rules change. Consult your CPA and attorney regarding your specific
                circumstances.
              </p>
            </div>
            <div className="chart-card reveal-scale">
              <h3>Where investments, taxes, and estate questions connect</h3>
              <p>
                These educational pages explain how investment decisions, retirement income, and
                estate planning questions may connect. They are starting points for conversations
                with your CPA and attorney.
              </p>
              <p className="fine" style={{ marginTop: "1.4rem" }}>
                <Link href="/wealth-management">
                  Explore tax-efficient wealth management →
                </Link>
              </p>
              <p className="fine" style={{ marginTop: "0.6rem" }}>
                <Link href="/financial-advisor-estate-planning">
                  See how a financial advisor fits into estate planning →
                </Link>
              </p>
              <p className="fine" style={{ marginTop: "0.6rem" }}>
                <Link href="/calculator">Try the illustrative estate tax calculator →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ACT 3 · WHY TRUST HIM ═══════════ */}

      {/* ---- About Michael ---- */}
      <section id="about">
        <div className="wrap about-grid">
          <div className="about-copy reveal">
            <p className="eyebrow">About Michael</p>
            <h2 style={{ margin: "1rem 0 1.4rem" }}>
              See the entire financial picture.{" "}
              <em>Coordinate every part.</em>
            </h2>
            <p>
              Michael Cammarata is a CERTIFIED FINANCIAL PLANNER® practitioner and an owner and
              Managing Partner of MSA Financial, LLC. For more than two decades, he has helped
              families, business owners, and executives make informed decisions about their
              wealth, particularly when investment management, retirement, taxes, and estate
              planning intersect.
            </p>
            <p>
              For many clients, the relationship begins with a specific concern: Massachusetts
              estate-tax exposure, an outdated or unfunded trust, a business transition, a
              concentrated investment position, or questions about retirement income. Michael&apos;s goal is to look beyond the immediate question and
              determine how each decision affects the client&apos;s complete financial picture.
            </p>
            <p>
              Preserve Your Estate reflects an important part of Michael&apos;s practice, but not
              its full scope. His work includes{" "}
              <Link href="/comprehensive-financial-planning">
                comprehensive financial planning coordinated with your attorney and CPA
              </Link>
              , investment
              management, retirement-income planning, Roth conversion and RMD planning,
              capital gains planning, charitable planning, trust-funding and beneficiary
              reviews, business-owner succession planning, and executive compensation planning.
            </p>
            <p>
              Households with several professionals may find that no single person is
              responsible for connecting their recommendations or tracking open items between
              their financial advisor, estate attorney, and CPA.
            </p>
            <p>
              Michael is not an estate attorney or CPA. He serves as the central point of
              coordination, working alongside each client&apos;s existing professionals, or helping
              identify qualified independent professionals when needed, to organize information
              about the estate documents, tax planning, investment portfolio, and retirement plan.
              He does not draft legal documents, provide legal or tax advice, or prepare tax
              returns.
            </p>
            <p>
              As both a financial advisor and an owner of his own business, Michael understands
              that financial decisions can affect more than an account balance, including a
              family&apos;s lifestyle, employees, business partners, and the legacy an owner may
              want to leave.
            </p>
            <p>
              Michael&apos;s practice is a boutique advisory relationship within MSA Financial,
              the independent advisory firm he owns and leads alongside his partners. Established
              in 1997, MSA Financial is an SEC-registered investment adviser managing
              approximately $1.5 billion in client assets as of August 12, 2026. SEC registration
              does not imply a certain level of skill or training.
            </p>
            <p>
              Michael&apos;s objective is to help clients see the entire financial picture and
              organize the questions they may want to take to their other professionals over
              time.
            </p>
            <div className="about-badges">
              <span className="badge">CFP®</span>
              <span className="badge">Managing Partner and Owner</span>
              <span className="badge">Fiduciary</span>
              <span className="badge">Fee-Based</span>
              <span className="badge">RIA · MSA Financial, LLC</span>
            </div>
            <a className="btn btn-navy" href="#booking">
              Schedule a Coordination Conversation <span className="arrow">→</span>
            </a>
          </div>
          <div className="about-side reveal-scale">
            <div className="portrait-card">
              <Image
                className="portrait-photo"
                src="/michael-cammarata.jpg"
                alt=""
                width={190}
                height={190}
                sizes="190px"
              />
              <h3>Michael Cammarata, CFP®</h3>
              <p className="role">Managing Partner and Owner · MSA Financial, LLC</p>
              <p className="advisor-note">
                Michael coordinates closely with clients&apos; CPAs and estate attorneys. When a
                client needs a professional, he can help identify qualified independent advisors;
                clients choose and engage those professionals directly.
              </p>
              <hr />
              <MsaLockup />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Learn: Guides + Insights (merged) ---- */}
      <section id="guides" className="bg-cream">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Learn</p>
            <h2>
              Deep-dive guides and current thinking on{" "}
              <em>Massachusetts estate &amp; tax planning</em>
            </h2>
            <p className="lead">Educational guides in plain language.</p>
          </div>
          <div className="grid g3 stagger">
            <Link className="guide-card" href="/guides/ab-trust">
              <span className="guide-tag">Estate Structure</span>
              <h3>The Marital Deduction Trust &amp; A/B Trust Planning</h3>
              <p>
                How credit shelter and QTIP trusts may be discussed when considering both spouses&apos;
                Massachusetts exemptions, with an illustration for an $8M estate.
              </p>
              <span className="guide-meta">
                <span>12 min read</span>
                <span className="text-link">Read Guide →</span>
              </span>
            </Link>
            <a className="guide-card" href="#booking-guide">
              <span className="guide-tag">Estate Execution</span>
              <h3>Trust Funding &amp; Asset Titling: A Step Families May Overlook</h3>
              <p>
                A trust that is not funded may not work as drafted. An educational overview of the
                asset-by-asset follow-through to review with your attorney and CPA.
              </p>
              <span className="guide-meta">
                <span>Free PDF guide</span>
                <span className="text-link">Get the Guide →</span>
              </span>
            </a>
            <Link className="guide-card" href="/retirement-planning">
              <span className="guide-tag">Retirement Income</span>
              <h3>Retirement Income Planning for Massachusetts Households</h3>
              <p>
                How withdrawal decisions, Social Security timing, and account distributions may connect
                with your tax and estate-planning conversations.
              </p>
              <span className="guide-meta">
                <span>Retirement planning service</span>
                <span className="text-link">Explore Retirement Planning →</span>
              </span>
            </Link>
            <Link className="guide-card" href="/guides/massachusetts-estate-planning">
              <span className="guide-tag">Massachusetts Estate Planning</span>
              <h3>What Does Estate Planning in Massachusetts Involve?</h3>
              <p>
                Review the estate-tax threshold, trust funding, beneficiary coordination, and the
                planning questions that may need attorney and CPA input.
              </p>
              <span className="guide-meta">
                <span>Massachusetts estate planning guide</span>
                <span className="text-link">Read the Massachusetts Estate Planning Guide →</span>
              </span>
            </Link>
          </div>
          <p className="fine" style={{ marginTop: "1.6rem" }}>
            Comparing advisors? Read{" "}
            <Link href="/guides/fiduciary-vs-financial-advisor">
              what a fiduciary financial advisor is and how it differs from other advisors
            </Link>
            . Unfamiliar with the trust labels? Read{" "}
            <Link href="/guides/types-of-trusts">
              the main types of trusts Massachusetts families review
            </Link>
            . Thinking about gifts? Read{" "}
            <Link href="/guides/lifetime-gift-tax-exemption">
              how the federal lifetime gift tax exemption differs from the Massachusetts estate tax
            </Link>
            . These guides are educational only.
          </p>

        </div>
      </section>

      {/* ---- Locations ---- */}
      <section id="locations">
        <div className="wrap loc-grid">
          <div className="reveal">
            <p className="eyebrow">Serving Massachusetts</p>
            <h2 style={{ margin: "1rem 0 1.2rem" }}>
              Three locations. <em>One cohesive planning team.</em>
            </h2>
            <p className="lead" style={{ marginBottom: "1rem" }}>
              Offices in Braintree (South Shore headquarters), Sandwich (Cape Cod &amp; the
              Islands), and Framingham (MetroWest), serving families across Massachusetts.
            </p>
            <ul className="loc-list">
              {OFFICES.map((office) => (
                <li key={office.city}>
                  <b>
                    <span className="pin" aria-hidden="true">◆</span>
                    {office.city}
                  </b>
                  <span>{office.address}</span>
                  <span>
                    <a href={MAIN_OFFICE_PHONE_HREF}>{MAIN_OFFICE_PHONE}</a>
                    {" · "}
                    Main-office receptionist
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="map-card reveal-scale">
            <video
              className="loc-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/locations-poster.jpg"
              aria-label="Massachusetts coastal landscape"
            >
              <source src="/locations-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ═══════════ ACT 4 · QUALIFY & CONVERT ═══════════ */}

      {/* ---- Fit ---- */}
      <FitSection />

      {/* ---- Readiness Checklist ---- */}
      <section id="readiness">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Your Planning Readiness</p>
            <h2>
              How coordinated is your <em>current estate plan?</em>
            </h2>
            <p className="lead">
              Check each item that&apos;s confirmed and in place. Your score updates as you go.
            </p>
          </div>
          <ReadinessChecklist />
        </div>
      </section>

      {/* ---- The Close: Complimentary Review + Booking (Second-Opinion hook folded in) ---- */}
      <section id="booking" className="bg-cream">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: "820px" }}>
            <p className="eyebrow">The Coordination Conversation</p>
            <h2>
              Already have an advisor, an attorney, and a CPA?{" "}
              <em>A coordination conversation may help organize how their work fits together.</em>
            </h2>
            <p className="lead">
              A focused 45-minute conversation at no cost and with no obligation. Here is what it
              may cover.
            </p>
          </div>

          <div className="form-section-grid" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
            <div className="reveal">
              <ol className="deliv">
                <li>
                  <h3>A look at your estate tax picture.</h3>
                  <p>
                    A general, illustrative look at how the Massachusetts estate tax may apply,
                    using the Department of Revenue&apos;s published method. Your CPA calculates
                    any actual tax.
                  </p>
                </li>
                <li>
                  <h3>How your trust and accounts are titled.</h3>
                  <p>
                    Whether deeds, accounts, and beneficiary designations appear to match your
                    documents, with questions to take to your attorney.
                  </p>
                </li>
                <li>
                  <h3>Roth conversion and distribution questions.</h3>
                  <p>
                    Questions to bring to your CPA about Roth conversions, IRMAA surcharges, and
                    the Massachusetts surtax.
                  </p>
                </li>
                <li>
                  <h3>A written list of open questions.</h3>
                  <p>
                    Items to take to your attorney and CPA. The list is educational and is not
                    legal, tax, or investment advice.
                  </p>
                </li>
              </ol>
              <p className="fine" style={{ marginTop: "1.6rem", maxWidth: "440px" }}>
                Michael Cammarata, CFP®, is an Investment Adviser Representative of MSA
                Financial, LLC (CRD #107768), a Registered Investment Adviser. This is a
                complimentary educational conversation, not investment advice or a solicitation
                to buy or sell any security.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ---- FAQ: objection handling ---- */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Common Questions</p>
            <h2>
              Massachusetts estate &amp; tax planning, <em>answered plainly</em>
            </h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ---- Guide banner: low-commitment path into the single form ---- */}
      <section className="bg-navy guide-banner" id="guide">
        <div className="wrap reveal" style={{ textAlign: "center", maxWidth: "720px" }}>
          <p className="eyebrow">Not Ready to Talk? Start Here</p>
          <h2 style={{ margin: "1rem 0" }}>
            The 2026 Massachusetts Pre-Retiree&apos;s Guide to <em>Estate &amp; Tax Planning</em>
          </h2>
          <p className="lead" style={{ color: "var(--silver)", margin: "0 0 1.8rem" }}>
            Twelve pages covering six planning topics Massachusetts families may want to review,
            explained plainly. Free, by email. Educational only.
          </p>
          <a className="btn btn-gold" href="#booking-guide">
            Get the Free Guide <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />

      <div className="sticky-cta">
        <Link className="btn btn-gold" href="/calculator">
          Calculate Your MA Estate Tax →
        </Link>
      </div>
    </>
  );
}
