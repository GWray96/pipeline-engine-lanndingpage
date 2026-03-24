export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const posts: BlogPost[] = [
  {
    slug: "why-referrals-will-kill-your-b2b-business",
    title: "Why Relying on Referrals Is Slowly Killing Your B2B Business",
    excerpt:
      "Referrals feel like a compliment. They're not a strategy. Here's why depending on word-of-mouth is the most dangerous place a B2B business can be — and what to do instead.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Pipeline Strategy",
  },
  {
    slug: "b2b-pipeline-formula-how-many-conversations",
    title: "The B2B Pipeline Formula: How Many Conversations Do You Actually Need?",
    excerpt:
      "Most B2B owners set a revenue target and hope the pipeline follows. It doesn't. Here's the maths behind working out exactly how many qualified conversations you need per month.",
    date: "2026-03-17",
    readTime: "5 min read",
    category: "Lead Generation",
  },
  {
    slug: "why-b2b-agencies-fail",
    title: "Why Most B2B Lead Generation Agencies Fail (And What to Look for Instead)",
    excerpt:
      "You've probably either hired an agency and been disappointed, or you know someone who has. It's almost a rite of passage for B2B owners. Here's why it keeps happening — and what a different model looks like.",
    date: "2026-03-14",
    readTime: "7 min read",
    category: "Agency vs In-house",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
