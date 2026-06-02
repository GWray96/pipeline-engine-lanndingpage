"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, Infinity, Shield } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/page-hero";

const phase1Items = [
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

const phase2Items = [
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

const timeline = [
  { week: "Week 1–2", title: "Discovery & Foundation", desc: "ICP, positioning, offer clarity, and system architecture mapped out before anything is built." },
  { week: "Week 3–5", title: "Infrastructure Build", desc: "CRM configured, tracking installed, lead magnet created, landing page designed and live." },
  { week: "Week 6–8", title: "Outbound Engine", desc: "250 target accounts researched. Cold email and LinkedIn sequences written, tested, and launching." },
  { week: "Week 9–11", title: "Content & Authority", desc: "SEO content published, LinkedIn profile optimised, nurture sequences automated and active." },
  { week: "Week 12", title: "Full Handover", desc: "Everything handed over. Walkthrough of every asset, sequence, and system. It's yours outright." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The model"
        title="How The Pipeline Engine works."
        subtitle="A lead generation system isn't a campaign. It's infrastructure — built once, run continuously, and owned by you. Here's exactly what gets built, when, and what happens after."
      />

      <main className="pb-24">
        {/* The two-phase overview */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: <Clock size={20} className="text-accent" />,
                  label: "Phase 1",
                  title: "The Build",
                  desc: "Everything built from scratch in 90 days. Full pipeline infrastructure, owned by you from day one.",
                  price: "£3,500",
                  badge: "One-off",
                  color: "border-accent/30",
                },
                {
                  icon: <Infinity size={20} className="text-green" />,
                  label: "Phase 2",
                  title: "The Fuel",
                  desc: "Monthly execution to keep the system active, growing, and compounding. No lock-in.",
                  price: "£1,500/mo",
                  badge: "No lock-in",
                  color: "border-green/30",
                },
                {
                  icon: <Shield size={20} className="text-amber" />,
                  label: "The Guarantee",
                  title: "Ownership",
                  desc: "Every asset, every sequence, every system is yours. Cancel anytime — you keep everything.",
                  price: "Yours forever",
                  badge: "Guaranteed",
                  color: "border-amber/30",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  className={`p-7 rounded-xl border ${card.color} bg-bg-card`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {card.icon}
                    <span className="text-xs uppercase tracking-widest text-text-muted">{card.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{card.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-lg font-bold text-text-primary">{card.price}</span>
                    <span className="text-xs text-text-muted border border-border px-2 py-1 rounded">{card.badge}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 1 Detail */}
        <section className="py-16 px-6 bg-bg-card/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent block mb-2">Phase 1 — 90 Days</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">The Build</h2>
              <p className="text-text-muted max-w-2xl">
                In 90 days I build your complete pipeline infrastructure from scratch — to your ICP, your offer, your market.
                Every asset is yours from day one. No templates recycled from other clients. No junior handoffs.
              </p>
            </motion.div>

            <motion.ul
              className="grid md:grid-cols-2 gap-3 mb-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {phase1Items.map((i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border bg-bg-card"
                >
                  <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{i}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Timeline */}
            <div className="border border-border rounded-xl bg-bg-card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-6">The 90-day timeline</h3>
              <div className="space-y-0">
                {timeline.map((t, idx) => (
                  <div key={t.week} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-accent mt-1 flex-shrink-0" />
                      {idx < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs text-accent font-semibold uppercase tracking-widest">{t.week}</span>
                      <h4 className="text-sm font-bold text-text-primary mt-1 mb-1">{t.title}</h4>
                      <p className="text-sm text-text-muted">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 Detail */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-green block mb-2">Phase 2 — Monthly</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">The Fuel</h2>
              <p className="text-text-muted max-w-2xl">
                The Build creates the infrastructure. The Fuel keeps it running. Every month: new prospects
                added, outbound sequences live, content published, ads managed, and a strategy call to align
                the next 30 days. Cancel any month — no contracts, no exit penalties.
              </p>
            </motion.div>

            <motion.ul
              className="grid md:grid-cols-2 gap-3 mb-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {phase2Items.map((i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3 p-4 rounded-lg border border-green/20 bg-bg-card"
                >
                  <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-muted">{i}</span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-xs text-text-muted border border-border bg-bg-card rounded-lg p-4">
              Ad spend is separate, agreed with you upfront and managed to your budget. Cancel any month with 30 days&apos; notice.
            </p>
          </div>
        </section>

        {/* Why ownership matters */}
        <section className="py-16 px-6 bg-bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-accent uppercase tracking-widest mb-4">Ownership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Most agencies take their work with them when you stop paying.
                <br />
                <span className="text-text-muted">This works differently.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
                Every sequence, every asset, every system is yours from the moment it&apos;s built — not
                when you finish paying, not after a handover period. From day one. A pipeline that has been
                running for 12 months is better than one that just went live. You own every piece of that
                compounding value regardless of what you decide about Phase 2.
              </p>
              <a
                href="https://cal.com/gareth-wray/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-colors"
              >
                Book a free discovery call
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
