"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Brain,
  BarChart3,
  Briefcase,
  BookOpen,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { aiNativeData } from "@/data/homepage";
import { AtlasButton } from "@/components/atlas/AtlasButton";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Brain,
  BarChart3,
  Briefcase,
  BookOpen,
  Settings,
};

/* Position percentages for each node around the central AI circle */
const positionMap: Record<string, React.CSSProperties> = {
  "top-left": { top: "0%", left: "10%" },
  "top-right": { top: "0%", right: "10%" },
  right: { top: "45%", right: "0%" },
  "bottom-right": { bottom: "0%", right: "10%" },
  "bottom-left": { bottom: "0%", left: "10%" },
  left: { top: "45%", left: "0%" },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AINativeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id={aiNativeData.id}
      ref={sectionRef}
      className="border-t border-[rgba(148,163,184,0.14)] py-24"
      aria-labelledby="ai-heading"
    >
      <div className="atlas-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
              {aiNativeData.eyebrow}
            </p>
            <h2
              id="ai-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl"
            >
              {aiNativeData.headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#A8B1C2]">
              {aiNativeData.description}
            </p>
            <div className="mt-8">
              <AtlasButton variant="secondary" href={aiNativeData.cta.href}>
                {aiNativeData.cta.label}
              </AtlasButton>
            </div>
          </motion.div>

          {/* Right: AI Hub-Spoke diagram */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[420px]">
              {/* Connection lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 420 420"
                fill="none"
                aria-hidden="true"
              >
                {/* Lines from center (210,210) to each node */}
                <line x1="210" y1="210" x2="70" y2="70" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="210" y1="210" x2="350" y2="70" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="210" y1="210" x2="390" y2="200" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="210" y1="210" x2="350" y2="350" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="210" y1="210" x2="70" y2="350" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="210" y1="210" x2="30" y2="200" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Central AI circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Outer dashed ring */}
                <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-[rgba(139,92,246,0.4)] sm:size-32">
                  {/* Inner solid ring */}
                  <div
                    className="flex size-20 items-center justify-center rounded-full sm:size-24"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,92,246,0.3), rgba(59,130,246,0.1))",
                      boxShadow:
                        "0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(59,130,246,0.15)",
                    }}
                  >
                    <span className="text-lg font-bold text-[#F8FAFC] sm:text-xl">
                      {aiNativeData.centerLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Nodes */}
              {aiNativeData.nodes.map((node) => {
                const Icon = iconMap[node.icon] ?? Brain;
                const pos = positionMap[node.position];
                return (
                  <div
                    key={node.label}
                    className="absolute z-20 flex flex-col items-center gap-2"
                    style={pos}
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.14)] bg-[#0B1426]">
                      <Icon className="size-5 text-[#8B5CF6]" aria-hidden="true" />
                    </div>
                    <span className="hidden text-xs text-[#A8B1C2] sm:block whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}