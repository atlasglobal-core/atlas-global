"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { EcosystemAccent } from "@/data/homepage";
import {
  Layers,
  Compass,
  Brain,
  Wallet,
  Cloud,
  FlaskConical,
  BookOpen,
  Network,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Compass,
  Brain,
  Wallet,
  Cloud,
  FlaskConical,
  BookOpen,
  Network,
};

const accentColorMap: Record<EcosystemAccent, string> = {
  blue: "#3B82F6",
  violet: "#8B5CF6",
  green: "#22C55E",
  orange: "#F97316",
  cyan: "#38BDF8",
  purple: "#A855F7",
  magenta: "#EC4899",
  pink: "#F472B6",
};

interface AtlasEcosystemCardProps {
  title: string;
  description: string;
  accent: EcosystemAccent;
  icon: string;
  className?: string;
}

export function AtlasEcosystemCard({
  title,
  description,
  accent,
  icon,
  className,
}: AtlasEcosystemCardProps) {
  const IconComponent = iconMap[icon] ?? Layers;
  const accentColor = accentColorMap[accent];

  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-[rgba(148,163,184,0.14)] bg-[#0B1426] p-6 transition-colors duration-200 hover:border-[rgba(148,163,184,0.28)]",
        className
      )}
    >
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-xl"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="mb-4 flex size-10 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        <IconComponent
          className="size-5"
          style={{ color: accentColor }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-[#F8FAFC]">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-[#7F8BA3]">{description}</p>

      {/* Arrow */}
      <div className="mt-4 flex justify-end">
        <ArrowUpRight
          className="size-5 text-[#7F8BA3] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: accentColor }}
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}