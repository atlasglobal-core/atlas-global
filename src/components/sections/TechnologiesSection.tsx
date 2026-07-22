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
        {/* Header with right-aligned button */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
              TECNOLOGIAS QUE UTILIZAMOS
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
              Ferramentas modernas para{" "}
              <span className="gradient-text">soluções de próxima geração.</span>
            </h2>
          </div>
          <AtlasButton
            variant="secondary"
            onClick={() => setTechDialogOpen(true)}
            className="shrink-0"
          >
            Ver todas as tecnologias
          </AtlasButton>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          {techBadges.map((badge) => (
            <AtlasTechnologyBadge key={badge.name} name={badge.name} />
          ))}
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