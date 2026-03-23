"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, MessageSquare, TrendingUp } from "lucide-react";

const outputs = [
  { icon: Target, label: "Conversations needed", sub: "per month to hit your target" },
  { icon: MessageSquare, label: "Your current gap", sub: "vs where you need to be" },
  { icon: TrendingUp, label: "Revenue left on the table", sub: "every year you wait" },
];

export default function CalculatorCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="rounded-2xl border border-accent/20 bg-bg-card relative overflow-hidden p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-xs text-accent uppercase tracking-widest mb-3">
                Free tool
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                Not sure how big your gap is?
                <br />
                <span className="text-text-muted">Find out in 2 minutes.</span>
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Answer 4 quick questions and see exactly how many qualified
                conversations you need every month to hit your revenue target
                — and what the gap is currently costing you.
              </p>

              <a
                href="https://calculator.thepipelineengine.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
              >
                Calculate my pipeline gap
                <ArrowRight size={15} />
              </a>

              <p className="text-xs text-text-muted mt-3">
                Free. No email required.
              </p>
            </div>

            {/* Right: output preview */}
            <div className="space-y-3">
              {outputs.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-elevated"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {item.label}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
