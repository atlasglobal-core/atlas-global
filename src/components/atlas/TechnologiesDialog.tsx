"use client";

import { useEffect, useRef } from "react";
import { allTechnologies } from "@/data/homepage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TechnologiesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TechnologiesDialog({ open, onOpenChange }: TechnologiesDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[85vh] overflow-y-auto border-[rgba(148,163,184,0.14)] bg-[#0B1426] text-[#F8FAFC] sm:max-w-xl atlas-scrollbar"
        aria-describedby="tech-dialog-desc"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#F8FAFC]">
            Todas as Tecnologias
          </DialogTitle>
          <DialogDescription id="tech-dialog-desc" className="text-[#7F8BA3]">
            Tecnologias utilizadas e previstas na arquitetura Atlas.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 grid gap-6">
          {Object.entries(allTechnologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8B5CF6]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.14)] bg-[#020611] px-3 py-1.5 text-sm text-[#A8B1C2]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            ref={closeButtonRef}
            onClick={() => onOpenChange(false)}
            className="rounded-lg border border-[#374151] px-4 py-2 text-sm text-[#A8B1C2] transition-colors hover:border-[#8B5CF6] hover:text-[#F8FAFC]"
          >
            Fechar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}