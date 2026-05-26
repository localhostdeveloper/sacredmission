import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CeoSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <SectionLabel>The Heart Behind the Mission</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A MESSAGE FROM
              <br />
              OUR CEO
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              At Sacred Cipher Mission, we believe in the power of collective purpose.
              Every act of kindness, every donation, and every partnership helps us rewrite
              the future for generations to come.
            </p>
            <Button href="/about#ceo" variant="outline-gold" withArrow>
              Meet Our CEO
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div
              className="w-full h-96 lg:h-[500px] bg-cover bg-center bg-[#1a1a1a] relative"
              style={{ backgroundImage: "url('/images/ceo.jpg')" }}
            >
              {/* Decorative cipher overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-64 h-64 rounded-full border border-[#C9A84C] flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-[#C9A84C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
