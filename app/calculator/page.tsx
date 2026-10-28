import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalcTool from "./CalcTool";
import { maEstateTax, maEstateTaxWithAB, fmtUSD } from "@/lib/matax";

const maGuide = "https://www.mass.gov/info-details/estate-tax-guide";
const TABLE_ESTATES = [2_000_000, 3_000_000, 4_000_000, 5_000_000, 6_000_000, 8_000_000, 10_000_000] as const;

export const metadata: Metadata = {
  title: { absolute: "Massachusetts Estate Tax Calculator (2026) | MSA Financial" },
  description:
    "Estimate Massachusetts estate tax under 2026 rules, including an illustrative married-couple trust scenario. Educational only; not tax or legal advice.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    type: "website",
    url: "/calculator",
    siteName: "MSA Financial",
    title: "Massachusetts Estate Tax Calculator (2026)",
    description:
      "Estimate your Massachusetts estate tax under 2026 law, including an illustrative married-couple trust scenario.",
    images: [
      {
        url: "https://www.preserveyourestate.com/og?topic=Massachusetts%20Estate%20Tax%20Calculator&label=Educational%20planning%20resource",
        width: 1200,
        height: 630,
        alt: "MSA Financial Massachusetts estate tax calculator",
      },
    ],
  },
};

const JSON_LD = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Massachusetts Estate Tax Calculator", url: "https://www.preserveyourestate.com/calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, provider: { "@type": "Organization", name: "MSA Financial, LLC" },
};

export default function CalculatorPage() {
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
          <nav className="crumbs hero-anim d1">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Calculator</span>
          </nav>
          <h1 className="hero-anim d2">
            The Massachusetts Estate Tax Calculator: <em>your number in 60 seconds</em>
          </h1>
          <p className="lead hero-anim d3">
            Massachusetts taxes estates over $2 million on a graduated scale up to 16%. Model your
            estate under 2026 law, including an illustrative married-couple trust scenario. No email
            required.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "4rem" }}>
        <div className="wrap">
          <CalcTool />
        </div>
      </section>

      <section style={{ paddingTop: "1rem" }}>
        <div className="wrap article">
          <h2>Illustrative Massachusetts estate tax, 2026</h2>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Total estate</th>
                  <th scope="col">Single estate, no planning</th>
                  <th scope="col">Married, with illustrative credit shelter trust</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ESTATES.map((estate) => (
                  <tr key={estate}>
                    <th scope="row">{fmtUSD(estate)}</th>
                    <td>{fmtUSD(maEstateTax(estate))}</td>
                    <td>{fmtUSD(maEstateTaxWithAB(estate))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine">
            Illustrative only. Figures use the <a href={maGuide}>Massachusetts Department of Revenue credit-table method</a> for 2026 and assume all property is in Massachusetts and no deductions. Actual results depend on asset values, deductions, elections, and the law in effect at each death. Your CPA calculates any actual tax, and your estate attorney determines whether any trust structure fits your situation.
          </p>
          <p className="fine">
            The married column assumes each spouse owns enough assets to fund the trust, and that the trust is properly drafted and funded.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How the Tax Works</p>
            <h2>
              Why a &ldquo;$2 million exemption&rdquo; still costs{" "}
              <em>six figures at $4 million</em>
            </h2>
          </div>
          <div className="grid g3 stagger">
            <div className="coord-card">
              <h3>The credit, not a deduction</h3>
              <p>
                Massachusetts computes tax on your <b>entire</b> taxable estate using graduated
                rates, then subtracts a $99,600 credit, the amount that exactly cancels the tax on
                $2M. The dollars above $2M are taxed at the bracket rates where they fall. For a
                plain-language, educational explanation, read{" "}
                <Link href="/guides/massachusetts-estate-tax-planning">
                  how the Massachusetts estate tax exemption works and what it means for your household
                </Link>
                .
              </p>
            </div>
            <div className="coord-card">
              <h3>No spousal portability</h3>
              <p>
                Unlike federal law, a surviving spouse cannot inherit the unused exemption. Without
                a funded credit shelter trust or similar planning, a couple&apos;s two $2M exemptions
                may effectively become one, depending on titling and how assets pass.
              </p>
            </div>
            <div className="coord-card">
              <h3>Your house counts</h3>
              <p>
                Home equity, IRAs, 401(k)s, and life insurance you own may count toward the $2M
                line, depending on ownership and beneficiary designations. With Massachusetts real
                estate values, some families may cross it without realizing.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: "2.5rem" }}>
            <Link className="text-link" href="/guides/ab-trust">
              Read the full A/B trust guide →
            </Link>
          </div>
          <p className="reveal" style={{ marginTop: "1.5rem" }}>
            Two related educational guides: see{" "}
            <Link href="/guides/estate-tax-vs-inheritance-tax">how the Massachusetts estate tax differs from an inheritance tax</Link>{" "}
            and{" "}
            <Link href="/guides/lifetime-gift-tax-exemption">how the federal lifetime gift tax exemption differs from the Massachusetts estate tax</Link>.
            For married couples, see also{" "}
            <Link href="/guides/qtip-trust">how a QTIP trust may interact with the Massachusetts estate tax threshold</Link>.
            For the vocabulary behind those structures, read{" "}
            <Link href="/guides/types-of-trusts">the main types of trusts Massachusetts families review and how they differ</Link>.
            To turn an estimate into questions for your professionals, read{" "}
            <Link href="/guides/massachusetts-estate-tax-planning">what Massachusetts pre-retirees may want to review before the $2M estate tax threshold</Link>.
            To see who files Form M-706 and what a CPA and attorney may ask you to gather, read{" "}
            <Link href="/guides/massachusetts-estate-tax-return">the guide to the Massachusetts estate tax return</Link>.
            All of these guides are educational only; your attorney and CPA can address your individual situation.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "1rem" }}>
        <div className="wrap article">
          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Take your estimate into one coordinated conversation</h3>
            <p>
              Schedule a conversation to discuss your estimate, your account inventory, and the
              questions you may want to take to your estate attorney and CPA. The calculator is
              educational and is not legal or tax advice.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-gold" href="/#booking">
                Schedule a Coordination Conversation <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <p className="fine guide-disclosure" style={{ marginTop: "2rem" }}>
            This calculator is for educational purposes only and does not constitute individualized
            legal, tax, or investment advice. Its results are illustrative and do not recommend any
            strategy for any reader. Investment advisory services are offered through MSA Financial,
            LLC, a Registered Investment Adviser (CRD #107768). MSA Financial is an SEC-registered
            investment adviser. Registration with the SEC does not imply a certain level of skill or
            training. Investing involves risk, including the potential loss of principal. Michael
            Cammarata is not an attorney or CPA and does not provide legal or tax advice. He does
            not draft legal documents or prepare tax returns. He coordinates with clients&apos;
            existing estate attorneys and CPAs. Tax treatment depends on individual circumstances,
            and legal and tax advice should be obtained from your own attorney and CPA. The
            $2,000,000 Massachusetts threshold and $99,600 credit were verified against mass.gov
            as of October 28, 2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
