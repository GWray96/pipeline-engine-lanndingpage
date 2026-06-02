import { notFound } from "next/navigation";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, formatDate, posts } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

const mdxComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-text-primary mt-10 mb-5 leading-tight">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4 leading-tight">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl font-bold text-text-primary mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-text-muted text-base leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className="text-accent hover:text-text-primary underline underline-offset-2 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-5 space-y-1.5">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-5 list-decimal pl-5 space-y-1.5">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-text-muted text-base leading-relaxed flex items-start gap-2 before:content-['—'] before:text-accent before:flex-shrink-0">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-accent pl-5 my-6 italic text-text-muted">{children}</blockquote>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-text-primary font-semibold">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="text-text-primary italic">{children}</em>
  ),
  hr: () => <hr className="border-border my-10" />,
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-bg-card border border-border text-accent px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  let source: string;
  try {
    source = await readFile(
      path.join(process.cwd(), "content", `${slug}.mdx`),
      "utf-8"
    );
  } catch {
    notFound();
  }

  return (
    <main className="pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <ArrowLeft size={12} />
          Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
        </header>

        <hr className="border-border mb-10" />

        {/* MDX Content */}
        <MDXRemote source={source} components={mdxComponents} />

        <hr className="border-border my-12" />

        {/* Author / CTA */}
        <div className="rounded-xl border border-accent/30 bg-bg-card p-7">
          <p className="text-xs text-accent uppercase tracking-widest mb-3">Written by</p>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gareth-headshot.png"
                alt="Gareth Wray"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Gareth Wray</p>
              <p className="text-xs text-text-muted mt-0.5 mb-4">
                Founder, The Pipeline Engine. 10+ years in B2B sales environments.
                Done-for-you lead generation systems for B2B SMEs.
              </p>
              <a
                href="https://cal.com/gareth-wray/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-accent hover:bg-accent-dim px-4 py-2 rounded-lg transition-colors"
              >
                Book a free discovery call
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div className="mt-10">
          <p className="text-xs text-text-muted uppercase tracking-widest mb-4">More from the blog</p>
          <div className="grid md:grid-cols-2 gap-4">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="p-5 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-all">
                    <p className="text-xs text-text-muted mb-2">{p.readTime}</p>
                    <h3 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
