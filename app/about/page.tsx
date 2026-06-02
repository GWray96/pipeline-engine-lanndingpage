"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/page-hero";

const stats = [
  { value: "10+", label: "Years in B2B sales environments" },
  { value: "5 yrs", label: "Specialist digital marketing training" },
  { value: "1", label: "Person — you always deal with Gareth" },
  { value: "0", label: "Junior staff, subcontractors, or outsourcing" },
];

const credentials = [
  {
    period: "2019 – 2024",
    title: "Rich & Niche Academy",
    desc: "Five years studying every channel that goes into a B2B lead generation system — inbound, outbound, paid media, CRM, conversion optimisation, email automation. Applied in real businesses throughout, not just studied in theory.",
  },
  {
    period: "2013 – 2019",
    title: "B2B Sales & Lead Generation",
    desc: "Over a decade inside high-volume B2B sales environments — call centres, live sales rooms, and direct campaigns. Built a ground-level understanding of what makes a qualified pipeline tick and what kills one.",
  },
  {
    period: "Now",
    title: "The Pipeline Engine",
    desc: "Everything from those 10+ years channelled into one offer: a done-for-you B2B lead generation system, built in 90 days, fuelled monthly, owned by you. No juniors, no outsourcing, no mystery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who's behind it"
        title="One person. All the work. No middlemen."
        subtitle="I'm Gareth Wray. Over a decade in B2B sales, five years in specialist digital marketing. The Pipeline Engine is what I built when I put both together."
      />

      <main className="pb-24">
        {/* Main about section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Photo + LinkedIn */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square max-w-sm mx-auto rounded-2xl border border-border bg-bg-card overflow-hidden relative mb-5">
                  <Image
                    src="/images/gareth-headshot.png"
                    alt="Gareth Wray, Founder of The Pipeline Engine"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex justify-center mb-8">
                  <a
                    href="https://www.linkedin.com/in/gareth-wray/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card hover:border-accent/50 hover:text-text-primary text-text-muted text-xs transition-colors"
                  >
                    <Linkedin size={14} />
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <motion.div
                      key={s.value}
                      className="p-4 rounded-lg border border-border bg-bg-card"
                      whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    >
                      <div className="text-xl font-bold text-text-primary">{s.value}</div>
                      <div className="text-xs text-text-muted mt-0.5 leading-tight">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Story */}
              <motion.div
                className="space-y-5 text-text-muted text-sm leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p>
                  I spent over a decade inside businesses that were genuinely good at
                  generating leads — call centres, sales rooms, live B2B campaigns. I know
                  what a full pipeline looks like from the inside. I know what it costs in
                  time, headcount, and infrastructure to keep it running. And I know exactly
                  what happens when it goes quiet.
                </p>
                <p>
                  For five years I invested everything I had into specialist digital
                  marketing training through Rich &amp; Niche Academy — studying inbound
                  and outbound lead generation, paid media, CRM architecture, email
                  automation, conversion optimisation, and LinkedIn strategy. Not courses
                  for the sake of it. Methods I tested in real businesses, in real campaigns.
                </p>
                <p>
                  Most B2B businesses in the £250k–£2m range have the same problem:
                  they&apos;re good at what they do, they get results for clients, but
                  they&apos;re dependent on referrals and don&apos;t have a predictable
                  pipeline. The owner is the marketing department. They&apos;ve either
                  tried agencies who overpromised, or they&apos;ve been meaning to sort
                  it out themselves for two years.
                </p>
                <p>
                  The Pipeline Engine is my answer to that problem. A complete, done-for-you
                  B2B lead generation system — built in 90 days, fuelled every month, owned
                  by you from day one. Everything I&apos;ve learned about what actually
                  works, built specifically for your business, with zero outsourcing.
                </p>
                <p>
                  You deal with me directly from day one. Not an account manager. Not a
                  junior. Me. Every piece of copy, every sequence, every system — written,
                  configured, and tested by the person whose name is on the door.
                </p>

                <div className="pt-4">
                  <a
                    href="https://cal.com/gareth-wray/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dim text-white text-sm font-medium transition-colors"
                  >
                    Book a free 30-minute call
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Background / credentials timeline */}
        <section className="py-16 px-6 bg-bg-card/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-accent uppercase tracking-widest mb-3">Background</p>
              <h2 className="text-3xl font-bold text-text-primary">The background</h2>
            </motion.div>

            <div className="space-y-0">
              {credentials.map((c, idx) => (
                <motion.div
                  key={c.title}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {idx < credentials.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs text-accent font-semibold uppercase tracking-widest">{c.period}</span>
                    <h3 className="text-lg font-bold text-text-primary mt-1 mb-2">{c.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The promise */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "You always deal with me",
                  desc: "Every call, every piece of work, every decision — I'm the person doing it. No account manager buffer. No junior handoff halfway through.",
                },
                {
                  title: "No outsourcing, ever",
                  desc: "Your ICP, your copy, your sequences — written by me, not by a subcontractor in a different timezone. The quality is consistent because the person is consistent.",
                },
                {
                  title: "You own everything",
                  desc: "Every asset built is yours from day one. CRM access, sequences, content, the lot. If you cancel Phase 2, you keep the engine.",
                },
              ].map((p) => (
                <motion.div
                  key={p.title}
                  className="p-6 rounded-xl border border-border bg-bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                >
                  <h3 className="text-sm font-bold text-text-primary mb-2">{p.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
