"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasLogo } from "@/components/atlas/AtlasLogo";
import { AtlasMobileNavigation } from "./AtlasMobileNavigation";

export function AtlasNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDialog } = useContactStore();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
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
          className="atlas-container flex h-16 items-center justify-between lg:h-18"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <AtlasLogo size="sm" />

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#A8B1C2] transition-colors hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA button — hidden on mobile */}
            <button
              onClick={openDialog}
              className="hidden rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6D28D9] lg:inline-flex"
              type="button"
            >
              Falar com a Atlas
            </button>

            {/* Language selector */}
            <span
              className="flex size-8 items-center justify-center rounded-md border border-[rgba(148,163,184,0.14)] text-xs font-medium text-[#7F8BA3]"
              aria-label="Idioma: Português"
            >
              PT
            </span>

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