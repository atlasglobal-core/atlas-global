import { AtlasNavbar } from "@/components/layout/AtlasNavbar";
import { AtlasFooter } from "@/components/layout/AtlasFooter";
import { AtlasContactDialog } from "@/components/atlas/AtlasContactDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechnologyTrustSection } from "@/components/sections/TechnologyTrustSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyAtlasSection } from "@/components/sections/WhyAtlasSection";
import { AINativeSection } from "@/components/sections/AINativeSection";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <AtlasNavbar />
      <main>
        <HeroSection />
        <TechnologyTrustSection />
        <EcosystemSection />
        <ServicesSection />
        <TechnologiesSection />
        <StatsSection />
        <WhyAtlasSection />
        <AINativeSection />
        <DevelopersSection />
        <FinalCTASection />
      </main>
      <AtlasFooter />
      <AtlasContactDialog />
    </>
  );
}
