"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasLogo } from "@/components/atlas/AtlasLogo";
import { AtlasMobileNavigation } from "./AtlasMobileNavigation";

export function AtlasNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { openDialog } = useContactStore();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[rgba(148,163,184,0.14)] bg-[#020611]/90 backdrop-blur-md"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="atlas-container flex h-16 items-center justify-between lg:h-[72px]"
          aria-label="Navegação principal"
        >
          {/* Logo + Tagline */}
          <AtlasLogo size="sm" showTagline />

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-7 lg:flex" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = sectionId === activeSection;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#F8FAFC]"
                        : "text-[#7F8BA3] hover:text-[#F8FAFC]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#3B82F6]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA button — outlined, hidden on mobile */}
            <button
              onClick={openDialog}
              className="hidden items-center gap-2 rounded-lg border border-[rgba(148,163,184,0.25)] px-4 py-2 text-sm font-medium text-[#F8FAFC] transition-all hover:border-[rgba(148,163,184,0.5)] hover:bg-white/5 lg:inline-flex"
              type="button"
            >
              Falar com a Atlas
            </button>

            {/* Language selector */}
            <button
              type="button"
              className="flex items-center gap-1 rounded-md border border-[rgba(148,163,184,0.14)] px-2 py-1.5 text-xs font-medium text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
              aria-label="Idioma: Português"
            >
              PT
              <ChevronDown className="size-3" aria-hidden="true" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex size-10 items-center justify-center rounded-lg text-[#A8B1C2] transition-colors hover:bg-[#101A2E] hover:text-[#F8FAFC] lg:hidden"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AtlasMobileNavigation open={mobileOpen} onClose={closeMobile} />
    </>
  );
}