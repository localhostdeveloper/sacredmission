import type { Metadata } from "next";
import { Heart, Users, Handshake, Building2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Sacred Cipher Mission — donate, volunteer, partner, or support our work in communities across 15 countries.",
};

const ways = [
  {
    id: "donate",
    icon: Heart,
    title: "Donate",
    description:
      "Your financial gift directly funds education, clean water, community projects, and women empowerment programs. Every dollar deciphers potential.",
    cta: "Donate Now",
    href: "/donate",
    variant: "gold" as const,
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer",
    description:
      "Share your time and skills on the ground or remotely. We have opportunities for educators, healthcare workers, engineers, and more.",
    cta: "Apply to Volunteer",
    href: "/contact?subject=volunteer",
    variant: "outline-gold" as const,
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Non-profits, faith organizations, and community groups — partner with us to amplify your impact and reach more communities together.",
    cta: "Explore Partnerships",
    href: "/contact?subject=partner",
    variant: "outline-gold" as const,
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Giving",
    description:
      "Align your company's CSR goals with real-world impact. We offer tailored corporate giving programs, volunteer days, and co-branded campaigns.",
    cta: "Talk to Us",
    href: "/contact?subject=corporate",
    variant: "outline-gold" as const,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Join the Movement</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6">
            GET
            <br />
            <span className="text-[#C9A84C]">INVOLVED.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            There are many ways to make a difference. Find the one that fits your calling.
          </p>
        </div>
      </section>

      {/* Ways to give */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map(({ id, icon: Icon, title, description, cta, href, variant }) => (
              <div key={id} id={id} className="border border-[#C9A84C]/30 p-10">
                <Icon size={40} className="text-[#C9A84C] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{description}</p>
                <Button href={href} variant={variant} withArrow>
                  {cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel className="justify-center">Stay Connected</SectionLabel>
          <h2 className="text-4xl font-bold text-white mb-4">JOIN OUR NEWSLETTER</h2>
          <p className="text-gray-400 text-sm mb-8">
            Get updates on our projects, impact stories, and ways to give — delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#0a0a0a] border border-[#C9A84C]/30 text-white px-5 py-3 text-sm focus:outline-none focus:border-[#C9A84C] placeholder-gray-500"
            />
            <Button type="submit" variant="gold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
