import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-text-muted text-base leading-relaxed mb-5">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent hover:text-text-primary underline underline-offset-2 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-5 pl-0">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-5 list-decimal pl-5">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-text-muted text-base flex items-start gap-2 before:content-['—'] before:text-accent before:flex-shrink-0 before:mt-0">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-5 my-6 italic text-text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-bg-card border border-border text-accent px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-bg-card border border-border rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono text-text-muted">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-border my-10" />,
    strong: ({ children }) => (
      <strong className="text-text-primary font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-text-primary italic">{children}</em>
    ),
    ...components,
  };
}
