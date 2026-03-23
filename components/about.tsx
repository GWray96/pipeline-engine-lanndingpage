"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square max-w-sm mx-auto rounded-2xl border border-border bg-bg-card overflow-hidden relative">
              <Image
                src="/images/gareth-headshot.png"
                alt="Gareth Wray, Founder of The Pipeline Engine"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* LinkedIn link */}
            <div className="flex justify-center mt-4">
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
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-accent uppercase tracking-widest mb-3">
              Who&apos;s building this
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              One person. All the work.
              <br />
              <span className="text-text-muted">No middlemen.</span>
            </h2>
            <div className="space-y-4 text-text-muted text-sm leading-relaxed">
              <p>
                I&apos;m Gareth Wray. I&apos;ve spent over a decade working inside
                businesses that were genuinely good at lead generation:
                call centres, sales rooms, live campaigns. I know what a full
                pipeline looks like from the inside and what it takes to build
                one from scratch.
              </p>
              <p>
                For the past 5 years I&apos;ve been deep in specialist digital
                marketing training, studying, applying, and building the
                systems that actually work in modern B2B. That&apos;s what The
                Pipeline Engine is built from. Not theory. Real methods tested
                in real businesses.
              </p>
              <p>
                If you run a B2B business with a proper service to deliver, a
                real sales cycle, and you&apos;re tired of flying blind on
                pipeline. This is built for you. Industry doesn&apos;t matter
                as much as the situation does. If Mark&apos;s story sounds
                familiar, we should talk.
              </p>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
            >
              {[
                { label: "10+ years", sub: "in B2B sales environments" },
                { label: "5 years", sub: "specialist digital marketing training" },
                { label: "One person", sub: "you always deal with me directly" },
                { label: "No juniors", sub: "no outsourcing, ever" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="p-4 rounded-lg border border-border bg-bg-card cursor-default"
                >
                  <div className="text-sm font-bold text-text-primary">{s.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
