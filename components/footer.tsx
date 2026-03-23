export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-accent font-bold text-lg mb-3">
              The Pipeline Engine
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Done-for-you B2B lead generation. Built in 90 days. Fuelled every
              month. Yours to keep.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "What's included", href: "#included" },
                { label: "Pricing", href: "#pricing" },
                { label: "About", href: "#about" },
                { label: "Book a call", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs text-text-muted hover:text-text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cal.com/gareth-wray/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  Book a discovery call →
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@thepipelineengine.com"
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  hello@thepipelineengine.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gareth-wray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} My OPMA Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
