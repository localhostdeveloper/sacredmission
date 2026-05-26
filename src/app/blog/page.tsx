import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest news, stories, and updates from Sacred Cipher Mission.",
};

const posts = [
  {
    slug: "transforming-communities-through-education",
    title: "Transforming Communities Through Education",
    excerpt: "How our Education For All program has changed the trajectory of over 1,250 young lives across Africa and Asia.",
    category: "Education",
    image: "/images/blog-1.jpg",
    publishedAt: "2026-05-20",
    author: "Jarie James",
  },
  {
    slug: "clean-water-milestone-30-wells",
    title: "Milestone Reached: 30 Clean Water Wells Completed",
    excerpt: "We have officially drilled our 30th well, bringing safe, clean water to communities that have waited generations for this moment.",
    category: "Health",
    image: "/images/blog-2.jpg",
    publishedAt: "2026-05-15",
    author: "Sacred Cipher Team",
  },
  {
    slug: "women-empowerment-success-stories",
    title: "95 Women-Led Businesses and Counting",
    excerpt: "Meet the women who turned a training program into a movement — and how their businesses are reshaping their communities.",
    category: "Empowerment",
    image: "/images/blog-3.jpg",
    publishedAt: "2026-05-10",
    author: "Sacred Cipher Team",
  },
  {
    slug: "annual-report-2025",
    title: "2025 Annual Impact Report Released",
    excerpt: "A full breakdown of everything we accomplished in 2025 — by the numbers, by the stories, and by the lives changed.",
    category: "Report",
    image: "/images/blog-4.jpg",
    publishedAt: "2026-05-01",
    author: "Jarie James",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>News & Stories</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none">
            THE
            <br />
            <span className="text-[#C9A84C]">BLOG.</span>
          </h1>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#C9A84C]/20 overflow-hidden hover:border-[#C9A84C]/60 transition-colors">
              <div
                className="h-72 lg:h-auto bg-cover bg-center bg-[#ccc] group-hover:scale-105 transition-transform duration-500 overflow-hidden"
                style={{ backgroundImage: `url('${featured.image}')` }}
              />
              <div className="p-10 bg-white flex flex-col justify-center">
                <Badge variant="cream" className="mb-4 self-start">{featured.category}</Badge>
                <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4 leading-tight group-hover:text-[#C9A84C] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{formatDate(featured.publishedAt)}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border border-[#C9A84C]/20 overflow-hidden hover:border-[#C9A84C]/60 transition-colors">
                <div
                  className="h-48 bg-cover bg-center bg-[#ccc] overflow-hidden"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="p-6 bg-white">
                  <Badge variant="cream" className="mb-3 self-start">{post.category}</Badge>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2 group-hover:text-[#C9A84C] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="text-gray-400 text-xs">{formatDate(post.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
