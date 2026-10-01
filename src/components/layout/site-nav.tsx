"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../use-theme";

export function SiteNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    { label: "Awards", href: "/awards" },
    { label: "Gallery", href: "/gallery" },
  ];

  const isActive = (href: string) => {
    const normalized = href.replace("/awards#", "/awards").replace("/gallery#", "/gallery");
    return pathname === normalized || pathname.startsWith(normalized + "/");
  };

  return React.createElement(
    "nav",
    {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: theme === "dark" ? "rgba(36,1,69,.88)" : "#fff",
        borderBottom: "1px solid rgba(255,243,168,.18)",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "10px",
        },
      },
      React.createElement("a", {
        href: "/",
        style: {
          textDecoration: "none",
        },
      }, React.createElement("img", {
        src: "/logo/raylf-logo-white.png",
        alt: "RAYLF",
        height: 40,
        style: { display: "block" },
      })),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: 8,
            marginLeft: "auto",
          },
        },
        navLinks.map((link) =>
          React.createElement(Link, {
            key: link.label,
            href: link.href,
            style: {
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              color: isActive(link.href) 
                ? theme === "dark" 
                  ? "#FFF3A8" 
                  : "#240145" 
                : theme === "dark"
                  ? "rgba(255,255,255,.82)" 
                  : "var(--brand-primary)",
              padding: "10px 16px",
              borderRadius: "999px",
              margin: "0 4px",
              background: isActive(link.href)
                ? theme === "dark"
                  ? "rgba(255,243,168,.1)"
                  : "rgba(255,243,168,.04)"
                : "transparent",
              transition: "all .2s",
            },
          }, link.label)
        )
      ),
      React.createElement(
        PillButton,
        {
          variant: "outline-light",
          size: "lg",
          onClick: toggleTheme,
          style: { marginLeft: "12px" },
        },
        React.createElement("i", { className: theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun", style: { marginRight: "8px" } }),
        "Light"
      )
    )
  );
}
export default SiteNav;