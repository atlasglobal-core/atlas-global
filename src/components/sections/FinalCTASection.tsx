"use client";

import { Calendar, MessageCircle } from "lucide-react";
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
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
        }}
        aria-hidden="true"
      />

      <div className="atlas-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: headline + description */}
          <div className="flex flex-col justify-center lg:col-span-1">
            <h2
              id="final-cta-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
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
            className="group flex flex-col items-start rounded-xl bg-white/10 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Agendar Reunião"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20">
              <Calendar className="size-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {ctaData.meetingCard.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {ctaData.meetingCard.description}
            </p>
          </button>

          {/* Right: WhatsApp card */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="group flex flex-col items-start rounded-xl bg-white/10 p-6 text-left backdrop-blur-sm transition-all hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Falar no WhatsApp"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20">
              <MessageCircle className="size-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {ctaData.whatsappCard.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {ctaData.whatsappCard.description}
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}