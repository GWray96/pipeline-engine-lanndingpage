"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Shield, Calendar } from "lucide-react";
import Image from "next/image";

const callExpectations = [
  {
    icon: Clock,
    text: "30 minutes. That's it.",
  },
  {
    icon: MessageSquare,
    text: "Honest conversation about your pipeline situation",
  },
  {
    icon: Shield,
    text: "No pitch, no pressure. If it's not a fit, I'll tell you.",
  },
  {
    icon: Calendar,
    text: "If it is a fit, we talk next steps. No commitment required.",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-accent uppercase tracking-widest mb-4">
              Ready to stop relying on referrals?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Let&apos;s build your pipeline.
            </h2>
            <p className="text-text-muted mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll look at where
              your pipeline is, where it needs to be, and whether The Pipeline
              Engine is the right fit to get it there.
            </p>

            {/* What to expect */}
            <motion.div
              className="mb-10 p-6 rounded-xl border border-border bg-bg-card text-left max-w-md mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xs text-text-muted uppercase tracking-widest mb-4 text-center">
                What to expect on the call
              </p>
              <ul className="space-y-3">
                {callExpectations.map((item, i) => (
                  <motion.li
                    key={item.text}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <item.icon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-muted">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Founder avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-accent/40 overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/gareth-headshot.png"
                    alt="Gareth Wray"
                    width={40}
                    height={40}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <p className="text-sm text-text-muted">
                  You&apos;re booking directly with{" "}
                  <span className="text-text-primary font-medium">Gareth</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://cal.com/gareth-wray/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/25 text-sm"
                >
                  Book a free discovery call
                  <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:hello@thepipelineengine.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent/50 transition-all text-sm"
                >
                  Send an email instead
                </a>
              </div>
            </motion.div>

            <motion.p
              className="text-xs text-text-muted mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Maximum 5 clients at any time.{" "}
              <span className="text-text-primary">
                Spots are limited by design, not by marketing.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
