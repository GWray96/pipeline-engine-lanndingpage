"use client";

import { motion } from "framer-motion";

const pains = [
  {
    heading: "The pipeline is running on referrals",
    body: "Word of mouth is great. Until a key account goes elsewhere and the phone goes quiet. You know it's not a strategy. You just haven't had time to fix it.",
  },
  {
    heading: "BD happens when there's a spare minute",
    body: "Which is never. You're delivering, firefighting, invoicing. Lead generation keeps getting pushed. The business stays reactive.",
  },
  {
    heading: "You've tried agencies. Got a dashboard.",
    body: "Retainer signed. Impressive deck. Three months later: impressions, reach, and engagement. Still no qualified calls in the calendar.",
  },
  {
    heading: "DIY falls apart every time",
    body: "You start strong. A LinkedIn sprint here, some cold emails there. Then delivery takes over and it all stops. Not because you're lazy. Because it needs a system, not willpower.",
  },
  {
    heading: "You're the marketing team",
    body: "You're making decisions you're not qualified to make, on channels you don't have time to learn, with a budget you can't afford to waste.",
  },
  {
    heading: "Even when something works, it stalls",
    body: "The list runs dry. The content goes stale. The ads get switched off. Without someone keeping the engine fuelled, it idles.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-widest mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Most B2B owners are brilliant at what they do.
            <br className="hidden md:block" />
            <span className="text-text-muted">
              {" "}
              Terrible at making sure new clients can find them.
            </span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Not because they&apos;re not capable. Because nobody ever built them
            a system that actually works.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pains.map((pain) => (
            <motion.div
              key={pain.heading}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-colors cursor-default"
            >
              <h3 className="text-sm font-semibold text-text-primary mb-2 leading-snug">
                {pain.heading}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {pain.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
