import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RoyalQuote } from "@/components/ui/royal-quote";
import { pillars, milestones } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "RAYLF is a programme of the Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife — recognising and convening young African leaders aged 20 to 39.",
};

export default function About() {
  return (
    <>
      <SiteNav />

      <PageHero
        image="/photos/royal-audience.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="Our"
        goldWord="History"
        intro="A programme of the Royal African Foundation, convening the most outstanding 20 to 39-year olds across the globe under royal patronage."
        height="78vh"
        scrim="down"
      />

      {/* WHO WE ARE */}
      <section className="section-pad">
        <div className="container-raylf grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[72px]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-[120px]">
            <Eyebrow tone="gold">Who We Are</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              Rooted in the Kingdoms of Africa.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="m-0 text-xl leading-[1.65]" style={{ color: "var(--t-fg)" }}>
              RAYLF&rsquo;s mission is to redefine centuries of the rich
              resilient spirit of African Kingdoms which embodies many defining
              principles of its identity.
            </p>
            <p className="m-0 text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
              The Royal African Young Leadership Forum is a programme of the
              Royal African Foundation of His Imperial Majesty Oba Adeyeye
              Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife. It recognises and
              convenes young African leaders aged 20 to 39, chiefly through the
              RAYLF Awards.
            </p>
            <p className="m-0 text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
              Through the Awards and programmes such as G2G Millionaires, RAYLF
              celebrates the success stories of young leaders and connects them
              to Africa&rsquo;s economic prosperity, the blessings of its natural
              resources and the valuable inheritance of its creative culture.
            </p>
            <div
              className="mt-6 aspect-[16/10] rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{
                backgroundImage: "url(/photos/award-presentation-03.jpg)",
                boxShadow: "var(--t-shadow)",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION — PILLARS */}
      <section className="section-pad" style={{ background: "var(--t-sec)" }}>
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex max-w-[720px] flex-col gap-5">
            <Eyebrow tone="gold">Our Mission</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              Shaping. Transforming. Anchoring.
            </h2>
          </div>
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-px overflow-hidden rounded-[var(--radius-lg)]"
            style={{ background: "var(--t-line)" }}
          >
            {pillars.map((p) => (
              <div
                key={p.n}
                className="flex min-h-[280px] flex-col gap-[18px] p-[40px]"
                style={{ background: "var(--t-bg)" }}
              >
                <span
                  className="text-sm font-semibold tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--t-gold)" }}
                >
                  {p.n}
                </span>
                <h3
                  className="mt-auto text-[32px] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
                >
                  {p.title}
                </h3>
                <p className="m-0 text-base leading-[1.65]" style={{ color: "var(--t-muted)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROYAL PATRON — always dark */}
      <section className="relative overflow-hidden py-[140px]" style={{ background: "#240145", color: "#fff" }}>
        <div
          className="pointer-events-none absolute right-[-200px] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(180,73,220,.35) 0%, rgba(180,73,220,0) 65%)",
          }}
        />
        <div className="container-raylf relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-20">
          <div className="relative">
            <div
              className="absolute rounded-[var(--radius-lg)]"
              style={{ inset: "24px -24px -24px 24px", border: "2px solid var(--gold-500)" }}
            />
            <div
              className="relative aspect-[4/5] rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{
                backgroundImage: "url(/photos/his-majesty-throne.jpg)",
                boxShadow: "0 30px 80px rgba(10,0,25,.6)",
              }}
            />
          </div>
          <div className="flex flex-col gap-7">
            <Eyebrow tone="light">Royal Patron</Eyebrow>
            <h2
              className="text-[clamp(34px,4vw,56px)] leading-[1.05] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II
            </h2>
            <p className="m-0 text-lg leading-[1.7] text-white/80">
              The 51st Ooni of Ife and founder of the Royal African Foundation,
              under whose patronage RAYLF recognises young African leaders.
            </p>
            <RoyalQuote tone="dark" size="lg" attribution="His Imperial Majesty (H.I.M) Ooni of Ife">
              Young Africans are the spirit, soul and memory of Africa.
            </RoyalQuote>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="gold">Milestones</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              The RAYLF Awards
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-8">
            {milestones.map((m) => (
              <Link
                key={m.year}
                href="/awards"
                className="flex flex-col gap-4"
                style={{ color: "var(--t-fg)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3.5 w-3.5 flex-none rounded-full"
                    style={{
                      background: "var(--gradient-gold)",
                      boxShadow: "0 0 16px rgba(242,184,75,.6)",
                    }}
                  />
                  <span
                    className="h-0.5 flex-1 rounded"
                    style={{ background: "var(--t-line)" }}
                  />
                </div>
                <div
                  className="text-[72px] leading-none tracking-[-0.04em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {m.year}
                </div>
                <div className="text-base leading-[1.6]" style={{ color: "var(--t-muted)" }}>
                  {m.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[120px]">
        <div className="container-raylf">
          <div
            className="flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[image:var(--gradient-violet-sky)] px-8 py-20 md:px-12"
          >
            <h2
              className="max-w-[640px] text-[clamp(34px,4.5vw,64px)] leading-[1.12] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Explore our programmes.
            </h2>
            <Button variant="gold" size="lg" href="/programmes" iconRight="fa-solid fa-arrow-right">
              Programmes
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
