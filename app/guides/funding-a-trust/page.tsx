import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq, { type FaqItem } from "@/components/Faq";

const GUIDE_PATH = "/guides/funding-a-trust";
const GUIDE_URL = `https://www.preserveyourestate.com${GUIDE_PATH}`;
const SEO_TITLE = "How to Fund a Trust in Massachusetts: Who Coordinates It?";
const SEO_DESCRIPTION =
  "Learn what funding a trust means, why an unfunded trust may fall short, and how your attorney, advisor and CPA may coordinate the steps in Massachusetts.";
const OG_IMAGE =
  "https://www.preserveyourestate.com/og?topic=How%20to%20Fund%20a%20Trust%20in%20Massachusetts&label=Massachusetts%20guide";

const MA_ESTATE_TAX_GUIDE = "https://www.mass.gov/info-details/estate-tax-guide";
const MA_WHO_MUST_FILE = "https://www.mass.gov/info-details/who-must-file-estate-tax-returns";

const FAQ_TEXT: { q: string; a: string }[] = [
  {
    q: "What does funding a trust mean?",
    a: "Funding a trust means transferring ownership of assets into the trust, or coordinating beneficiary designations where appropriate, so the trust document may actually govern those assets. Signing the trust document creates the structure. Funding is the separate follow-through that connects accounts and property to it. Your attorney determines which assets belong in the trust and how each one should be titled.",
  },
  {
    q: "What happens if a trust is not funded?",
    a: "An unfunded trust may not do what it was drafted to do. Assets that were never retitled or never directed to the trust may pass under your will, your beneficiary designations, or state default rules instead, and any tax or distribution provisions in the trust may not apply to them. The result depends on your documents and circumstances, so ask your attorney how your plan would work if an account was missed.",
  },
  {
    q: "Who funds a trust?",
    a: "The person who created the trust generally signs the transfer paperwork, with guidance from the attorney who drafted it. The attorney drafts the trust and prepares or reviews documents such as deeds. The custodian of each account processes its own retitling or beneficiary forms. A financial advisor may coordinate the account-level follow-up between those parties, and a CPA advises on tax effects.",
  },
  {
    q: "Do retirement accounts go into a trust?",
    a: "Retirement accounts such as IRAs and workplace plans generally are not retitled into a living trust the way a taxable brokerage account may be, because a change of ownership could be treated as a distribution. Instead, a trust is sometimes named as a beneficiary. Whether that fits your situation is a question for your attorney and CPA, who can weigh the legal and tax trade-offs.",
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
        alt: "MSA Financial guide to funding a trust in Massachusetts",
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
        "An educational guide to funding a trust in Massachusetts: what funding means, why an unfunded trust may not work as drafted, a checklist by account type, and how the attorney, financial advisor and CPA hand off the work.",
      mainEntityOfPage: GUIDE_URL,
      image: OG_IMAGE,
      author: { "@id": "https://www.preserveyourestate.com/#michael" },
      publisher: { "@id": "https://www.preserveyourestate.com/#org" },
      datePublished: "2026-10-08",
      dateModified: "2026-10-08",
      citation: [MA_ESTATE_TAX_GUIDE, MA_WHO_MUST_FILE],
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

export default function FundingATrustGuide() {
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
            <span>Funding a Trust</span>
          </nav>
          <h1 className="hero-anim d2">
            How should a Massachusetts trust be <em>funded</em>, and who coordinates it?
          </h1>
          <p className="lead hero-anim d3">
            A signed trust is only the first step. This guide explains what funding a trust means,
            why gaps may matter, and how the attorney, financial advisor and CPA each fit into the
            follow-through.
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
          <h2>A direct answer: funding moves assets so the trust may govern them</h2>
          <p>
            Funding a trust means moving ownership of assets, or updating beneficiary designations
            where appropriate, so the trust document may actually govern them. The attorney drafts
            the documents and directs the titling, the CPA advises on tax effects, and a financial
            advisor may coordinate the account changes between them.
          </p>

          <div className="callout reveal">
            <p>
              <b>Key takeaways</b>
            </p>
            <ul>
              <li>
                A trust document alone does not change who owns an account. Each asset needs its own
                follow-through.
              </li>
              <li>
                Different asset types are handled differently: retitling, beneficiary designations,
                or a deed prepared by your attorney.
              </li>
              <li>
                Retirement accounts generally are not retitled into a living trust, and the
                beneficiary question belongs with your attorney and CPA.
              </li>
              <li>
                The attorney drafts and titles legal documents. The CPA advises on tax. The advisor
                coordinates the account-level work and keeps a checklist moving.
              </li>
            </ul>
          </div>

          <h2>What does it mean to fund a trust?</h2>
          <p>
            A trust is a legal arrangement created by a written document. The document names who
            manages the trust, who may benefit, and the rules that apply. But a trust can generally
            only govern property that it actually holds or that is directed to it. Funding is the
            process of connecting your property to the trust by changing how it is titled or who is
            named to receive it.
          </p>
          <p>
            In practice, funding is a set of small administrative steps spread across several
            institutions: a brokerage custodian, a bank, an insurance company, a retirement plan
            administrator, and the registry of deeds. Each has its own forms and its own timing.
            Because the steps are scattered, it is common for a few items to remain open long after
            the signing meeting.
          </p>
          <p>
            Funding also varies with the type of trust. A revocable living trust is usually funded
            during your lifetime. Other structures, such as a credit shelter trust within an A/B
            plan, may be designed to receive assets at a later point, as the trust terms direct.
            Your attorney determines which assets should be in which trust and when.
          </p>

          <h2>Why may an unfunded trust not do what the attorney drafted it to do?</h2>
          <p>
            If an account is never retitled or directed to the trust, the trust may have nothing to
            govern for that account. The asset may instead pass under your will, under a beneficiary
            designation, or under state default rules. Any distribution instructions, successor
            trustee provisions, or tax-related provisions in the trust document may not reach that
            asset. This is often called an unfunded or partially funded trust.
          </p>
          <p>
            For Massachusetts households, the gap can matter for tax planning as well as
            administration. According to the Massachusetts Department of Revenue, a Massachusetts
            estate tax return is generally required when the gross estate plus adjusted taxable
            gifts exceeds $2,000,000 for decedents dying on or after January 1, 2023, and a credit of
            up to $99,600 may apply. Massachusetts also has no spousal portability for that
            exemption. Married couples sometimes work with an attorney on an A/B trust structure so
            that both spouses&apos; exemptions may be considered, but that structure generally
            depends on assets being titled so the plan can operate as drafted.
          </p>
          <p className="fine">
            Source: Massachusetts Department of Revenue,{" "}
            <a href={MA_ESTATE_TAX_GUIDE} target="_blank" rel="noopener noreferrer">
              Estate Tax Guide
            </a>{" "}
            and{" "}
            <a href={MA_WHO_MUST_FILE} target="_blank" rel="noopener noreferrer">
              Who Must File Estate Tax Returns
            </a>
            . Verified against mass.gov as of October 8, 2026. Thresholds and calculation steps may
            change, and the amount of tax for any estate is a question for your attorney and CPA.
          </p>
          <p>
            To see how the exemption works for married couples, and why funding is the step where
            these plans may go wrong, read{" "}
            <Link href="/guides/ab-trust">
              how an A/B trust may use both Massachusetts exemptions and why funding matters
            </Link>
            . For a wider view of how the pieces connect, see the{" "}
            <Link href="/guides/massachusetts-estate-planning">
              Massachusetts estate planning guide
            </Link>
            .
          </p>

          <h2>What is a funding checklist by account type?</h2>
          <p>
            The checklist below is a general, category-level starting point for a conversation with
            your professionals. It is not a substitute for your attorney&apos;s instructions, which
            depend on your trust and your circumstances.
          </p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>Taxable brokerage and bank accounts</h3>
              <ul>
                <li>Ask your attorney whether each account should be retitled to the trust.</li>
                <li>Request the custodian&apos;s retitling forms and the trust certification it requires.</li>
                <li>Confirm the new registration matches the trust name and date exactly.</li>
                <li>Ask your CPA whether a change could affect reporting or cost basis records.</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>Retirement accounts</h3>
              <ul>
                <li>Do not retitle an IRA or workplace plan without written guidance from your professionals.</li>
                <li>Review each beneficiary designation against the signed estate documents.</li>
                <li>Ask your attorney and CPA whether naming a trust as beneficiary fits your plan.</li>
                <li>Confirm contingent beneficiaries are listed and current.</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>Life insurance and similar contracts</h3>
              <ul>
                <li>Check who is the owner and who is the beneficiary on each contract.</li>
                <li>Ask your attorney whether the owner or beneficiary should change.</li>
                <li>Ask your CPA whether a change may have tax consequences.</li>
                <li>Complete the insurer&apos;s change forms and keep the confirmations.</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>Real estate</h3>
              <ul>
                <li>Your attorney prepares and records any deed that moves property into the trust.</li>
                <li>Ask the attorney how a transfer interacts with mortgage and homeowner&apos;s insurance terms.</li>
                <li>Keep the recorded deed with your estate documents.</li>
                <li>Your advisor may add the property to the household inventory for reference.</li>
              </ul>
            </div>
          </div>
          <p>
            Other assets, such as business interests and personal property, are typically handled
            case by case by your attorney. Before any change, make sure your attorney has confirmed
            it in writing. Retitling can have legal and tax effects that differ by asset, which is
            why the attorney and CPA decide and the advisor tracks the follow-through.
          </p>

          <h2>How does the four-step funding workflow work?</h2>
          <div className="process-grid">
            <div className="step">
              <div className="step-dot">1</div>
              <span className="step-tag">Inventory</span>
              <h3>List every account</h3>
              <p>
                Gather accounts, current titling, beneficiaries, and the signed trust documents in
                one place.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">2</div>
              <span className="step-tag">Confirm</span>
              <h3>Get attorney direction</h3>
              <p>
                Your attorney identifies which assets belong in the trust and how each should be
                titled or designated.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">3</div>
              <span className="step-tag">Complete</span>
              <h3>Coordinate the changes</h3>
              <p>
                Custodian and insurer forms are completed, with the CPA asked about tax effects
                before anything is moved.
              </p>
            </div>
            <div className="step">
              <div className="step-dot">4</div>
              <span className="step-tag">Review</span>
              <h3>Recheck as life changes</h3>
              <p>
                New accounts, a home sale, or a family change may require another look at titling
                and beneficiaries.
              </p>
            </div>
          </div>

          <h2>What funding gaps are common after the signing meeting?</h2>
          <p>
            Gaps rarely come from a single large mistake. They tend to build up from ordinary
            events that nobody thought to connect back to the trust. A few examples that families
            may want to look for:
          </p>
          <ul className="strategy-list stagger">
            <li>
              <h3>Accounts opened after the trust was signed</h3>
              <p>
                A new bank or brokerage account may be opened in individual name out of habit. If it
                was meant to be part of the plan, it may need its own retitling request.
              </p>
            </li>
            <li>
              <h3>Beneficiary forms that were never updated</h3>
              <p>
                Older designations may name a former spouse, a deceased relative, or no contingent
                beneficiary at all, and they generally control the account regardless of what a
                trust or will says.
              </p>
            </li>
            <li>
              <h3>Property bought or sold after planning</h3>
              <p>
                A second home, a sale and repurchase, or a refinance may change title without
                anyone checking whether the new ownership matches the plan.
              </p>
            </li>
            <li>
              <h3>Paperwork started but not finished</h3>
              <p>
                A custodian may have received a retitling form but rejected it for a missing
                signature or trust certification, and the rejection may never have been noticed.
              </p>
            </li>
          </ul>
          <p>
            A shared checklist, reviewed with your attorney and CPA on a regular schedule, may help
            surface these items earlier. Reviews are also a natural time to ask whether a change in
            tax rules or family circumstances calls for an update to the documents themselves, which
            is your attorney&apos;s decision.
          </p>

          <h2>Who does what: the attorney, the advisor and the CPA?</h2>
          <p>
            Funding goes more smoothly when each professional&apos;s role is clear. The table shows
            a typical division of work. Your own engagement terms and your professionals&apos; advice
            control.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Professional</th>
                  <th scope="col">Typical role in funding</th>
                  <th scope="col">What stays outside the role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estate attorney</td>
                  <td>
                    Drafts the trust, decides what should be titled to it, prepares deeds, and
                    gives legal advice on how the plan works.
                  </td>
                  <td>Day-to-day tracking of account-level forms across institutions.</td>
                </tr>
                <tr>
                  <td>Financial advisor</td>
                  <td>
                    Inventories accounts, passes the attorney&apos;s instructions to custodians,
                    tracks open items, and flags financial events that may need a second look.
                  </td>
                  <td>
                    Drafting or titling legal documents, giving legal advice, or giving tax advice.
                  </td>
                </tr>
                <tr>
                  <td>CPA</td>
                  <td>
                    Advises on the tax effects of a change, such as cost basis, reporting, and
                    estate or gift tax questions.
                  </td>
                  <td>Drafting legal documents or managing account paperwork.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            At MSA Financial, Michael Cammarata, CFP®, acts as the coordinating point between your
            investment accounts, your estate attorney, and your CPA. He is not an attorney or CPA.
            If you already work with professionals, he coordinates with them. If you need an
            introduction, he can offer one from a network of independent Massachusetts
            professionals, and you choose whom to engage. Read more about{" "}
            <Link href="/financial-advisor-estate-planning">
              how a financial advisor coordinates estate planning with your attorney and CPA
            </Link>
            .
          </p>

          <h2>What questions should you bring to your attorney and CPA?</h2>
          <p>These questions are educational starting points. Your professionals can answer them for your situation.</p>
          <div className="grid g2 stagger">
            <div className="coord-card">
              <h3>For your attorney</h3>
              <ul>
                <li>Which of my accounts and properties should be titled to the trust?</li>
                <li>Which should stay outside the trust, and what should the beneficiary designations say?</li>
                <li>Do I need a deed, and when will it be recorded?</li>
                <li>How would the plan work if an account were missed?</li>
              </ul>
            </div>
            <div className="coord-card">
              <h3>For your CPA</h3>
              <ul>
                <li>Does retitling an account change my tax reporting or cost basis records?</li>
                <li>Could naming a trust as a retirement account beneficiary change the tax treatment?</li>
                <li>Who files returns for the trust, and when?</li>
                <li>How should account changes be timed around the tax year?</li>
              </ul>
            </div>
          </div>
          <p>
            Retirement accounts often raise their own planning questions. For background on account
            types and trade-offs, see{" "}
            <Link href="/guides/tax-advantaged-retirement-accounts">
              how tax-advantaged retirement accounts differ and what to ask your CPA
            </Link>
            .
          </p>

          <h2>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />

          <h2>How can you check where your own plan stands?</h2>
          <p>
            A practical first step is an inventory: every account, how it is titled today, and who
            is named as beneficiary. You can bring that list to your attorney and CPA and ask which
            items are consistent with your documents. To organize a general estimate of the
            Massachusetts estate tax before those conversations, use the{" "}
            <Link href="/calculator">Massachusetts estate tax calculator</Link>. It is an
            educational tool and not legal or tax advice.
          </p>

          <div className="next-step reveal-scale">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Next Step
            </p>
            <h3>Review the follow-through on your estate plan in one conversation</h3>
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
            CPA. Massachusetts estate tax figures were verified against mass.gov as of October 8,
            2026 and may change.
          </p>
        </div>
      </section>

      <Footer compact />
    </>
  );
}
