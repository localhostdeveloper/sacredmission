import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DonateCta } from "@/components/sections/DonateCta";

const projects: Record<string, {
  title: string;
  category: string;
  description: string;
  body: string;
  image: string;
  stats: { label: string; value: string }[];
}> = {
  "education-for-all": {
    title: "Education For All",
    category: "Education",
    description: "Providing quality education and resources to underprivileged children and youth.",
    body: "Our Education For All program has reached over 1,250 students across 12 schools in Sub-Saharan Africa and Southeast Asia. We provide school supplies, trained teachers, and scholarship opportunities to children who would otherwise have no access to quality education.",
    image: "/images/project-education.jpg",
    stats: [{ label: "Students", value: "1,250+" }, { label: "Schools", value: "12" }, { label: "Countries", value: "5" }],
  },
  "clean-water-initiative": {
    title: "Clean Water Initiative",
    category: "Health",
    description: "Delivering clean, safe drinking water to communities and improving health outcomes.",
    body: "Access to clean water is a fundamental human right. Through our Clean Water Initiative, we have constructed over 30 wells and water purification systems serving more than 4,200 families. Communities that once walked 5+ miles for water now have safe water within reach.",
    image: "/images/project-water.jpg",
    stats: [{ label: "Wells Built", value: "30+" }, { label: "Families Served", value: "4,200" }, { label: "Countries", value: "7" }],
  },
  "sustainable-futures": {
    title: "Sustainable Futures",
    category: "Environment",
    description: "Empowering communities with sustainable solutions for a greener tomorrow.",
    body: "Sustainable Futures equips communities with regenerative farming techniques, solar energy access, and environmental education. Our programs have supported over 120 farms and helped communities reduce their carbon footprint by an estimated 450 tonnes.",
    image: "/images/project-sustainable.jpg",
    stats: [{ label: "Farms Supported", value: "120+" }, { label: "CO₂ Saved", value: "450T" }, { label: "Countries", value: "4" }],
  },
  "women-empowerment": {
    title: "Women Empowerment",
    category: "Empowerment",
    description: "Equipping women with skills, mentorship, and opportunities to thrive.",
    body: "Through vocational training, business mentorship, and microfinance access, our Women Empowerment program has trained over 800 women and helped 95 start or grow their own businesses. When a woman is empowered, her entire community rises.",
    image: "/images/project-women.jpg",
    stats: [{ label: "Women Trained", value: "800+" }, { label: "Businesses Launched", value: "95" }, { label: "Countries", value: "6" }],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <section className="bg-[#0a0a0a] pt-36 pb-0">
        <div
          className="w-full h-96 bg-cover bg-center bg-[#1a1a1a] relative"
          style={{ backgroundImage: `url('${project.image}')` }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
            <SectionLabel>{project.category}</SectionLabel>
            <h1 className="text-5xl font-bold text-white">{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.body}</p>
            <Button href="/donate" variant="gold" withArrow>Support This Project</Button>
          </div>
          <div className="space-y-6">
            {project.stats.map((s) => (
              <div key={s.label} className="border border-[#C9A84C]/30 p-6">
                <p className="text-4xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-[#0a0a0a] font-semibold text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
