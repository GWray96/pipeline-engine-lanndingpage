"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this just another agency?",
    a: "No. There's no agency markup, no outsourcing, no account manager. You deal with Gareth directly. The person who builds it is the person you talk to. The model is different too: you own the system at the end of 90 days. It runs whether you continue working with us or not.",
  },
  {
    q: "What if it doesn't work?",
    a: "There's no long-term contract. Cancel The Fuel any month with 30 days' notice. And if the system isn't built and live in 90 days, you don't pay for the final month. The risk of saying yes is lower than the risk of doing nothing.",
  },
  {
    q: "I don't have time to be involved. Is that a problem?",
    a: "That's the point. You hand it over, it gets built, it runs. Your time commitment during the build is minimal: a kickoff session, access to your accounts, and occasional input when needed. After that, it's done for you.",
  },
  {
    q: "I've been burned by agencies before. Why is this different?",
    a: "Agencies sell a managed service. Stop paying and everything stops. This builds a system you own. The outreach lists, the content, the automations, the landing pages. All yours at the end of 90 days. Different model entirely.",
  },
  {
    q: "Why do I need the ongoing subscription?",
    a: "The engine always needs fuel. Without it, the prospect list runs dry, the content goes stale, the optimisation stalls, and the ads go dark. The Build gives you the vehicle. The Fuel keeps it accelerating. Month 12 outperforms Month 3 because it compounds.",
  },
  {
    q: "Can't I just manage it myself after the build?",
    a: "You can. The system is yours. But most clients find that keeping it fuelled with fresh content, new prospects, ongoing testing and ads is exactly what they don't have time to do. Which is why they came here in the first place.",
  },
  {
    q: "Does this work for my industry?",
    a: "Industry matters less than situation. If you run a B2B business with a real service to deliver, a proper sales cycle, and you're tired of relying on referrals, this is designed for you. The system is built around your specific audience, not a generic template. If your customers buy based on trust and results rather than impulse, this works.",
  },
  {
    q: "How much does the ad spend cost on top?",
    a: "Ad spend is separate and agreed with you upfront before anything is launched. There's no minimum. We'll recommend a sensible starting budget based on your targets and sector. You're never surprised by an invoice.",
  },
  {
    q: "How quickly can we get started?",
    a: "As soon as the discovery call confirms it's a good fit, we can start within a week. There are a maximum of 5 clients at any time. The system is built by one person, and quality depends on keeping that number manageable.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-accent uppercase tracking-widest mb-3">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Straight answers.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-bg-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-elevated transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-text-primary pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-text-muted flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
