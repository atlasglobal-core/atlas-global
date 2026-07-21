import { whyAtlasData } from "@/data/homepage";
import { Target, Box, Code, Rocket, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Box,
  Code,
  Rocket,
};

export function WhyAtlasSection() {
  return (
    <section
      id={whyAtlasData.id}
      className="border-t border-[rgba(148,163,184,0.14)] py-24"
      aria-labelledby="why-atlas-heading"
    >
      <div className="atlas-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left: Eyebrow + Headline */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#8B5CF6]">
              {whyAtlasData.eyebrow}
            </p>
            <h2
              id="why-atlas-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-3xl lg:text-4xl"
            >
              {whyAtlasData.headline.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < whyAtlasData.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>

          {/* Right: 4 propositions with vertical separators */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {whyAtlasData.propositions.map((prop, i) => {
              const Icon = iconMap[prop.icon] ?? Target;
              return (
                <div key={prop.title} className="relative flex flex-col">
                  {/* Vertical separator */}
                  {i > 0 && i < whyAtlasData.propositions.length && (
                    <div
                      className="absolute top-0 -left-3 hidden h-full w-px bg-[rgba(148,163,184,0.14)] sm:block lg:block"
                      aria-hidden="true"
                    />
                  )}

                  {/* Icon */}
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.14)] bg-[#101A2E]">
                    <Icon className="size-5 text-[#8B5CF6]" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-1.5 text-sm font-semibold text-[#F8FAFC]">
                    {prop.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7F8BA3]">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}