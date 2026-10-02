"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "../use-theme";
import { Button } from "../ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Awards", href: "/awards" },
  { label: "Gallery", href: "/gallery" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const icon = !mounted || theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";

  return (
    <div
      className="sticky top-0 z-50 transition-[padding] duration-300"
      style={{ padding: scrolled ? 0 : "16px 16px 0" }}
    >
      <div
        className="mx-auto flex w-full flex-wrap items-center gap-x-4 gap-y-2 py-2.5 transition-all duration-300"
        style={{
          maxWidth: scrolled ? "none" : 1320,
          borderRadius: scrolled ? 0 : "var(--radius-pill)",
          padding: scrolled ? "10px 24px" : "10px 12px 10px 24px",
          background: scrolled ? "rgba(36,1,69,.97)" : "rgba(36,1,69,.88)",
          border: scrolled ? "1px solid transparent" : "1px solid rgba(255,243,168,.16)",
          boxShadow: scrolled ? "0 8px 32px rgba(10,0,25,.5)" : "0 12px 40px rgba(10,0,25,.45)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Link href="/" aria-label="RAYLF home" className="flex-none">
          <Image
            src="/logo/raylf-logo-white.png"
            alt="RAYLF — Royal African Young Leadership Forum"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="mx-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link rounded-[var(--radius-pill)] px-4 py-2.5 text-sm font-medium ${
                isActive(l.href) ? "nav-link-active" : ""
              }`}
              style={{
                fontFamily: "var(--font-display)",
                color: isActive(l.href) ? "#FFF3A8" : "rgba(255,255,255,.82)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{
              border: "1px solid rgba(255,243,168,.35)",
              color: "#FFF3A8",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <i className={icon} />
          </button>
          <div className="hidden sm:block">
            <Button variant="gold" size="sm" href="/awards#awardees" iconRight="fa-solid fa-arrow-right">
              Awardees
            </Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#FFF3A8] md:hidden"
            style={{ border: "1px solid rgba(255,243,168,.35)", background: "transparent", cursor: "pointer" }}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="w-full border-t border-[rgba(255,243,168,.16)] px-2 py-3 md:hidden">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive(l.href) ? "nav-link-active" : "text-white/80"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default SiteNav;
