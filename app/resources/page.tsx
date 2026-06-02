"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, Activity } from "lucide-react";
import PageHero from "@/components/page-hero";

const tools = [
  {
    icon: <Calculator size={22} className="text-accent" />,
    label: "Free Tool",
    name: "Pipeline Gap Calculator",
    desc: "Enter your revenue target, average deal value, close rate, and current pipeline conversations. Get back the exact number of conversations you need per month to hit your target — and the revenue you're leaving on the table by falling short.",
    outputs: [
      "Conversations needed per month",
      "Your current pipeline gap",
      "Annual revenue impact of the gap",
    ],
    cta: "Calculate your gap",
    href: "https://calculator.thepipelineengine.com",
    color: "border-accent/30",
    gradient: "bg-accent/5",
  },
  {
    icon: <Activity size={22} className="text-green" />,
    label: "Free Tool",
    name: "Pipeline Health Score",
    desc: "A 10-question audit that diagnoses exactly where your B2B pipeline is leaking. Foundation, inbound, outbound, and infrastructure — scored individually so you know precisely where to focus first.",
    outputs: [
      "Overall pipeline health score /100",
      "Category breakdown across 4 areas",
      "Your specific pipeline bottleneck",
    ],
    cta: "Get your health score",
    href: "https://audit.thepipelineengine.com",
    color: "border-green/30",
    gradient: "bg-green/5",
  },
];

const useCases = [
  {
    title: "Before our call",
    desc: "Run both tools before your discovery call. It gives us a shared baseline to work from and saves 20 minutes of scoping.",
  },
  {
    title: "When the pipeline slows",
    desc: "Use the Health Score to pinpoint exactly which area has stalled — so you're fixing the right thing instead of guessing.",
  },
  {
    title: "Setting targets",
    desc: "Use the Calculator to reverse-engineer your revenue goal into a specific, measurable conversation target for the month.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title="Diagnose before you build."
        subtitle="Two free tools that tell you where your pipeline stands — before you spend anything fixing it. Takes about 5 minutes. Results emailed to you."
      />

      <main className="pb-24">
        {/* Tool cards */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className={`rounded-2xl border ${tool.color} bg-bg-card overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Gradient header */}
                <div className={`${tool.gradient} px-7 py-8 border-b border-border`}>
                  <div className="flex items-center gap-3 mb-4">
                    {tool.icon}
                    <span className="text-xs uppercase tracking-widest text-text-muted">{tool.label}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">{tool.name}</h2>
                  <p className="text-sm text-text-muted leading-relaxed">{tool.desc}</p>
                </div>

                <div className="px-7 py-6">
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-3">What you get</p>
                  <ul className="space-y-2.5 mb-6">
                    {tool.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-text-muted">{o}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-dim text-white text-sm font-medium transition-colors"
                  >
                    {tool.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* When to use them */}
        <section className="py-16 px-6 bg-bg-card/30">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-accent uppercase tracking-widest mb-3">When to use them</p>
              <h2 className="text-2xl font-bold text-text-primary">When to run them</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {useCases.map((u, i) => (
                <motion.div
                  key={u.title}
                  className="p-6 rounded-xl border border-border bg-bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3 className="text-sm font-bold text-text-primary mb-2">{u.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{u.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Once you know the gap, you can decide what to do about it.
              </h2>
              <p className="text-text-muted mb-8">
                If either tool shows a problem worth solving, book a 30-minute call.
                We&apos;ll look at your numbers and talk through whether building a pipeline system
                makes sense for your business right now.
              </p>
              <a
                href="https://cal.com/gareth-wray/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-colors"
              >
                Book a free discovery call
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
