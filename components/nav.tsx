"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What's included", href: "#included" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="text-accent font-bold text-lg tracking-tight">
            The Pipeline Engine
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-accent hover:bg-accent-dim text-white text-sm font-medium transition-colors"
        >
          Book a discovery call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-muted hover:text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-card border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-muted hover:text-text-primary transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent hover:bg-accent-dim text-white text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Book a discovery call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
