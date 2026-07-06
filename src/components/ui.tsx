import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { IconArrow } from "./Icons";

type ButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
  variant?: "gold" | "light" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  gold: "bg-gold text-forest hover:bg-gold-soft shadow-[0_12px_30px_-12px_rgba(199,168,107,0.7)]",
  light:
    "bg-bone text-forest hover:bg-white ring-1 ring-gold/30 shadow-soft",
  outline:
    "bg-transparent text-cream ring-1 ring-gold/50 hover:bg-gold/10 hover:ring-gold",
  ghost: "bg-transparent text-current hover:text-gold",
};

export function Button({
  href,
  target,
  rel,
  children,
  variant = "gold",
  size = "md",
  withArrow = false,
  className,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const cls = cn(
    "glow-btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    sizes[size],
    variants[variant],
    className
  );
  const content = (
    <>
      {children}
      {withArrow && <IconArrow className="h-4 w-4" />}
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={cls}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]",
            tone === "light" ? "text-gold" : "text-soft-green"
          )}
        >
          <span className="h-px w-6 bg-gold/70" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-cream" : "text-olive"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-cream/75" : "text-ink/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
