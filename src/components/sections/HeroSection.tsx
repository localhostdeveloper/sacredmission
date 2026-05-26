import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          opacity: 0.35,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

      {/* Side actions */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col z-10 hidden lg:flex">
        {[
          { icon: "💝", label: "Donate" },
          { icon: "♡", label: "Support" },
          { icon: "↗", label: "Share" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="w-12 h-12 bg-[#111] border-l border-t border-b border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0a0a] cursor-pointer transition-all duration-200"
            title={label}
          >
            <span className="text-sm">{icon}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <SectionLabel>Faith. Purpose. Impact.</SectionLabel>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8">
          <span className="text-white block">WE DECIPHER</span>
          <span className="text-[#C9A84C] block">POTENTIAL.</span>
          <span className="text-white block">WE ENCODE HOPE.</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Sacred Cipher Mission exists to uplift communities, unlock human potential,
          and create sustainable change through education, innovation, and compassion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/about" variant="outline-gold" size="lg" withArrow>
            Our Mission
          </Button>
          <Button href="/about#story" variant="outline-gold" size="lg" withPlayIcon>
            Watch Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
