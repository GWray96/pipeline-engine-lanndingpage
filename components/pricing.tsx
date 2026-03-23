"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X, Users } from "lucide-react";

const rows = [
  {
    feature: "Annual cost (Year 1)",
    agency: "£36,000–£60,000",
    freelancers: "£18,000–£36,000",
    hire: "£45,000–£67,000",
    pipeline: "£21,500",
  },
  {
    feature: "You own the assets",
    agency: false,
    freelancers: "Partial",
    hire: true,
    pipeline: true,
  },
  {
    feature: "No lock-in contract",
    agency: false,
    freelancers: "Varies",
    hire: false,
    pipeline: true,
  },
  {
    feature: "One person does all the work",
    agency: false,
    freelancers: false,
    hire: true,
    pipeline: true,
  },
  {
    feature: "New clients find you AND you find them",
    agency: false,
    freelancers: false,
    hire: "Maybe",
    pipeline: true,
  },
  {
    feature: "Real sales experience",
    agency: false,
    freelancers: false,
    hire: "Unlikely",
    pipeline: true,
  },
  {
    feature: "Paid ads included",
    agency: false,
    freelancers: false,
    hire: "Maybe",
    pipeline: true,
  },
  {
    feature: "Delivery guarantee",
    agency: false,
    freelancers: false,
    hire: false,
    pipeline: true,
  },
  {
    feature: "System keeps running if you leave",
    agency: false,
    freelancers: false,
    hire: false,
    pipeline: true,
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check size={16} className="text-green" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X size={16} className="text-text-muted/40" />
      </div>
    );
  }
  return (
    <div className="text-center text-xs text-text-muted">{value}</div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            A fraction of the cost. None of the compromises.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            One new B2B client is worth £10,000–£30,000 to your business. The
            system needs to find you one to cover the entire build. Everything
            after that is upside.
          </p>

          {/* Pricing callout */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8 px-8 py-5 rounded-xl border border-border bg-bg-card">
            <div className="text-center">
              <div className="text-xs text-accent uppercase tracking-widest mb-1">
                Phase 1: The Build
              </div>
              <div className="text-3xl font-bold text-text-primary">£3,500</div>
              <div className="text-xs text-text-muted mt-1">
                one-off &nbsp;·&nbsp; or 3 × £1,200
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="block sm:hidden w-12 h-px bg-border" />
            <div className="text-center">
              <div className="text-xs text-green uppercase tracking-widest mb-1">
                Phase 2: The Fuel
              </div>
              <div className="text-3xl font-bold text-text-primary">£1,500</div>
              <div className="text-xs text-text-muted mt-1">
                per month &nbsp;·&nbsp; no lock-in
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="overflow-x-auto rounded-xl border border-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-xs text-text-muted uppercase tracking-widest font-medium w-[30%]">
                  &nbsp;
                </th>
                <th className="px-4 py-4 text-center text-xs text-text-muted font-medium">
                  Agency
                </th>
                <th className="px-4 py-4 text-center text-xs text-text-muted font-medium">
                  Freelancers
                </th>
                <th className="px-4 py-4 text-center text-xs text-text-muted font-medium">
                  In-house hire
                </th>
                <th className="px-4 py-4 text-center bg-accent/5 border-x border-accent/20">
                  <span className="text-xs text-accent font-semibold uppercase tracking-widest">
                    Pipeline Engine
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border last:border-0 ${
                    i % 2 === 0 ? "" : "bg-bg-card/30"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-text-muted">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4">
                    <Cell value={row.agency} />
                  </td>
                  <td className="px-4 py-4">
                    <Cell value={row.freelancers} />
                  </td>
                  <td className="px-4 py-4">
                    <Cell value={row.hire} />
                  </td>
                  <td className="px-4 py-4 bg-accent/5 border-x border-accent/20">
                    <Cell value={row.pipeline} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Scarcity + CTA */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Users size={13} className="text-amber" />
            <span>
              <span className="text-amber font-medium">Maximum 5 clients at any time</span>
              {" "}so every client gets Gareth, not a junior
            </span>
          </div>
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
