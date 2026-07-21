"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ecosystemCards } from "@/data/homepage";
import { AtlasButton } from "@/components/atlas/AtlasButton";
import { AtlasEcosystemCard } from "@/components/atlas/AtlasEcosystemCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  function scrollToGrid() {
    document.getElementById("ecosystem-grid")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="ecossistema" ref={sectionRef} className="py-24">
      <div className="atlas-container">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#8B5CF6]">
            ECOSSISTEMA ATLAS
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
            Soluções que se conectam.
            <br />
            <span className="gradient-text">Plataformas que escalam.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A8B1C2]">
            Um ecossistema completo de produtos e serviços que trabalham em conjunto para acelerar o crescimento e a transformação digital.
          </p>
          <div className="mt-8">
            <AtlasButton variant="secondary" onClick={scrollToGrid}>
              Ver todo o ecossistema
            </AtlasButton>
          </div>
        </div>

        {/* Card Grid */}
        <div
          id="ecosystem-grid"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
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