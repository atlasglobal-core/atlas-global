"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Store,
  Globe,
  Cpu,
  CreditCard,
  Code,
  CloudCog,
  type LucideIcon,
} from "lucide-react";
import { servicesData } from "@/data/homepage";
import { AtlasButton } from "@/components/atlas/AtlasButton";

const iconMap: Record<string, LucideIcon> = {
  Store,
  Globe,
  Cpu,
  CreditCard,
  Code,
  CloudCog,
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

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id={servicesData.id}
      ref={sectionRef}
      className="border-t border-[rgba(148,163,184,0.14)] py-24"
      aria-labelledby="services-heading"
    >
      <div className="atlas-container">
        {/* Header row */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
              {servicesData.eyebrow}
            </p>
            <h2
              id="services-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl"
            >
              {servicesData.headline.map((line, i) => (
                <span
                  key={i}
                  className={
                    i >= servicesData.headlineGradientStart &&
                    i <= servicesData.headlineGradientEnd
                      ? " gradient-text"
                      : " text-[#F8FAFC]"
                  }
                >
                  {line}
                  {i < servicesData.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <AtlasButton
            variant="secondary"
            href={servicesData.cta.href}
            className="shrink-0"
          >
            {servicesData.cta.label}
          </AtlasButton>
        </div>

        {/* Services grid — 3 columns on lg, 2 on sm */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Store;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                className="group flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <Icon
                      className="size-5"
                      style={{ color: item.accent }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#7F8BA3] pl-[52px]">
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
