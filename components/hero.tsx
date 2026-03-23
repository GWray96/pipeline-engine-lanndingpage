"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarX, User, BadgePoundSterling, PackageCheck } from "lucide-react";

const badges = [
  { icon: CalendarX, text: "Cancel any month" },
  { icon: User, text: "You deal with Gareth directly" },
  { icon: BadgePoundSterling, text: "No agency markup" },
  { icon: PackageCheck, text: "Assets yours on day 90" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4F7EFF 1px, transparent 1px), linear-gradient(90deg, #4F7EFF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-card text-xs text-text-muted mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Done-for-you B2B lead generation, built in 90 days
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
        >
          Qualified calls in your{" "}
          <span className="text-accent">calendar</span>.
          <br />
          Every month.
          <br />
          <span className="text-text-muted">Without you lifting a finger.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          In 90 days your calendar is filling with qualified conversations and
          the business is growing without you chasing it. Then I keep that going.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
          >
            Book a free discovery call
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent/50 transition-all text-sm"
          >
            See what you get
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-card text-xs text-text-muted"
            >
              <badge.icon size={11} className="text-green flex-shrink-0" />
              {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
