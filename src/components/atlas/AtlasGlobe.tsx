"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AtlasGlobeProps {
  className?: string;
}

export function AtlasGlobe({ className }: AtlasGlobeProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[#7C3AED]/20 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[#3B82F6]/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* Globe image with rotation */}
      <motion.div
        animate={prefersReduced ? {} : { rotate: 360 }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 60, repeat: Infinity, ease: "linear" }
        }
        className="relative z-10"
      >
        <Image
          src="/globe.webp"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full max-w-[600px] object-contain"
          priority
          role="presentation"
        />
      </motion.div>
    </div>
  );
}