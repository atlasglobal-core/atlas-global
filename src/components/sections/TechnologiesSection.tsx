"use client";

import { useState } from "react";
import { techBadges } from "@/data/homepage";
import { AtlasTechnologyBadge } from "@/components/atlas/AtlasTechnologyBadge";
import { AtlasButton } from "@/components/atlas/AtlasButton";
import { TechnologiesDialog } from "@/components/atlas/TechnologiesDialog";

export function TechnologiesSection() {
  const [techDialogOpen, setTechDialogOpen] = useState(false);

  return (
    <section id="tecnologias" className="py-24">
      <div className="atlas-container">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#8B5CF6]">
            TECNOLOGIAS QUE UTILIZAMOS
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
            As melhores tecnologias.
            <br />
            <span className="gradient-text">Para os melhores resultados.</span>
          </h2>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          {techBadges.map((badge) => (
            <AtlasTechnologyBadge key={badge.name} name={badge.name} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <AtlasButton
            variant="secondary"
            onClick={() => setTechDialogOpen(true)}
          >
            Ver todas as tecnologias
          </AtlasButton>
          <p className="mt-3 text-sm text-[#7F8BA3]">
            Tecnologias utilizadas e previstas na arquitetura Atlas.
          </p>
        </div>

        {/* Dialog */}
        <TechnologiesDialog
          open={techDialogOpen}
          onOpenChange={setTechDialogOpen}
        />
      </div>
    </section>
  );
}