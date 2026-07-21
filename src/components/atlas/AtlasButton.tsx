"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type AtlasButtonVariant = "primary" | "secondary";

interface AtlasButtonProps {
  variant?: AtlasButtonVariant;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  noIcon?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function AtlasButton({
  variant = "primary",
  children,
  href,
  onClick,
  className,
  icon,
  noIcon = false,
  type = "button",
  disabled = false,
}: AtlasButtonProps) {
  const defaultIcon = <ArrowRight className="size-4" aria-hidden="true" />;
  const trailingIcon = noIcon ? null : (icon ?? defaultIcon);

  const baseClasses =
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-250 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses: Record<AtlasButtonVariant, string> = {
    primary:
      "gradient-bg text-white hover:opacity-90 active:opacity-80 px-5 py-2.5 text-sm",
    secondary:
      "border border-[#374151] text-[#A8B1C2] hover:border-[#8B5CF6] hover:text-[#F8FAFC] px-5 py-2.5 text-sm",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {trailingIcon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(classes, "group")} aria-label={String(children)}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(classes, "group")}
      disabled={disabled}
      aria-label={String(children)}
    >
      {content}
    </button>
  );
}