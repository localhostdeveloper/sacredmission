import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart } from "lucide-react";

export function DonateCta() {
  return (
    <section className="bg-[#111111] py-20 border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <SectionLabel>Be Part of the Change</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Your support can unlock
              <br />
              countless possibilities.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Together, we can build stronger communities and create a legacy of hope.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button href="/donate" variant="gold" size="lg" withArrow>
              <Heart size={14} fill="currentColor" className="-ml-1" />
              Donate Now
            </Button>
            <Button href="/get-involved" variant="outline-gold" size="lg" withArrow>
              Other Ways to Give
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
