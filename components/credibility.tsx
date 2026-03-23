"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "90 Days", label: "Full pipeline system built, live, and owned by you" },
  { value: "24/7", label: "System running whether you're working or not" },
  { value: "Zero", label: "Outsourcing. Everything built and managed in-house" },
  { value: "Yours", label: "Every asset, sequence, and system owned by you forever" },
];

export default function Credibility() {
  return (
    <section className="border-y border-border bg-bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {s.value}
              </div>
              <div className="text-xs text-text-muted leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
