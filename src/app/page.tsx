import { AtlasNavbar } from "@/components/layout/AtlasNavbar";
import { AtlasFooter } from "@/components/layout/AtlasFooter";
import { AtlasContactDialog } from "@/components/atlas/AtlasContactDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechnologyTrustSection } from "@/components/sections/TechnologyTrustSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { WhyAtlasSection } from "@/components/sections/WhyAtlasSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <AtlasNavbar />
      <main>
        <HeroSection />
        <TechnologyTrustSection />
        <EcosystemSection />
        <WhyAtlasSection />
        <TechnologiesSection />
        <FinalCTASection />
      </main>
      <AtlasFooter />
      <AtlasContactDialog />
    </>
  );
}
