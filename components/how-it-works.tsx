"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "The Build",
    heading: "We build the engine",
    body: "In 90 days you go from flying blind to having a system that works around the clock. The right prospects are being reached every day. Your website is converting visitors into enquiries. Warm leads are being nurtured without you touching them. On day 90 you own the whole thing. It runs whether you continue with us or not.",
    detail: "£3,500 one-off",
    color: "text-accent",
  },
  {
    number: "02",
    phase: "The Fuel",
    heading: "We keep it running",
    body: "Your calendar keeps filling. New prospects enter the system every month. Your content builds authority and brings inbound enquiries. Paid ads drive qualified traffic. Conversion rates improve. You focus on delivering great work for clients. The system handles finding the next ones.",
    detail: "£1,500/month",
    color: "text-green",
  },
  {
    number: "03",
    phase: "Compounding",
    heading: "It gets better every month",
    body: "Month 12 is significantly better than month 1. More content ranking. A larger warm audience. Lower cost per qualified call as everything sharpens. The business that was referral-dependent a year ago now has a pipeline it can rely on. And it keeps growing.",
    detail: "Month 12 > Month 3",
    color: "text-amber",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-widest mb-3">
            The model
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            The engine always needs fuel.
            <br />
            <span className="text-text-muted">
              Without it, you just have the vehicle.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-xl border border-border bg-bg-card overflow-hidden group hover:border-accent/30 transition-colors cursor-default"
            >
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-7xl font-bold text-border/50 leading-none select-none">
                {step.number}
              </div>

              <div className="relative">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${step.color} mb-3 block`}
                >
                  {step.phase}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.heading}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {step.body}
                </p>
                <div
                  className={`text-sm font-semibold ${step.color} border-t border-border pt-4`}
                >
                  {step.detail}
                </div>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA after comprehension moment */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border hover:border-accent/50 text-text-muted hover:text-text-primary transition-all text-sm"
          >
            Sounds right. Let&apos;s talk.
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
