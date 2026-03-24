import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Dynamic import of the MDX content
  let PostContent: React.ComponentType;
  try {
    const mod = await import(`@/content/${slug}.mdx`);
    PostContent = mod.default;
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
        <div className="prose-pipeline">
          <PostContent />
        </div>

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
                Founder, The Pipeline Engine. 10+ years in B2B sales environments. Done-for-you
                lead generation systems for B2B SMEs.
              </p>
              <a
                href="https://cal.com/gareth-wray/30min"
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

        {/* Navigation to other posts */}
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
