"use client";

import { motion } from "motion/react";
import {
  CircleDollarSign,
  MapPin,
  CalendarClock,
  GitMerge,
  Users,
  Scale,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CRITERIA = [
  {
    icon: CircleDollarSign,
    title: "$2M+ in net investable assets",
    description:
      "Planning questions can become more complex above the Massachusetts estate tax threshold, which is where this practice focuses.",
  },
  {
    icon: MapPin,
    title: "Massachusetts resident or estate owner",
    description:
      "The practice focuses on Massachusetts estate tax considerations under M.G.L. c. 65C and local planning questions. Michael is not an attorney or CPA.",
  },
  {
    icon: CalendarClock,
    title: "In or approaching the decade before retirement",
    description:
      "Estate and tax decisions can become harder to change as retirement approaches, so many households review them in the decade beforehand.",
  },
  {
    icon: GitMerge,
    title: "Seeking an integrated, coordinated approach",
    description:
      "If you're looking for someone to manage investments in isolation, this is probably not the right practice. And that's fine.",
  },
  {
    icon: Users,
    title: "Comfortable with a boutique, high-touch firm",
    description: "A limited number of clients, by design: depth over volume.",
  },
  {
    icon: Scale,
    title: "Ready for a fiduciary conversation",
    description:
      "Michael is a fiduciary and fee-based. A CFP® whose role is coordinating among your estate plan, tax return, and portfolio information. He does not draft legal documents or prepare tax returns.",
  },
];

export default function FitSection() {
  return (
    <section className="fit-features" id="fit">
      <div className="fit-features-grid-bg" aria-hidden="true" />

      <div className="wrap fit-features-inner">
        <div className="fit-features-head">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            Is This the Right Fit?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
          >
            This practice is built for a specific client,{" "}
            <em>and it&apos;s not for everyone</em>
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          >
            A boutique practice by design: a small number of complex Massachusetts estates,
            handled in depth.
          </motion.p>
          <motion.div
            className="fit-features-ctas"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          >
            <a className="btn btn-gold" href="#booking">
              Schedule a Coordination Conversation <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#booking-guide">
              Get the Free Guide
            </a>
          </motion.div>
        </div>

        <div className="fit-card-grid">
          {CRITERIA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="fit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
              >
                <div className="fit-card-icon">
                  <Icon size={56} strokeWidth={0.9} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
