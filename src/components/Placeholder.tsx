import { cn } from "../utils/cn";

type Props = {
  label: string;
  className?: string;
  /** ratio presets via aspect classes */
  aspect?: string;
  tone?: "dark" | "cream" | "sage";
  rounded?: string;
  icon?: React.ReactNode;
};

const tones: Record<string, string> = {
  dark: "from-olive via-forest to-forest text-cream/90",
  cream: "from-beige via-cream to-bone text-olive",
  sage: "from-soft-green/80 via-olive to-forest text-cream/90",
};

export default function Placeholder({
  label,
  className,
  aspect = "aspect-[4/5]",
  tone = "dark",
  rounded = "rounded-3xl",
  icon,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "group relative flex items-end justify-start overflow-hidden bg-gradient-to-br ph-pattern",
        tones[tone],
        rounded,
        aspect,
        className
      )}
    >
      {/* subtle botanical glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full hairline opacity-40" />

      {icon && (
        <div className="pointer-events-none absolute right-5 top-5 text-gold/40">
          {icon}
        </div>
      )}

      <span className="relative z-10 m-4 inline-flex items-center gap-2 rounded-full bg-black/15 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] backdrop-blur-sm ring-1 ring-white/15">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 15l5-4 4 3 3-2 6 5" />
        </svg>
        {label}
      </span>
    </div>
  );
}
