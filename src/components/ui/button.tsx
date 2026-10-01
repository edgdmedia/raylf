"use client";

import * as React from "react";

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  href,
  onClick,
  children,
  style,
}: {
  variant?: "primary" | "gold" | "outline" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconRight?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: 13 },
    md: { padding: "13px 28px", fontSize: 15 },
    lg: { padding: "16px 36px", fontSize: 16 },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--brand-primary)",
      color: "#fff",
      border: "2px solid var(--brand-primary)",
    },
    gold: {
      background: "var(--gradient-gold)",
      color: "var(--violet-950)",
      border: "2px solid transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "2px solid var(--brand-primary)",
    },
    "outline-light": {
      background: "transparent",
      color: "#fff",
      border: "2px solid #fff",
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "2px solid transparent",
    },
  };

  const hoverStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--gold-600)",
      borderColor: "var(--gold-600)",
      color: "var(--violet-950)",
    },
    gold: {
      filter: "brightness(1.08)",
    },
    outline: {
      background: "var(--brand-primary)",
      color: "#fff",
    },
    "outline-light": {
      background: "#fff",
      color: "var(--brand-primary)",
    },
    ghost: {
      color: "var(--gold-700)",
    },
  };

  const sizeStyles = sizes[size];

  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    const handleEnter = () => setHover(true);
    const handleLeave = () => setHover(false);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const commonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "'Poppins', system-ui, sans-serif",
    fontWeight: 600,
    letterSpacing: "0.01em",
    borderRadius: "999px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "all var(--dur-base, .2s) var(--ease-standard, cubic-bezier(.2,.7,.2,1))",
    textDecoration: "none",
    lineHeight: 1.2,
    ...sizeStyles,
    ...variantStyles[variant],
    ...(hover && !disabled ? hoverStyles[variant] : {}),
    ...style,
  };

  const Tag = href ? "a" : "button";

  return React.createElement(Tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: commonStyle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }, icon && React.createElement("i", { className: icon, "aria-hidden": "true" }), children, iconRight && React.createElement("i", { className: iconRight, "aria-hidden": "true" }));
}
export default Button;