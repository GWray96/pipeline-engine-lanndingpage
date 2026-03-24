"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, Activity, CalendarX, User, PackageCheck, BadgePoundSterling } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { posts, formatDate } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  "Pipeline Strategy": "text-accent border-accent/30 bg-accent/5",
  "Lead Generation": "text-green border-green/30 bg-green/5",
  "Agency vs In-house": "text-amber border-amber/30 bg-amber/5",
};

const badges = [
  { icon: CalendarX, text: "No lock-in" },
  { icon: User, text: "Deal with Gareth directly" },
  { icon: BadgePoundSterling, text: "No agency markup" },
  { icon: PackageCheck, text: "Assets yours to keep" },
];

const phases = [
  {
    number: "01",
    phase: "The Build",
    price: "£3,500",
    period: "one-off",
    headline: "Built in 90 days",
    body: "Your complete pipeline infrastructure built from scratch. CRM, outbound, inbound, content, landing pages — every piece in place and owned by you from day one.",
    color: "text-accent",
    border: "border-accent/20",
  },
  {
    number: "02",
    phase: "The Fuel",
    price: "£1,500/mo",
    period: "no lock-in",
    headline: "Fuelled every month",
    body: "Monthly execution to keep the system active. New prospects researched, outbound running, content published, ads managed — qualified conversations keep arriving without you touching it.",
    color: "text-green",
    border: "border-green/20",
    featured: true,
  },
  {
    number: "03",
    phase: "Compound",
    price: "Grows over time",
    period: "automatic",
    headline: "Gets better every month",
    body: "Content ranks higher. Your warm audience grows. Outreach sequences improve. Month 12 outperforms Month 3 — and you own every asset the whole way through.",
    color: "text-amber",
    border: "border-amber/20",
  },
];

const tools = [
  {
    icon: <Calculator size={20} className="text-accent" />,
    name: "Pipeline Gap Calculator",
    desc: "Enter your revenue target and deal metrics. Get back the exact number of conversations you need per month — and the revenue you're leaving on the table.",
    cta: "Calculate your gap",
    href: "https://calculator.thepipelineengine.com",
    color: "border-accent/30 hover:border-accent/60",
    glow: "bg-accent/5",
  },
  {
    icon: <Activity size={20} className="text-green" />,
    name: "Pipeline Health Score",
    desc: "A 10-question audit that scores your pipeline across 4 areas — foundation, inbound, outbound, and infrastructure — and shows you exactly where you're leaking.",
    cta: "Get your score",
    href: "https://audit.thepipelineengine.com",
    color: "border-green/30 hover:border-green/60",
    glow: "bg-green/5",
  },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-accent/8 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#4F7EFF 1px, transparent 1px), linear-gradient(90deg, #4F7EFF 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-card text-xs text-text-muted mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            B2B lead generation — built for you, owned by you
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
          >
            A B2B pipeline system.
            <br />
            <span className="text-accent">Built for you.</span>
            <br />
            <span className="text-text-muted">Owned by you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build your complete inbound and outbound lead generation system in 90 days —
            CRM, outreach, content, landing pages — then run it every month so qualified
            conversations arrive consistently, whether you&apos;re selling or delivering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://cal.com/gareth-wray/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
            >
              Book a free discovery call
              <ArrowRight size={16} />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent/50 transition-all text-sm"
            >
              See how it works
            </Link>
          </motion.div>

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

      {/* ── How It Works (condensed) ─────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-accent uppercase tracking-widest mb-3">The model</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Two phases. One system. Yours to keep.
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Phase 1 builds the infrastructure. Phase 2 keeps it running.
              Every asset is yours from day one — regardless of what you decide about Phase 2.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                className={`relative p-8 rounded-xl border ${p.border} bg-bg-card overflow-hidden ${p.featured ? "ring-1 ring-green/20" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-border/40 leading-none select-none">
                  {p.number}
                </div>
                <div className="relative">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${p.color} mb-2 block`}>
                    {p.phase}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{p.headline}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">{p.body}</p>
                  <div className={`border-t border-border pt-4 flex items-center justify-between`}>
                    <span className={`text-sm font-bold ${p.color}`}>{p.price}</span>
                    <span className="text-xs text-text-muted">{p.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              See everything that&apos;s included
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Free Tools ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-accent uppercase tracking-widest mb-3">Free tools</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Know your numbers before you build anything.
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Two free diagnostic tools to audit your pipeline and calculate your gap.
              Takes 5 minutes. Results sent to your email.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <motion.a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl border ${tool.color} bg-bg-card overflow-hidden transition-all duration-200`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`${tool.glow} px-7 py-8 border-b border-border`}>
                  <div className="flex items-center gap-3 mb-4">
                    {tool.icon}
                    <span className="text-xs uppercase tracking-widest text-text-muted">Free tool</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{tool.desc}</p>
                </div>
                <div className="px-7 py-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">{tool.cta}</span>
                  <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              View all resources
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-xs text-accent uppercase tracking-widest mb-3">From the blog</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                B2B pipeline thinking, written plainly.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors flex-shrink-0"
            >
              All articles
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post, i) => {
              const colorClass = categoryColors[post.category] ?? "text-text-muted border-border bg-transparent";
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="h-full p-6 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-all duration-200 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${colorClass}`}>
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors leading-snug mb-3 flex-1">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
                        <span className="text-xs text-text-muted">{post.readTime}</span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About (condensed) ────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-square max-w-xs mx-auto rounded-2xl border border-border bg-bg-card overflow-hidden relative">
                <Image
                  src="/images/gareth-headshot.png"
                  alt="Gareth Wray, Founder of The Pipeline Engine"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-accent uppercase tracking-widest mb-3">Who&apos;s behind it</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                One person. All the work.
                <br />
                <span className="text-text-muted">No middlemen.</span>
              </h2>
              <div className="space-y-4 text-text-muted text-sm leading-relaxed mb-8">
                <p>
                  I&apos;m Gareth Wray. I&apos;ve spent over a decade inside B2B sales
                  environments and five years in specialist digital marketing training.
                  The Pipeline Engine is built from both — real methods, tested in real businesses.
                </p>
                <p>
                  You deal with me directly from day one. Not an account manager. Not a junior.
                  Every piece of copy, every sequence, every system — written, built, and managed
                  by the person whose name is on the door.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { value: "10+", label: "Years in B2B sales" },
                  { value: "5 yrs", label: "Digital marketing training" },
                  { value: "1", label: "Person doing the work" },
                  { value: "0", label: "Juniors or outsourcing" },
                ].map((s) => (
                  <div key={s.value} className="p-4 rounded-lg border border-border bg-bg-card">
                    <div className="text-lg font-bold text-text-primary">{s.value}</div>
                    <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                More about Gareth
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-card/30">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-64 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-accent uppercase tracking-widest mb-4">
              Next step
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              If this sounds like the right fit, book a call.
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
              A free 30-minute conversation. We&apos;ll look at where your pipeline is, where
              it needs to be, and whether building a system makes sense for your business right now.
              No pitch. If it&apos;s not the right fit, I&apos;ll say so.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://cal.com/gareth-wray/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-dim text-white font-medium transition-all hover:scale-[1.02] shadow-lg shadow-accent/25 text-sm"
              >
                Book a free discovery call
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@thepipelineengine.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent/50 transition-all text-sm"
              >
                Send an email
              </a>
            </div>
            <p className="text-xs text-text-muted mt-6">
              Maximum 5 clients at any time.{" "}
              <span className="text-text-primary">Spots limited by design.</span>
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
