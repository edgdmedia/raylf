"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RoyalQuote } from "@/components/ui/royal-quote";
import { AwardeeCard } from "@/components/ui/awardee-card";
import { Breadcrumbs } from "@/components/ui/page-hero";
import { editions, categories, awardees } from "@/data/awards";

export default function AwardsClient() {
  const [year, setYear] = useState("2024");
  const [cat, setCat] = useState("All");

  const ed = editions.find((e) => e.year === year) ?? editions[0];
  const filtered = awardees.filter((a) => cat === "All" || a.category === cat);

  const pickYear = (y: string) => {
    setYear(y);
    setCat("All");
  };

  return (
    <main>
      {/* HERO */}
      <section
        className="relative flex min-h-[86vh] -mt-[84px] flex-col justify-end"
        style={{ background: "#240145" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-500"
          style={{ backgroundImage: `url(${ed.img})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(36,1,69,.55) 0%, rgba(36,1,69,.4) 40%, rgba(36,1,69,.95) 85%, #240145 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 80% 30%, rgba(180,73,220,.4) 0%, rgba(180,73,220,0) 70%)",
          }}
        />
        <div className="grid-overlay" />

        <div className="container-raylf relative flex flex-col gap-7 pb-14 pt-[200px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "RAYLF Awards" }]} />

          <div className="flex flex-wrap items-end justify-between gap-8">
            <h1
              className="text-[clamp(52px,9vw,132px)] leading-[.92] tracking-[-0.04em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              RAYLF Awards <span className="gold-foil">{year}</span>
            </h1>
            <span
              className="rounded-[var(--radius-pill)] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#FFF3A8]"
              style={{ border: "1px solid rgba(255,243,168,.35)" }}
            >
              {ed.tag}
            </span>
          </div>

          <p className="m-0 max-w-[640px] text-[19px] leading-[1.6] text-white/85">{ed.intro}</p>

          <div className="flex flex-wrap gap-2 border-t border-white/15 pt-6">
            {editions.map((e) => {
              const on = e.year === year;
              return (
                <button
                  key={e.year}
                  onClick={() => pickYear(e.year)}
                  className="cursor-pointer rounded-[var(--radius-pill)] px-6 py-3 text-base font-semibold transition-all duration-[250ms]"
                  style={{
                    fontFamily: "var(--font-display)",
                    border: `1px solid ${on ? "#FFF3A8" : "rgba(255,255,255,.35)"}`,
                    background: on ? "#FFF3A8" : "transparent",
                    color: on ? "#240145" : "#fff",
                  }}
                >
                  {e.year}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* AWARDEES */}
      <section id="awardees" className="section-pad">
        <div className="container-raylf flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex flex-col gap-5">
              <Eyebrow tone="gold">Awardees</Eyebrow>
              <h2
                className="text-[clamp(38px,5vw,68px)] leading-none tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
              >
                Class of {year}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const on = c === cat;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className="cursor-pointer rounded-[var(--radius-pill)] px-[18px] py-[9px] text-sm font-semibold transition-all duration-[250ms]"
                    style={{
                      fontFamily: "var(--font-body)",
                      border: "1px solid var(--t-line)",
                      background: on ? "var(--t-gold)" : "var(--t-chip)",
                      color: on ? "var(--t-bg)" : "var(--t-fg)",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
            {filtered.map((a) => (
              <Link
                key={a.slug}
                href={`/awardee/${a.slug}`}
                className="awardee-link card-lift block"
              >
                <AwardeeCard
                  photo={a.photo}
                  name={a.name}
                  category={a.category}
                  country={a.country}
                  year={year}
                />
              </Link>
            ))}
          </div>

          <p className="m-0 text-[13px]" style={{ color: "var(--t-muted)" }}>
            Awardee names and categories are placeholders — the live Awards page
            lists no named recipients.
          </p>
        </div>
      </section>

      {/* CEREMONY — always dark */}
      <section className="py-[140px]" style={{ background: "#240145", color: "#fff" }}>
        <div className="container-raylf grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[72px]">
          <div className="flex flex-col gap-7">
            <Eyebrow tone="light">The Ceremony</Eyebrow>
            <h2
              className="text-[clamp(34px,4.5vw,60px)] leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Presented under royal patronage.
            </h2>
            <RoyalQuote tone="dark" size="lg" attribution="His Imperial Majesty (H.I.M) Ooni of Ife">
              Young Africans are the spirit, soul and memory of Africa.
            </RoyalQuote>
            <div>
              <Button variant="outline-light" href="/gallery" iconRight="fa-solid fa-arrow-right">
                Gallery
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 [&>*]:min-h-[220px]">
            <div
              className="row-span-2 rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{ backgroundImage: "url(/photos/award-certificate-01.jpg)" }}
            />
            <div
              className="rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{ backgroundImage: "url(/photos/award-presentation-04.jpg)" }}
            />
            <div
              className="rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{ backgroundImage: "url(/photos/award-certificate-02.jpg)" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
