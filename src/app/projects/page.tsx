import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Droplets, Leaf, Heart } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { DonateCta } from "@/components/sections/DonateCta";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Sacred Cipher Mission's projects — education, clean water, sustainability, and women empowerment across 15 countries.",
};

const projects = [
  {
    icon: BookOpen,
    title: "Education For All",
    slug: "education-for-all",
    category: "Education",
    status: "Active",
    description:
      "Providing quality education and resources to underprivileged children and youth across Sub-Saharan Africa and Southeast Asia.",
    image: "/images/project-education.jpg",
    stats: [{ label: "Students", value: "1,250+" }, { label: "Schools", value: "12" }],
  },
  {
    icon: Droplets,
    title: "Clean Water Initiative",
    slug: "clean-water-initiative",
    category: "Health",
    status: "Active",
    description:
      "Delivering clean, safe drinking water to remote communities and improving long-term health outcomes.",
    image: "/images/project-water.jpg",
    stats: [{ label: "Wells Built", value: "30+" }, { label: "Families", value: "4,200" }],
  },
  {
    icon: Leaf,
    title: "Sustainable Futures",
    slug: "sustainable-futures",
    category: "Environment",
    status: "Active",
    description:
      "Empowering communities with sustainable farming, renewable energy, and environmental stewardship.",
    image: "/images/project-sustainable.jpg",
    stats: [{ label: "Farms", value: "120+" }, { label: "Tonnes CO₂", value: "450 saved" }],
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    slug: "women-empowerment",
    category: "Empowerment",
    status: "Active",
    description:
      "Equipping women with vocational skills, business mentorship, and access to microfinance opportunities.",
    image: "/images/project-women.jpg",
    stats: [{ label: "Women Trained", value: "800+" }, { label: "Businesses", value: "95" }],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What We Do</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6">
            OUR
            <br />
            <span className="text-[#C9A84C]">PROJECTS.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Every project is a promise — to communities, to generations, to the future.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(({ icon: Icon, title, slug, category, status, description, image, stats }) => (
              <Link key={slug} href={`/projects/${slug}`} className="group block border border-[#C9A84C]/20 overflow-hidden hover:border-[#C9A84C]/60 transition-colors duration-300">
                <div
                  className="h-56 bg-cover bg-center bg-[#2a2014] group-hover:scale-105 transition-transform duration-500 overflow-hidden"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="p-8 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-[#C9A84C]" />
                      <Badge variant="cream">{category}</Badge>
                    </div>
                    <span className="text-xs text-green-600 font-semibold tracking-wide uppercase">● {status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
                  <div className="flex gap-6 border-t border-gray-100 pt-4">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-[#C9A84C] font-bold text-lg">{s.value}</p>
                        <p className="text-gray-400 text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
