"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

const phase1 = [
  "Ideal customer profile defined and built into every part of the system.",
  "Offer positioning refined so your messaging speaks to the right buyer, not everyone.",
  "CRM configured and pipeline stages set up. Full visibility from day one.",
  "Tracking in place from the start. Every channel measured, every lead accounted for.",
  "Lead magnet built and live — designed to turn cold visitors into warm contacts.",
  "Landing page built to convert interested visitors into booked calls.",
  "SEO content and LinkedIn presence built to attract the right people over time.",
  "Email nurture sequence live — automated follow-up for every lead that enters the system.",
  "LinkedIn profile optimised as a credibility asset for when prospects look you up.",
  "250 qualified target accounts identified and ready for outreach from day one.",
  "Cold outreach sequences written, tested, and sent to qualified targets.",
  "LinkedIn outreach sequences crafted for B2B decision-makers.",
  "Follow-up automation in place. No lead drops out of the sequence uncontacted.",
  "Sales conversation framework built. You know what to say when someone books.",
  "CRO review of your existing pages — more of your current traffic converting.",
  "Full handover on day 90. You own it, you understand it, and it runs with or without us.",
];

const phase2 = [
  "Monthly content published — SEO articles, LinkedIn posts, or both. Agreed upfront.",
  "New qualified target accounts added to the outreach list every month.",
  "Outbound sequences running every week, consistently reaching new prospects.",
  "Conversion rate optimisation — iterative improvements each month based on real data.",
  "Paid ads managed and sending qualified traffic to pages built to convert them.",
  "Ad creative tested and refined every month. Budget optimised against what's working.",
  "Monthly strategy call — the next 30 days planned and aligned before anything runs.",
  "Direct access to me throughout. Questions answered, decisions made together.",
  "Monthly report: what ran, what changed, what's next. No mystery, no fluff.",
];

const SHOW_COUNT = 5;

function ItemList({ items, expanded }: { items: string[]; expanded: boolean }) {
  const visible = expanded ? items : items.slice(0, SHOW_COUNT);
  return (
    <ul className="space-y-2.5">
      <AnimatePresence initial={false}>
        {visible.map((item) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-start gap-2.5 overflow-hidden"
          >
            <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" />
            <span className="text-sm text-text-muted">{item}</span>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default function Offer() {
  const [phase1Expanded, setPhase1Expanded] = useState(false);
  const [phase2Expanded, setPhase2Expanded] = useState(false);

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
                <p className="text-text-muted text-sm mt-1">90-day build.</p>
              </div>
            </div>

            <ItemList items={phase1} expanded={phase1Expanded} />

            <button
              className="flex items-center gap-1.5 text-xs text-accent mt-4 hover:text-text-primary transition-colors"
              onClick={() => setPhase1Expanded(!phase1Expanded)}
            >
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${phase1Expanded ? "rotate-180" : ""}`}
              />
              {phase1Expanded
                ? "Show less"
                : `Show all ${phase1.length} components`}
            </button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-text-muted">
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
            </div>

            <div className="relative">
              <ItemList items={phase2} expanded={phase2Expanded} />

              <button
                className="flex items-center gap-1.5 text-xs text-green mt-4 hover:text-text-primary transition-colors"
                onClick={() => setPhase2Expanded(!phase2Expanded)}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${phase2Expanded ? "rotate-180" : ""}`}
                />
                {phase2Expanded
                  ? "Show less"
                  : `Show all ${phase2.length} components`}
              </button>
            </div>

            <div className="relative mt-6 pt-6 border-t border-border">
              <p className="text-xs text-text-muted">
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
