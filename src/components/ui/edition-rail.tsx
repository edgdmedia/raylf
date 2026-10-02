"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Edition } from "@/data/home";

export function EditionRail({ editions }: { editions: Edition[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = railRef.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const step = el.querySelector(":scope > *")?.clientWidth ?? 300;
    el.scrollBy({ left: dir * (step + 20), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-5">
      <div ref={railRef} className="edition-rail">
        {editions.map((e) => (
          <Link
            key={e.year}
            href={`/awards/${e.year}`}
            className="card-lift relative block aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)]"
            style={{ border: "1px solid rgba(255,243,168,.14)" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${e.img})` }}
            />
            <div className="absolute inset-0" style={{ background: "var(--overlay-scrim)" }} />
            <span
              className="absolute left-0 right-0 top-0 flex p-[22px]"
              aria-hidden="true"
            >
              <span
                className="rounded-[var(--radius-pill)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#FFF3A8]"
                style={{
                  background: "rgba(36,1,69,.7)",
                  border: "1px solid rgba(255,243,168,.3)",
                  width: "fit-content",
                }}
              >
                {e.tag}
              </span>
            </span>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
              <div
                className="text-[64px] leading-none tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {e.year}
              </div>
              <div className="text-sm text-white/80">{e.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="rail-controls self-end">
        <button
          type="button"
          className="rail-btn"
          aria-label="Scroll editions left"
          disabled={atStart}
          onClick={() => scrollBy(-1)}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          className="rail-btn"
          aria-label="Scroll editions right"
          disabled={atEnd}
          onClick={() => scrollBy(1)}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default EditionRail;
