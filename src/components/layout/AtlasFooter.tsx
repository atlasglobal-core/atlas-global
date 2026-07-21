"use client";

import { siteConfig } from "@/config/site";
import { footerData } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasLogo } from "@/components/atlas/AtlasLogo";
import { Github } from "lucide-react";

export function AtlasFooter() {
  const { openDialog } = useContactStore();

  function handleResourceClick(e: React.MouseEvent<HTMLAnchorElement>, action?: string) {
    if (action === "contact") {
      e.preventDefault();
      openDialog();
    }
  }

  return (
    <footer
      className="border-t border-[rgba(148,163,184,0.14)] bg-[#060B17]"
      role="contentinfo"
      id={footerData.id}
    >
      <div className="atlas-container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <AtlasLogo size="sm" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7F8BA3]">
              {footerData.description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-sm text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#A8B1C2]">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerData.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#A8B1C2]">
              Recursos
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerData.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleResourceClick(e, (link as { action?: string }).action)}
                    className="text-sm text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(148,163,184,0.14)] pt-8 sm:flex-row">
          <p className="text-xs text-[#7F8BA3]">{footerData.copyright}</p>
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
              aria-label="GitHub da Atlas Global"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}