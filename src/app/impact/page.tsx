import type { Metadata } from "next";
import { Users, GraduationCap, Heart, Globe, Droplets, Building } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DonateCta } from "@/components/sections/DonateCta";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the measurable change Sacred Cipher Mission has created — 24,560+ lives impacted across 15 countries.",
};

const stats = [
  { icon: Users, value: "24,560+", label: "Lives Impacted", sub: "Across 15 Countries" },
  { icon: GraduationCap, value: "1,250+", label: "Students Educated", sub: "Through Our Programs" },
  { icon: Heart, value: "85+", label: "Community Projects", sub: "Completed" },
  { icon: Globe, value: "15", label: "Countries Reached", sub: "And Growing" },
  { icon: Droplets, value: "30+", label: "Clean Water Wells", sub: "Constructed" },
  { icon: Building, value: "12", label: "Schools Built", sub: "Or Renovated" },
];

const stories = [
  {
    quote: "Before Sacred Cipher Mission came to our village, my children had no school to attend. Now my daughter dreams of becoming a doctor.",
    name: "Amara Diallo",
    location: "Senegal",
    project: "Education For All",
  },
  {
    quote: "The clean water well changed everything. We no longer walk 5 miles to collect water. Our children are healthier, and so is our hope.",
    name: "Emmanuel Osei",
    location: "Ghana",
    project: "Clean Water Initiative",
  },
  {
    quote: "The skills program gave me the tools to start my own business. I now employ 6 women in my community.",
    name: "Fatima Nkosi",
    location: "South Africa",
    project: "Women Empowerment",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Our Impact</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6">
            TRANSFORMING
            <br />
            <span className="text-[#C9A84C]">LIVES.</span>
            <br />
            BUILDING LEGACIES.
          </h1>
        </div>
      </section>

      {/* Stats grid */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border border-[#C9A84C]/30">
            {stats.map(({ icon: Icon, value, label, sub }, i) => (
              <div
                key={label}
                className={`p-8 flex flex-col gap-4 border-[#C9A84C]/30
                  ${i % 3 !== 2 ? "border-r" : ""}
                  ${i >= 3 ? "border-t" : ""}
                `}
              >
                <Icon size={32} className="text-[#C9A84C]" strokeWidth={1.5} />
                <div>
                  <p className="text-4xl font-bold text-[#C9A84C] leading-none mb-1">{value}</p>
                  <p className="text-[#0a0a0a] font-semibold text-sm">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stories */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Real Lives, Real Change</SectionLabel>
          <h2 className="text-4xl font-bold text-white mb-12">STORIES OF IMPACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div key={story.name} className="border border-[#C9A84C]/20 p-8">
                <span className="text-[#C9A84C] text-4xl font-serif">&ldquo;</span>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 -mt-2">{story.quote}</p>
                <div className="border-t border-[#C9A84C]/20 pt-4">
                  <p className="text-white font-semibold text-sm">{story.name}</p>
                  <p className="text-[#C9A84C] text-xs tracking-wide">{story.location}</p>
                  <p className="text-gray-500 text-xs mt-1">{story.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
