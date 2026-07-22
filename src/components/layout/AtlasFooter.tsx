"use client";

import { siteConfig } from "@/config/site";
import { footerData } from "@/data/homepage";
import { useContactStore } from "@/lib/contact-store";
import { AtlasLogo } from "@/components/atlas/AtlasLogo";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const socialIconMap: Record<string, LucideIcon> = {
  Linkedin,
  Github,
  Youtube,
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const allSocialIcons: Record<string, LucideIcon> = {
  ...socialIconMap,
  X: XIcon as unknown as LucideIcon,
};

export function AtlasFooter() {
  const { openDialog } = useContactStore();

  return (
    <footer
      className="border-t border-[rgba(148,163,184,0.14)] bg-[#060B17]"
      role="contentinfo"
      id={footerData.id}
    >
      <div className="atlas-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Column 1: Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <AtlasLogo size="sm" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7F8BA3]">
              {footerData.description}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {footerData.socials.map((social) => {
                const Icon = allSocialIcons[social.icon] ?? Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.14)] bg-[#101A2E] text-[#7F8BA3] transition-all hover:border-[rgba(148,163,184,0.3)] hover:text-[#F8FAFC]"
                    aria-label={social.label}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A8B1C2]">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
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

          {/* Column 3: Serviço */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A8B1C2]">
              Serviço
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerData.services.map((link) => (
                <li key={link.label}>
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

          {/* Column 4: Recursos */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A8B1C2]">
              Recursos
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerData.resources.map((link) => (
                <li key={link.label}>
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

          {/* Column 5: Contactos */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A8B1C2]">
              Contactos
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#7F8BA3]" aria-hidden="true" />
                <a
                  href={`mailto:${footerData.contacts.email}`}
                  className="text-sm text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
                >
                  {footerData.contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#7F8BA3]" aria-hidden="true" />
                <a
                  href={`tel:${footerData.contacts.phone.replace(/\s/g, "")}`}
                  className="text-sm text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
                >
                  {footerData.contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#7F8BA3]" aria-hidden="true" />
                <span className="text-sm text-[#7F8BA3]">
                  {footerData.contacts.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-[#7F8BA3]" aria-hidden="true" />
                <span className="text-sm text-[#7F8BA3]">
                  {footerData.contacts.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(148,163,184,0.14)] pt-8 sm:flex-row">
          <p className="text-xs text-[#7F8BA3]">{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            {footerData.legal.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="text-xs text-[#7F8BA3] transition-colors hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
                {i < footerData.legal.length - 1 && (
                  <span className="text-[#374151]" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}