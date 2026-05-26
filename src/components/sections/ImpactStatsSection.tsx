import { Users, GraduationCap, Heart, Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const stats = [
  {
    icon: Users,
    value: "24,560+",
    label: "Lives Impacted",
    sub: "Across 15 Countries",
  },
  {
    icon: GraduationCap,
    value: "1,250+",
    label: "Students Educated",
    sub: "Through Our Programs",
  },
  {
    icon: Heart,
    value: "85+",
    label: "Community Projects",
    sub: "Completed",
  },
  {
    icon: Globe,
    value: "15",
    label: "Countries Reached",
    sub: "And Growing",
  },
];

export function ImpactStatsSection() {
  return (
    <section className="section-cream py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel dark>Our Impact</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
              TRANSFORMING LIVES.
              <br />
              BUILDING LEGACIES.
            </h2>
          </div>
          <Button href="/impact" variant="outline-dark" withArrow>
            View Our Impact
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#C9A84C]/30">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div
              key={label}
              className={`p-8 flex flex-col items-start gap-4 ${i < 3 ? "border-r border-[#C9A84C]/30" : ""} ${i >= 2 ? "border-t border-t-[#C9A84C]/30 lg:border-t-0" : ""}`}
            >
              <Icon size={32} className="text-[#C9A84C]" strokeWidth={1.5} />
              <div>
                <p className="text-4xl font-bold text-[#C9A84C] leading-none mb-1">{value}</p>
                <p className="text-[#0a0a0a] font-semibold text-sm tracking-wide">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
