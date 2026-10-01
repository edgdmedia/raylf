import Link from "next/link";
import React from "react";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "py-2 px-[18px] text-[13px]",
  md: "py-[13px] px-7 text-[15px]",
  lg: "py-4 px-9 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--brand-primary)] text-white border-2 border-[var(--brand-primary)] hover:bg-[var(--gold-600)] hover:border-[var(--gold-600)] hover:text-[var(--violet-950)]",
  gold: "btn-gold bg-[var(--gradient-gold)] text-[var(--violet-950)] border-2 border-transparent",
  outline:
    "bg-transparent text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",
  "outline-light":
    "btn-outline-light bg-transparent text-white border-2 border-white",
  ghost:
    "bg-transparent text-[var(--brand-primary)] border-2 border-transparent hover:text-[var(--gold-700)]",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconRight?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  className = "",
  children,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center gap-2.5 font-[var(--font-display)] font-semibold tracking-[0.01em] rounded-[var(--radius-pill)] no-underline leading-tight transition-all duration-300",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {icon && <i className={icon} aria-hidden="true" />}
      {children}
      {iconRight && <i className={iconRight} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <button className={classes}>{content}</button>;
}

export default Button;
