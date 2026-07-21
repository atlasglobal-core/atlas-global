import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type AtlasLogoSize = "sm" | "md" | "lg";

interface AtlasLogoProps {
  size?: AtlasLogoSize;
  showTagline?: boolean;
  className?: string;
}

const sizeConfig: Record<AtlasLogoSize, { icon: number; text: string; tagline: string }> = {
  sm: { icon: 24, text: "text-base", tagline: "text-[10px]" },
  md: { icon: 32, text: "text-xl", tagline: "text-xs" },
  lg: { icon: 40, text: "text-2xl", tagline: "text-sm" },
};

export function AtlasLogo({ size = "md", showTagline = false, className }: AtlasLogoProps) {
  const cfg = sizeConfig[size];

  return (
    <div className={cn("flex items-center gap-3", className)} aria-label={siteConfig.name}>
      <svg
        width={cfg.icon}
        height={cfg.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="atlas-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          d="M20 4L36 36H28L24 28H16L12 36H4L20 4Z"
          fill="url(#atlas-logo-grad)"
          stroke="none"
        />
        <path
          d="M20 14L24 24H16L20 14Z"
          fill="#020611"
          stroke="none"
        />
      </svg>
      <div className="flex flex-col">
        <span className={cn("font-bold tracking-wider text-[#F8FAFC]", cfg.text)}>
          ATLAS GLOBAL
        </span>
        {showTagline && (
          <span className={cn("tracking-widest text-[#7F8BA3] font-light", cfg.tagline)}>
            Research • Architecture • Platforms
          </span>
        )}
      </div>
    </div>
  );
}