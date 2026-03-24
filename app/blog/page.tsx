import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts, formatDate } from "@/lib/blog";
import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical articles on B2B lead generation, pipeline strategy, and building outbound systems that actually work.",
};

const categoryColors: Record<string, string> = {
  "Pipeline Strategy": "text-accent border-accent/30 bg-accent/5",
  "Lead Generation": "text-green border-green/30 bg-green/5",
  "Agency vs In-house": "text-amber border-amber/30 bg-amber/5",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="B2B pipeline thinking, written plainly."
        subtitle="No growth-hacking nonsense. Just practical thinking on lead generation, pipeline strategy, and building systems that compound."
      />

      <main className="pb-24">
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {posts.map((post) => {
                const colorClass =
                  categoryColors[post.category] ?? "text-text-muted border-border bg-bg-card";
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <article className="p-7 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${colorClass}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
                        <span className="text-xs text-text-muted">{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-5">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-accent font-medium">
                        Read article
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
