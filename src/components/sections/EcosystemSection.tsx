"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ecosystemCards } from "@/data/homepage";
import { AtlasEcosystemCard } from "@/components/atlas/AtlasEcosystemCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="ecossistema" ref={sectionRef} className="py-24">
      <div className="atlas-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            O ECOSSISTEMA ATLAS
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
            Um ecossistema completo para{" "}
            <span className="gradient-text">criar, operar e escalar</span> o futuro.
          </h2>
        </div>

        {/* Card Grid — 3 cols on md, 3 cols on lg for 3 rows of 3 */}
        <div id="ecosystem-grid" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <AtlasEcosystemCard
                title={card.title}
                description={card.description}
                accent={card.accent}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}