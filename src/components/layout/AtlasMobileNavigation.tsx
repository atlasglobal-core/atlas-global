"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { navLinks } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasLogo } from "@/components/atlas/AtlasLogo";

interface AtlasMobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export function AtlasMobileNavigation({ open, onClose }: AtlasMobileNavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const { openDialog } = useContactStore();

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  // Focus trap + ESC close
  useEffect(() => {
    if (!open || !navRef.current) return;

    const container = navRef.current;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    container.addEventListener("keydown", handleTab);
    document.addEventListener("keydown", handleEsc);
    return () => {
      container.removeEventListener("keydown", handleTab);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#020611]/98 backdrop-blur-sm lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div ref={navRef} className="flex h-full flex-col px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <AtlasLogo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-lg text-[#A8B1C2] transition-colors hover:bg-[#101A2E] hover:text-[#F8FAFC]"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mt-12 flex flex-col gap-1" aria-label="Navegação móvel">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-lg px-4 py-3 text-lg font-medium text-[#A8B1C2] transition-colors hover:bg-[#101A2E] hover:text-[#F8FAFC]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="mt-auto pb-8">
          <button
            type="button"
            onClick={() => {
              openDialog();
              onClose();
            }}
            className="w-full rounded-lg border border-[rgba(148,163,184,0.25)] px-6 py-3 text-base font-medium text-[#F8FAFC] transition-all hover:bg-white/5"
          >
            Falar com a Atlas
          </button>
        </div>
      </div>
    </div>
  );
}