import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { programmes } from "@/data/home";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Three ways RAYLF recognises, equips and connects young African leaders — the RAYLF Awards, G2G Millionaires and the Leadership Forum.",
};

const labels = ["Recognition", "Enterprise", "Convening"];

export default function Programmes() {
  return (
    <>
      <SiteNav />

      <PageHero
        image="/photos/award-presentation-04.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Programmes" }]}
        title="Find your"
        goldWord="place."
        intro="Three ways RAYLF recognises, equips and connects young African leaders."
        height="78vh"
        scrim="down"
      />

      {/* PROGRAMME LIST */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col">
          {programmes.map((p, i) => (
            <Link
              key={p.n}
              href={p.href}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-10 border-t py-20"
              style={{ borderColor: "var(--t-line)" }}
            >
              <div
                className="aspect-[16/10] rounded-[var(--radius-lg)] bg-cover bg-center"
                style={{ backgroundImage: `url(${p.img})`, boxShadow: "var(--t-shadow)" }}
              />
              <div className="flex flex-col gap-6">
                <div
                  className="text-sm font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--t-gold)" }}
                >
                  {p.n} / {labels[i]}
                </div>
                <h2
                  className="text-[clamp(36px,4.5vw,60px)] leading-[1.02] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
                >
                  {p.title}
                </h2>
                <p className="m-0 max-w-[560px] text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
                  {p.body}
                </p>
                <span
                  className="mt-2 inline-flex items-center gap-3 text-[15px] font-semibold hover:text-[var(--t-gold)]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--t-fg)" }}
                >
                  Read More
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ border: "1px solid var(--t-line)" }}
                  >
                    <i className="fa-solid fa-arrow-right text-xs" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE BAND — always dark */}
      <section className="relative py-[140px]" style={{ background: "#240145" }}>
        <div className="container-raylf relative flex flex-col items-center gap-8 text-center">
          <i className="fa-solid fa-quote-left text-[32px] text-[#F2B84B]" />
          <blockquote
            className="m-0 max-w-[900px] text-[clamp(26px,3.2vw,42px)] italic leading-[1.3] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Ensuring a sustainable future for our young generations should be of
            immense concern to all those who care for the spirit, soul and memory
            of Africa.
          </blockquote>
          <div className="gold-rule" />
          <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFF3A8]">
            His Imperial Majesty (H.I.M) Ooni of Ife
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
