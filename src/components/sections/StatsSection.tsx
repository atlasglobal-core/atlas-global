"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Globe, Users, Code, type LucideIcon } from "lucide-react";
import { statsData } from "@/data/homepage";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Globe,
  Users,
  Code,
};

const accentMap: Record<string, string> = {
  Rocket: "#A855F7",
  Globe: "#38BDF8",
  Users: "#8B5CF6",
  Code: "#7C3AED",
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id={statsData.id}
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      aria-labelledby="stats-heading"
    >
      {/* Subtle purple radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="atlas-container relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            {statsData.eyebrow}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.items.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Rocket;
            const color = accentMap[stat.icon] ?? "#8B5CF6";
            return (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className="mb-4 flex size-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon
                    className="size-6"
                    style={{ color }}
                    aria-hidden="true"
                  />
                </div>

                {/* Number */}
                <span
                  className="text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{
                    background: `linear-gradient(135deg, ${color}, #3B82F6)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <span className="mt-2 text-sm text-[#7F8BA3]">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}