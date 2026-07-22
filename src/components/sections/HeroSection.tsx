"use client";

import { MessageCircle } from "lucide-react";
import { heroData } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasButton } from "@/components/atlas/AtlasButton";
import { AtlasHeroCube } from "@/components/atlas/AtlasHeroCube";

export function HeroSection() {
  const { openDialog } = useContactStore();

  return (
    <section
      id={heroData.id}
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-[72px]"
      aria-labelledby="hero-heading"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/3 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-[#7C3AED]/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-1/4 h-[500px] w-[600px] rounded-full bg-[#3B82F6]/8 blur-[100px]"
        aria-hidden="true"
      />

      <div className="atlas-container relative flex min-h-[calc(100vh-4rem)] flex-col items-center lg:min-h-[calc(100vh-72px)] lg:flex-row lg:items-center lg:gap-16">
        {/* Text column */}
        <div className="relative z-10 w-full pt-12 lg:pt-0 lg:w-[45%]">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            {heroData.eyebrow}
          </p>

          {/* Headline */}
          <h1 id="hero-heading" className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {heroData.headline.map((line, i) => (
              <span
                key={i}
                className={
                  i >= heroData.headlineGradientStart && i <= heroData.headlineGradientEnd
                    ? " gradient-text"
                    : " text-[#F8FAFC]"
                }
              >
                {line}
                {i < heroData.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-[1.7] text-[#A8B1C2] sm:text-lg">
            {heroData.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <AtlasButton variant="primary" href={heroData.primaryCTA.href}>
              {heroData.primaryCTA.label}
            </AtlasButton>
            <AtlasButton variant="secondary" onClick={openDialog} icon={<MessageCircle className="size-4" aria-hidden="true" />}>
              {heroData.secondaryCTA.label}
            </AtlasButton>
          </div>
        </div>

        {/* 3D Cube column */}
        <div className="relative z-0 mt-4 w-full lg:mt-0 lg:w-[55%]">
          <AtlasHeroCube />
        </div>
      </div>
    </section>
  );
}