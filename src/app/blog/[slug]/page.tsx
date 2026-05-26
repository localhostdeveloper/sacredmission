import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { DonateCta } from "@/components/sections/DonateCta";

const posts: Record<string, {
  title: string;
  excerpt: string;
  body: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
}> = {
  "transforming-communities-through-education": {
    title: "Transforming Communities Through Education",
    excerpt: "How our Education For All program has changed the trajectory of over 1,250 young lives.",
    body: "Education is the most powerful cipher we have. When a child learns to read, write, and think critically, they unlock a potential that no circumstance can fully suppress. Our Education For All program began with a single classroom in Senegal and has grown to reach 1,250 students across 12 schools in 5 countries.\n\nWe have trained over 80 teachers, distributed thousands of textbooks, and built scholarship pipelines that have sent 14 students to university who would never have had that opportunity otherwise.\n\nThis is not charity. This is investment. Investment in the next generation of leaders, doctors, engineers, and changemakers who will carry this mission forward.",
    category: "Education",
    image: "/images/blog-1.jpg",
    publishedAt: "2026-05-20",
    author: "Jarie James",
  },
  "clean-water-milestone-30-wells": {
    title: "Milestone Reached: 30 Clean Water Wells Completed",
    excerpt: "We have officially drilled our 30th well.",
    body: "Water is life. For billions of people, that is not a metaphor — it is a daily reality measured in miles walked, hours spent, and lives lost to preventable waterborne illness.\n\nWhen we drilled our first well five years ago, we did not know it would lead to a movement. Today, our 30th well is complete, and we celebrate not just a number, but the 4,200 families who now have clean water within reach of their homes.\n\nThis milestone belongs to every donor, volunteer, and partner who believed in us from the beginning. We are not stopping at 30.",
    category: "Health",
    image: "/images/blog-2.jpg",
    publishedAt: "2026-05-15",
    author: "Sacred Cipher Team",
  },
  "women-empowerment-success-stories": {
    title: "95 Women-Led Businesses and Counting",
    excerpt: "Meet the women who turned a training program into a movement.",
    body: "When Fatima joined our Women Empowerment program in South Africa two years ago, she had no formal training and no capital. Today, she runs a tailoring business that employs 6 women in her township.\n\nFatima is one of 95 women who have launched or grown businesses through our program. Together, they generate income that flows back into their families, their communities, and their children's futures.\n\nOur Women Empowerment program offers vocational training, business mentorship, and access to microfinance for women who have been overlooked by traditional systems. We believe that when you invest in a woman, you invest in a community.",
    category: "Empowerment",
    image: "/images/blog-3.jpg",
    publishedAt: "2026-05-10",
    author: "Sacred Cipher Team",
  },
  "annual-report-2025": {
    title: "2025 Annual Impact Report Released",
    excerpt: "A full breakdown of everything we accomplished in 2025.",
    body: "2025 was the most impactful year in Sacred Cipher Mission's history. We crossed the 24,000 lives impacted milestone, expanded into 3 new countries, launched our Sustainable Futures program, and completed our 30th clean water well.\n\nOur annual report details every program, every dollar, and every life touched. We are committed to radical transparency — you deserve to know how your support is being used.\n\nHighlights from 2025:\n• 6,200 new lives reached\n• $2.3M raised in donations\n• 95 new women-led businesses\n• 8 new schools partnered\n• 3 new countries entered\n\nThank you for making this possible. 2026 will be even greater.",
    category: "Report",
    image: "/images/blog-4.jpg",
    publishedAt: "2026-05-01",
    author: "Jarie James",
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-0">
        <div
          className="w-full h-80 bg-cover bg-center bg-[#1a1a1a] relative"
          style={{ backgroundImage: `url('${post.image}')` }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
            <Badge variant="gold" className="mb-4 self-start">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-300 mt-4">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[#C9A84C]/20 flex flex-col sm:flex-row gap-4">
            <Button href="/blog" variant="outline-dark" withArrow>
              Back to Blog
            </Button>
            <Button href="/donate" variant="gold" withArrow>
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
