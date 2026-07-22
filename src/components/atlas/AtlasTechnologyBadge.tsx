import { cn } from "@/lib/utils";

interface AtlasTechnologyBadgeProps {
  name: string;
  className?: string;
}

export function AtlasTechnologyBadge({ name, className }: AtlasTechnologyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] bg-[#0B1426] px-4 py-2 text-sm text-[#A8B1C2]",
        className
      )}
    >
      <span
        className="size-2 rounded-full bg-[#8B5CF6]"
        aria-hidden="true"
      />
      {name}
    </span>
  );
}