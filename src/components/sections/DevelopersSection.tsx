"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Code,
  Package,
  Github,
  type LucideIcon,
} from "lucide-react";
import { developersData } from "@/data/homepage";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Code,
  Package,
  Github,
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

export function DevelopersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id={developersData.id}
      ref={sectionRef}
      className="border-t border-[rgba(148,163,184,0.14)] py-24"
      aria-labelledby="developers-heading"
    >
      <div className="atlas-container">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            {developersData.eyebrow}
          </p>
          <h2
            id="developers-heading"
            className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl"
          >
            {developersData.headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < developersData.headline.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#A8B1C2]">
            {developersData.description}
          </p>
        </div>

        {/* Developer tools grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {developersData.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                className="group relative flex flex-col rounded-xl border border-[rgba(148,163,184,0.14)] bg-[#0B1426] p-6 transition-colors duration-200 hover:border-[rgba(148,163,184,0.28)]"
              >
                {/* Icon */}
                <div
                  className="mb-4 flex size-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${item.accent}15` }}
                >
                  <Icon
                    className="size-5"
                    style={{ color: item.accent }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-[#F8FAFC]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7F8BA3]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}