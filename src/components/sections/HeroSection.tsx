"use client";

import { heroData } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasButton } from "@/components/atlas/AtlasButton";
import { AtlasGlobe } from "@/components/atlas/AtlasGlobe";

export function HeroSection() {
  const { openDialog } = useContactStore();

  return (
    <section
      id={heroData.id}
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-18"
      aria-labelledby="hero-heading"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-[#7C3AED]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="atlas-container relative flex min-h-[calc(100vh-4rem)] flex-col items-center lg:min-h-[calc(100vh-4.5rem)] lg:flex-row lg:items-center lg:gap-12">
        {/* Text column */}
        <div className="relative z-10 w-full lg:w-[45%]">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-[#8B5CF6]">
            {heroData.eyebrow}
          </p>

          {/* Headline */}
          <h1 id="hero-heading" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {heroData.headline.map((line, i) => (
              <span key={i} className={i === 1 ? " gradient-text" : " text-[#F8FAFC]"}>
                {line}
                {i < heroData.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#A8B1C2] sm:text-lg">
            {heroData.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <AtlasButton variant="primary" href={heroData.primaryCTA.href}>
              {heroData.primaryCTA.label}
            </AtlasButton>
            <AtlasButton variant="secondary" onClick={openDialog}>
              {heroData.secondaryCTA.label}
            </AtlasButton>
          </div>
        </div>

        {/* Globe column */}
        <div className="relative z-0 mt-12 w-full lg:mt-0 lg:w-[55%]">
          <AtlasGlobe className="lg:relative" />
          {/* Mobile: reduced opacity */}
          <div className="pointer-events-none absolute inset-0 bg-[#020611]/40 lg:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}