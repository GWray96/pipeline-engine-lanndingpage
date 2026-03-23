"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Day 30", label: "First leads arriving. Not day 90." },
  { value: "24/7", label: "System running whether you're working or not" },
  { value: "Zero", label: "BD effort required from you. It runs itself." },
  { value: "Yours", label: "Every asset owned by you. Cancel and keep it all." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Credibility() {
  return (
    <section className="border-y border-border bg-bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} className="text-center" variants={item}>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {s.value}
              </div>
              <div className="text-xs text-text-muted leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
