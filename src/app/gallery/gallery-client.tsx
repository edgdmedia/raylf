"use client";

import { useCallback, useEffect, useState } from "react";
import { albumChips, galleryPhotos } from "@/data/gallery";
import { SocialLinks } from "@/components/ui/social-links";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function GalleryClient() {
  const [album, setAlbum] = useState("All");
  const [open, setOpen] = useState(-1);

  const photos = album === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.album === album);

  const close = useCallback(() => setOpen(-1), []);
  const move = useCallback(
    (delta: number) => {
      setOpen((i) => {
        if (i === -1) return i;
        const len = photos.length;
        return (i + delta + len) % len;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === -1) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, move]);

  return (
    <main>
      {/* HERO — no photo, glow + grid */}
      <section
        className="relative flex min-h-[56vh] -mt-[84px] flex-col justify-end"
        style={{ background: "#240145" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 80% 30%, rgba(180,73,220,.4), transparent 70%)",
          }}
        />
        <div className="grid-overlay" />
        <div className="container-raylf relative flex flex-col gap-7 pb-20 pt-[200px]">
          <Eyebrow tone="light">Gallery</Eyebrow>
          <h1
            className="max-w-[1200px] text-[clamp(52px,9vw,132px)] leading-[.92] tracking-[-0.04em] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Celebrate the <span className="gold-foil">journey.</span>
          </h1>
          <p className="m-0 max-w-[600px] text-[19px] leading-[1.6] text-white/80">
            Celebrate your people. Moments from the Awards, the audiences and
            the convenings — under royal patronage.
          </p>
        </div>
      </section>

      {/* ALBUM CHIPS + GRID */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col gap-10">
          <div className="flex flex-wrap gap-2">
            {albumChips.map((chip) => {
              const on = chip === album;
              return (
                <button
                  key={chip}
                  onClick={() => {
                    setAlbum(chip);
                    setOpen(-1);
                  }}
                  className="cursor-pointer rounded-[var(--radius-pill)] px-[18px] py-[9px] text-sm font-semibold transition-all duration-[250ms]"
                  style={{
                    fontFamily: "var(--font-body)",
                    border: "1px solid var(--t-line)",
                    background: on ? "var(--t-gold)" : "var(--t-chip)",
                    color: on ? "var(--t-bg)" : "var(--t-fg)",
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-5 [grid-auto-flow:dense] [grid-auto-rows:260px]">
            {photos.map((p, i) => (
              <button
                key={`${p.src}-${i}`}
                onClick={() => setOpen(i)}
                className="card-lift relative cursor-pointer overflow-hidden rounded-[var(--radius-lg)] bg-cover bg-center text-left"
                style={{
                  backgroundImage: `url(${p.src})`,
                  gridRow: p.span && album === "All" ? "span 2" : undefined,
                }}
                aria-label={`Open photo from ${p.album}`}
              >
                <span
                  className="absolute bottom-3 left-3 rounded-[var(--radius-pill)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFF3A8]"
                  style={{
                    background: "rgba(36,1,69,.7)",
                    border: "1px solid rgba(255,243,168,.3)",
                  }}
                >
                  {p.album}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW BAND */}
      <section className="pb-[140px]">
        <div className="container-raylf">
          <div
            className="flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[32px] px-8 py-16 text-white md:px-12"
            style={{ background: "var(--gradient-royal)" }}
          >
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFF3A8]">
                Follow the journey
              </div>
              <div
                className="text-[clamp(32px,4vw,56px)] leading-none tracking-[-0.03em] text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                @royalafricanlyf
              </div>
            </div>
            <SocialLinks tone="dark" variant="pill" />
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open !== -1 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-10"
          style={{ background: "rgba(36,1,69,.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[open]?.src}
            alt={photos[open]?.album ?? "Gallery photo"}
            className="max-h-full max-w-full rounded-[var(--radius-lg)] object-contain"
            style={{ boxShadow: "var(--t-shadow)" }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-0 bg-white/10 text-xl text-white hover:bg-white/20"
          >
            <i className="fa-solid fa-xmark" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--gold-200)] text-[var(--violet-950)]"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next"
            className="absolute right-6 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--gold-200)] text-[var(--violet-950)]"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}
    </main>
  );
}
