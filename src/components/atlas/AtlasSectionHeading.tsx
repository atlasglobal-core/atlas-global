import { cn } from "@/lib/utils";

interface AtlasSectionHeadingProps {
  eyebrow?: string;
  headline: string | string[];
  description?: string;
  className?: string;
}

export function AtlasSectionHeading({
  eyebrow,
  headline,
  description,
  className,
}: AtlasSectionHeadingProps) {
  const headlineArray = Array.isArray(headline) ? headline : [headline];

  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#8B5CF6]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
        {headlineArray.map((line, i) => (
          <span key={i}>
            {line}
            {i < headlineArray.length - 1 && <br />}
          </span>
        ))}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A8B1C2]">
          {description}
        </p>
      )}
    </div>
  );
}