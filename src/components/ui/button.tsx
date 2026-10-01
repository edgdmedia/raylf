import Link from "next/link";
import React from "react";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary",
  gold: "btn-gold",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
  ghost: "btn-ghost",
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
    "btn",
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
