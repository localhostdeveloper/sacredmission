import Link from "next/link";
import { BookOpen, Droplets, Leaf, Heart } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    icon: BookOpen,
    category: "education",
    title: "Education For All",
    description:
      "Providing quality education and resources to underprivileged children and youth.",
    href: "/projects/education-for-all",
    image: "/images/project-education.jpg",
  },
  {
    icon: Droplets,
    category: "water",
    title: "Clean Water Initiative",
    description:
      "Delivering clean, safe drinking water to communities and improving health outcomes.",
    href: "/projects/clean-water-initiative",
    image: "/images/project-water.jpg",
  },
  {
    icon: Leaf,
    category: "environment",
    title: "Sustainable Futures",
    description:
      "Empowering communities with sustainable solutions for a greener tomorrow.",
    href: "/projects/sustainable-futures",
    image: "/images/project-sustainable.jpg",
  },
  {
    icon: Heart,
    category: "women",
    title: "Women Empowerment",
    description:
      "Equipping women with skills, mentorship, and opportunities to thrive.",
    href: "/projects/women-empowerment",
    image: "/images/project-women.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-[#F5F0E8] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <SectionLabel dark>Our Projects</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
              BUILDING A BETTER
              <br />
              TOMORROW, TOGETHER.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:text-right">
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm lg:ml-auto">
              From education and healthcare to innovation and empowerment, our projects
              are designed to create lasting change in communities that need it most.
            </p>
            <div className="lg:flex lg:justify-end">
              <Button href="/projects" variant="outline-dark" withArrow>
                Explore All Projects
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {projects.map(({ icon: Icon, title, description, href, image, category }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden bg-[#2a2014] block"
            >
              {/* Background */}
              <div
                className="h-64 bg-cover bg-center bg-[#2a2014] transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="absolute inset-0 bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/30 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className="text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">
                    {title}
                  </span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">{description}</p>
                <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
