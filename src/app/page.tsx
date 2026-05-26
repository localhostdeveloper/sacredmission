import { HeroSection } from "@/components/sections/HeroSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ImpactStatsSection } from "@/components/sections/ImpactStatsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CeoSection } from "@/components/sections/CeoSection";
import { DonateCta } from "@/components/sections/DonateCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <ImpactStatsSection />
      <ProjectsSection />
      <CeoSection />
      <DonateCta />
    </>
  );
}
