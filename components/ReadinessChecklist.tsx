"use client";

import { useState } from "react";

const ITEMS = [
  "My revocable trust has been drafted by a Massachusetts estate attorney and is current.", "My trust has been properly funded: real estate re-deeded, accounts retitled, beneficiaries confirmed.", "My spouse and I have discussed and documented our estate plan structure, including what happens at the first death.", "I have reviewed the Massachusetts estate tax exposure of my combined estate in the past 24 months.", "I have reviewed Roth conversions with my CPA, or have decided not to convert, and documented why.", "I have reviewed with my CPA which account types hold which investments.", "I have reviewed and updated beneficiary designations on all IRA, 401(k), and life insurance accounts in the past three years.", "My financial advisor, estate attorney, and CPA have spoken to each other about my plan in the past 12 months.", "I understand my exposure to the Massachusetts Millionaire Surtax (4% on income above the 2026 threshold).", "I have a written plan for how my estate will be settled, not just a verbal understanding.",
];

const C = 2 * Math.PI * 74;

function message(n: number): { title: string; body: string } {
  if (n === 0)
    return {
      title: "Start checking the boxes",
      body: "As you check each item, you will see which items are confirmed and which may be worth reviewing with your professionals. This checklist is educational and is not advice.",
    };
  if (n <= 6)
    return {
      title: `${10 - n} items to review`,
      body: "These items may be worth raising with your attorney and CPA. A coordination conversation can help organize them.",
    };
  if (n <= 9)
    return {
      title: "Most items confirmed",
      body: "Several items are confirmed. The remaining items may be worth reviewing with your professionals.",
    };
  return {
    title: "All items confirmed",
    body: "If every box is genuinely confirmed, periodic review still matters because family circumstances, assets, and tax rules change.",
  };
}

export default function ReadinessChecklist() {
  const [checked, setChecked] = useState<boolean[]>(Array(ITEMS.length).fill(false));
  const n = checked.filter(Boolean).length;
  const msg = message(n);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, k) => (k === i ? !v : v)));

  return (
    <div className="checklist-grid">
      <div className="stagger">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`chk ${checked[i] ? "on" : ""}`}
            role="checkbox"
            aria-checked={checked[i]}
            tabIndex={0}
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
          >
            <span className="box">✓</span>
            {item}
          </div>
        ))}
      </div>
      <div className="score-card reveal-scale">
        <div className="ring">
          <svg width="168" height="168" viewBox="0 0 168 168">
            <circle className="track" cx="84" cy="84" r="74" fill="none" strokeWidth="10" />
            <circle
              className={`prog ${n >= 8 ? "good" : ""}`}
              cx="84"
              cy="84"
              r="74"
              fill="none"
              strokeWidth="10"
              strokeDasharray={C}
              strokeDashoffset={C - (C * n) / 10}
            />
          </svg>
          <div className="ring-num">
            <b>{n}</b>
            <span>of 10</span>
          </div>
        </div>
        <div className="score-msg">
          <h3>{msg.title}</h3>
          <p>{msg.body}</p>
        </div>
        <a className={`btn btn-gold score-cta ${n > 0 ? "show" : ""}`} href="#booking">
          Schedule a Coordination Conversation
        </a>
      </div>
    </div>
  );
}
