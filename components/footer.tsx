import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-accent font-bold text-lg mb-3">
              The Pipeline Engine
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              Done-for-you B2B lead generation. Built in 90 days. Fuelled every
              month. Yours to keep.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: "How it works", href: "/how-it-works" },
                { label: "Resources", href: "/resources" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Book a call", href: "https://cal.com/gareth-wray/30min" },
              ].map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("http") ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-xs text-text-muted hover:text-text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
              Free Tools
            </p>
            <ul className="space-y-2">
              {[
                { label: "Pipeline Gap Calculator", href: "https://calculator.thepipelineengine.com" },
                { label: "Pipeline Health Score", href: "https://audit.thepipelineengine.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
