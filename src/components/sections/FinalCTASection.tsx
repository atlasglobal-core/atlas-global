"use client";

import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { ctaData } from "@/data/homepage";
import { siteConfig } from "@/config/site";
import { useContactStore } from "@/lib/contact-store";

export function FinalCTASection() {
  const { openDialog } = useContactStore();

  function handleBooking() {
    if (siteConfig.bookingUrl) {
      window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
    } else {
      openDialog();
    }
  }

  function handleWhatsApp() {
    if (siteConfig.whatsappUrl) {
      window.open(siteConfig.whatsappUrl, "_blank", "noopener,noreferrer");
    } else {
      openDialog();
    }
  }

  return (
    <section
      id={ctaData.id}
      className="relative overflow-hidden py-24"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle purple glow behind */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="atlas-container relative z-10">
        <div
          className="mx-auto max-w-5xl rounded-2xl p-8 sm:p-12 lg:p-16"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
            boxShadow: "0 0 80px rgba(124,58,237,0.3)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: headline + description */}
            <div className="flex flex-col justify-center lg:col-span-1">
              <h2
                id="final-cta-heading"
                className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2rem]"
              >
                {ctaData.headline.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < ctaData.headline.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80">
                {ctaData.description}
              </p>
            </div>

            {/* Center: Meeting card */}
            <button
              type="button"
              onClick={handleBooking}
              className="group flex items-center gap-4 rounded-xl bg-white/10 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Agendar Reunião"
            >
              <div className="mb-0 flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <Calendar className="size-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {ctaData.meetingCard.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {ctaData.meetingCard.description}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-white/60 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>

            {/* Right: WhatsApp card */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="group flex items-center gap-4 rounded-xl bg-white/10 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Falar no WhatsApp"
            >
              <div className="mb-0 flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <MessageCircle className="size-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {ctaData.whatsappCard.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {ctaData.whatsappCard.description}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-white/60 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}