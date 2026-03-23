"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ClipboardList,
  Crosshair,
  Lightbulb,
  FileText,
  Monitor,
  Mail,
  Linkedin,
  TrendingUp,
  Zap,
  Database,
  MessageSquare,
  Send,
  RefreshCcw,
  BarChart2,
  CalendarCheck,
} from "lucide-react";

const foundation = [
  { icon: Phone, label: "Discovery call" },
  { icon: ClipboardList, label: "Strategy audit" },
  { icon: Crosshair, label: "ICP definition" },
  { icon: Lightbulb, label: "Offer positioning" },
];

const inbound = [
  { icon: FileText, label: "Lead magnet" },
  { icon: Monitor, label: "Landing page" },
  { icon: Mail, label: "Email sequences" },
  { icon: Linkedin, label: "LinkedIn & content" },
  { icon: TrendingUp, label: "SEO & content" },
  { icon: Zap, label: "Paid ads" },
];

const outbound = [
  { icon: Database, label: "250 qualified prospects" },
  { icon: MessageSquare, label: "LinkedIn outreach" },
  { icon: Send, label: "Cold email sequences" },
  { icon: RefreshCcw, label: "Follow-up automation" },
  { icon: BarChart2, label: "CRM & pipeline" },
];

// Total animation cycle = 7s. Each animation's (duration + repeatDelay) = 7s
// so all phases stay perfectly synchronised across every loop.
const CYCLE = 7;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Glowing particle that travels down a vertical connector line
function FlowConnector({ delay }: { delay: number }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col items-center gap-1">
        <div className="relative w-px h-6 bg-border">
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-accent"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 8px 4px rgba(79,126,255,0.8)",
              top: "-4px",
            }}
            animate={{
              top: ["-4px", "28px"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.8,
              delay,
              repeat: Infinity,
              repeatDelay: CYCLE - 0.8,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="w-2 h-2 rotate-45 border-r border-b border-border" />
      </div>
    </div>
  );
}

export default function SystemOverview() {
  return (
    <section className="py-24 px-6 bg-bg-card/30">
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
            What gets built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Everything that gets built.
            <br />
            <span className="text-text-muted">Inbound and outbound, connected end to end.</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Most agencies do one or the other and call it done. This builds both
            tracks together — so the system is working from every angle from day one.
          </p>
        </motion.div>

        {/* Foundation steps — light sweeps left to right */}
        <div className="relative mb-10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 w-32 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(79,126,255,0.15), transparent)",
            }}
            animate={{ x: [-128, 1200] }}
            transition={{
              duration: 1.5,
              delay: 0,
              repeat: Infinity,
              repeatDelay: CYCLE - 1.5,
              ease: "linear",
            }}
          />
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {foundation.map((step, i) => (
              <motion.div
                key={step.label}
                variants={item}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card">
                  <step.icon size={13} className="text-accent flex-shrink-0" />
                  <span className="text-xs text-text-muted">{step.label}</span>
                </div>
                {i < foundation.length - 1 && (
                  <div className="w-4 h-px bg-border hidden sm:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Arrow down — particle delay 1.2s */}
        <FlowConnector delay={1.2} />

        {/* Two tracks */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">

          {/* Inbound — scan delay 1.8s */}
          <motion.div
            className="rounded-xl border border-accent/20 bg-bg-card overflow-hidden relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Light scan overlay */}
            <motion.div
              className="absolute inset-x-0 h-24 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(79,126,255,0.08), transparent)",
                top: "-96px",
              }}
              animate={{ top: ["-96px", "500px"] }}
              transition={{
                duration: 2.0,
                delay: 1.8,
                repeat: Infinity,
                repeatDelay: CYCLE - 2.0,
                ease: "linear",
              }}
            />
            <div className="px-6 py-3 border-b border-accent/20 bg-accent/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Inbound — they find you
              </p>
            </div>
            <motion.ul
              className="p-4 space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {inbound.map((step) => (
                <motion.li
                  key={step.label}
                  variants={item}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-elevated transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <step.icon size={13} className="text-accent" />
                  </div>
                  <span className="text-sm text-text-muted">{step.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Outbound — scan delay 2.0s (slight cascade offset) */}
          <motion.div
            className="rounded-xl border border-green/20 bg-bg-card overflow-hidden relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Light scan overlay — green tinted */}
            <motion.div
              className="absolute inset-x-0 h-24 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(34,197,94,0.08), transparent)",
                top: "-96px",
              }}
              animate={{ top: ["-96px", "500px"] }}
              transition={{
                duration: 2.0,
                delay: 2.0,
                repeat: Infinity,
                repeatDelay: CYCLE - 2.0,
                ease: "linear",
              }}
            />
            <div className="px-6 py-3 border-b border-green/20 bg-green/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-green">
                Outbound — you find them
              </p>
            </div>
            <motion.ul
              className="p-4 space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {outbound.map((step) => (
                <motion.li
                  key={step.label}
                  variants={item}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-elevated transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-green/10 flex items-center justify-center flex-shrink-0">
                    <step.icon size={13} className="text-green" />
                  </div>
                  <span className="text-sm text-text-muted">{step.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Convergence arrow — particle delay 3.8s */}
        <FlowConnector delay={3.8} />

        {/* Result card — glow pulse at end of sequence */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Pulsing glow — fires at end of light stream */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(79,126,255,0)",
                  "0 0 28px 6px rgba(79,126,255,0.35)",
                  "0 0 0px 0px rgba(79,126,255,0)",
                ],
              }}
              transition={{
                duration: 1.5,
                delay: 4.8,
                repeat: Infinity,
                repeatDelay: CYCLE - 1.5,
              }}
            />
            <div className="relative inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-accent/40 bg-accent/5">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <CalendarCheck size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Qualified calls in your calendar
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  Every month. Automatically.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
