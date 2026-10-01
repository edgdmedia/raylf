import Link from "next/link";
import React from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">
      {items.map((c, i) => (
        <React.Fragment key={c.label}>
          {i > 0 && <i className="fa-solid fa-chevron-right text-[10px]" />}
          {c.href ? (
            <Link href={c.href} className="text-white/70 hover:text-[var(--gold-200)]">
              {c.label}
            </Link>
          ) : (
            <span className="text-[var(--gold-200)]">{c.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function PageHero({
  image,
  crumbs,
  title,
  goldWord,
  intro,
  height = "76vh",
  scrim = "left",
  children,
}: {
  image?: string;
  crumbs: Crumb[];
  title: string;
  goldWord?: string;
  intro?: string;
  height?: string;
  scrim?: "down" | "left";
  children?: React.ReactNode;
}) {
  const scrimDown =
    "linear-gradient(180deg, rgba(36,1,69,.6) 0%, rgba(36,1,69,.45) 40%, rgba(36,1,69,.95) 85%, #240145 100%)";
  const scrimLeft =
    "linear-gradient(90deg, rgba(36,1,69,.94) 0%, rgba(68,3,167,.6) 50%, rgba(80,2,185,.15) 100%)";

  return (
    <section
      className="relative flex -mt-[84px] flex-col justify-end"
      style={{ background: "#240145", minHeight: height }}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: scrim === "left" ? scrimLeft : scrimDown }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 30%, rgba(180,73,220,.4), transparent 70%)",
        }}
      />
      <div className="grid-overlay" />

      <div className="container-raylf relative flex flex-col gap-7 pb-16 pt-[200px]">
        <Breadcrumbs items={crumbs} />
        <h1
          className="max-w-[1200px] text-[clamp(52px,9vw,132px)] leading-[.92] tracking-[-0.04em] text-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {title}{" "}
          {goldWord && <span className="gold-foil">{goldWord}</span>}
        </h1>
        {intro && (
          <p className="m-0 max-w-[640px] text-[19px] leading-[1.6] text-white/80">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export default PageHero;
