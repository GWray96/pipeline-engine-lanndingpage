"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, RotateCcw, KeyRound } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent/40",
    title: "The Delivery Guarantee",
    body: "Built and live in 90 days or you don't pay for the final month. No extensions, no excuses. The deadline is the commitment.",
  },
  {
    icon: RotateCcw,
    color: "text-green",
    bg: "bg-green/10",
    border: "hover:border-green/40",
    title: "The Spotify Clause",
    body: "Cancel The Fuel any month with 30 days' notice. No penalty, no contract, no lost assets. Walk away whenever it stops making sense.",
  },
  {
    icon: KeyRound,
    color: "text-amber",
    bg: "bg-amber/10",
    border: "hover:border-amber/40",
    title: "The Ownership Guarantee",
    body: "On day 90 every asset, sequence, and automation transfers to you. The system runs forever. With or without me.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Guarantee() {
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
            The guarantee
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Three layers of risk reversal.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            The risk of saying yes should feel smaller than the risk of doing
            nothing. Here&apos;s how that works in practice.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 rounded-xl border border-border bg-bg-card ${g.border} transition-colors cursor-default`}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${g.bg} mb-5`}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <g.icon size={22} className={g.color} />
              </motion.div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {g.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — highest trust moment on the page */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-text-muted mb-4">
            Three guarantees. No lock-in. Everything you build is yours.
            <br />
            The only question is whether you&apos;re ready to stop flying blind.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-all hover:scale-[1.02] shadow-lg shadow-accent/20"
          >
            Book a free discovery call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
