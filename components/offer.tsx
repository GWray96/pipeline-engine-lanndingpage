"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

const phase1 = [
  "The right people targeted precisely. No wasted effort on companies that will never buy.",
  "Your offer positioned to resonate, so the right prospects say yes rather than ask for more time.",
  "Full pipeline visibility. You always know what's in the funnel and what's moving.",
  "Every result tracked from day one. You always know what's working and what isn't.",
  "A high-value resource that turns cold visitors into warm leads automatically.",
  "A page built to turn interested visitors into booked calls, not just look good.",
  "Content that brings the right people to you and keeps working long after it's published.",
  "Warm prospects automatically nudged toward a conversation, without you lifting a finger.",
  "Your LinkedIn working as a credibility asset, so prospects check you out and like what they see.",
  "Your first 250 qualified targets ready to contact from day one.",
  "Outreach that opens real conversations, not spam that gets deleted.",
  "LinkedIn messages that get replies from decision-makers.",
  "No lead falls through the cracks. Every prospect followed up automatically.",
  "Everything you need to close conversations confidently. You're never caught off guard.",
  "More enquiries from the traffic you already have, without spending more on ads.",
  "Full handover on day 90. You own it, you understand it, and it runs with or without us.",
];

const phase2 = [
  "Your authority keeps building. Fresh content every month attracting the right people.",
  "The outreach list never runs dry. New qualified targets added every month.",
  "Active conversations happening every week. Consistently, not in bursts.",
  "More of your traffic converting to enquiries, incrementally better every month.",
  "Paid traffic sending the right people to a page built to convert them.",
  "Ad messaging that improves with every test. Lower cost, better quality leads over time.",
  "The next 30 days planned and aligned. You know exactly what's happening and why.",
  "A marketing brain on call whenever you need one. No guesswork, no second-guessing.",
  "Clear results every month: what worked, what didn't, and what's next.",
];

const MOBILE_SHOW_COUNT = 6;

export default function Offer() {
  const [phase1Expanded, setPhase1Expanded] = useState(false);

  return (
    <section id="included" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-widest mb-3">
            What&apos;s included
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Everything. Done for you.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Not a managed service you rent forever. A system you own, built
            end to end, then kept fuelled so it compounds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <motion.div
            className="p-8 rounded-xl border border-border bg-bg-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-1">
                  Phase 1
                </span>
                <h3 className="text-2xl font-bold text-text-primary">
                  The Build
                </h3>
                <p className="text-text-muted text-sm mt-1">90 days. One-off.</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">£3,500</div>
                <div className="text-xs text-text-muted">or 3 × £1,200</div>
              </div>
            </div>

            {/* Desktop: show all. Mobile: show first 6, expand on tap */}
            <ul className="space-y-2.5">
              {phase1.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-2.5 ${
                    !phase1Expanded && i >= MOBILE_SHOW_COUNT ? "hidden md:flex" : "flex"
                  }`}
                >
                  <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mobile expand toggle */}
            <button
              className="md:hidden flex items-center gap-1.5 text-xs text-accent mt-4 hover:text-text-primary transition-colors"
              onClick={() => setPhase1Expanded(!phase1Expanded)}
            >
              <ChevronDown
                size={14}
                className={`transition-transform ${phase1Expanded ? "rotate-180" : ""}`}
              />
              {phase1Expanded
                ? "Show less"
                : `Show all ${phase1.length} components`}
            </button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-text-muted">
                <span className="text-text-primary font-medium">
                  Standalone value: £9,000.
                </span>{" "}
                Every asset, sequence, and system is yours to keep, regardless
                of what happens after day 90.
              </p>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            className="p-8 rounded-xl border border-accent/30 bg-bg-card relative overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-green block mb-1">
                  Phase 2
                </span>
                <h3 className="text-2xl font-bold text-text-primary">
                  The Fuel
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  Monthly. No lock-in.
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">£1,500</div>
                <div className="text-xs text-text-muted">/month</div>
              </div>
            </div>

            <ul className="relative space-y-2.5">
              {phase2.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-6 pt-6 border-t border-border">
              <p className="text-xs text-text-muted">
                <span className="text-text-primary font-medium">
                  Standalone value: £4,000/month.
                </span>{" "}
                Ad spend is separate, budget agreed with you upfront. Cancel
                any month with 30 days&apos; notice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
