"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FlaskConical,
  Box,
  Rocket,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { whyAtlasData } from "@/data/homepage";

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Box,
  Rocket,
  Puzzle,
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function WhyAtlasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id={whyAtlasData.id}
      ref={sectionRef}
      className="border-t border-[rgba(148,163,184,0.14)] py-24"
      aria-labelledby="why-atlas-heading"
    >
      <div className="atlas-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            {whyAtlasData.eyebrow}
          </p>
          <h2
            id="why-atlas-heading"
            className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl"
          >
            {whyAtlasData.headline}
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyAtlasData.propositions.map((prop, i) => {
            const Icon = iconMap[prop.icon] ?? FlaskConical;
            return (
              <motion.div
                key={prop.title}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className="mb-4 flex size-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${prop.accent}15`,
                  }}
                >
                  <Icon
                    className="size-7"
                    style={{ color: prop.accent }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-[#F8FAFC]">
                  {prop.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7F8BA3]">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}