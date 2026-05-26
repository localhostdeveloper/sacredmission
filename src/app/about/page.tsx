import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DonateCta } from "@/components/sections/DonateCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sacred Cipher Mission — our story, our founder, and the values that drive our work across 15 countries.",
};

const values = [
  { title: "Faith", description: "We are grounded in purpose beyond ourselves, driven by a calling to serve." },
  { title: "Integrity", description: "We operate with transparency, accountability, and unwavering honesty." },
  { title: "Innovation", description: "We seek creative, sustainable solutions to the world's most pressing challenges." },
  { title: "Compassion", description: "Every life matters. We serve with empathy, dignity, and deep humanity." },
];

const team = [
  { name: "Jarie James", role: "Founder & CEO", image: "/images/ceo.jpg" },
  { name: "Team Member", role: "Program Director", image: "/images/team-1.jpg" },
  { name: "Team Member", role: "Impact Officer", image: "/images/team-2.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Who We Are</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6">
            FAITH.
            <br />
            <span className="text-gold">PURPOSE.</span>
            <br />
            IMPACT.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Sacred Cipher Mission is a global nonprofit organization dedicated to deciphering human
            potential and encoding hope in communities across the world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel dark>Our Mission</SectionLabel>
            <h2 className="text-3xl font-bold text-dark mb-6">Why We Exist</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We exist to uplift communities, unlock human potential, and create sustainable change
              through education, innovation, and compassion. We believe that every life holds a
              sacred code — a unique gift that, when unlocked, changes the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since our founding, we have touched over 24,560 lives across 15 countries, and we
              are only just beginning.
            </p>
          </div>
          <div>
            <SectionLabel dark>Our Vision</SectionLabel>
            <h2 className="text-3xl font-bold text-dark mb-6">Where We&apos;re Going</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A world where every individual — regardless of geography, circumstance, or background —
              has access to the tools, knowledge, and support needed to live a life of dignity,
              purpose, and impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision communities that are self-sustaining, empowered, and equipped to pass
              forward the blessings they have received.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="text-4xl font-bold text-white mb-12">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/20">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-8 ${i < 3 ? "border-r border-gold/20" : ""}`}
              >
                <h3 className="text-gold text-xl font-bold mb-4 tracking-wide">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section id="ceo" className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="h-96 bg-cover bg-center bg-[#1a1a1a]"
            style={{ backgroundImage: "url('/images/ceo.jpg')" }}
          />
          <div>
            <SectionLabel>Founder&apos;s Message</SectionLabel>
            <h2 className="text-4xl font-bold text-white mb-6">A Word from Our CEO</h2>
            <blockquote className="border-l-2 border-gold pl-6 mb-6">
              <p className="text-gray-300 text-lg italic leading-relaxed">
                &ldquo;We believe every life holds a sacred code. Our mission is to help the world remember.
                Every child educated, every family given clean water, every woman empowered —
                these are not just statistics. These are lives rewritten.&rdquo;
              </p>
            </blockquote>
            <p className="text-gold font-semibold">Jarie James</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Founder &amp; CEO, Sacred Cipher Mission</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel dark>The People</SectionLabel>
          <h2 className="text-4xl font-bold text-dark mb-12">MEET THE TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div
                  className="h-80 bg-cover bg-center bg-[#ccc] mb-4 overflow-hidden"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <h3 className="text-dark font-bold text-lg">{member.name}</h3>
                <p className="text-gold text-sm font-semibold tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
