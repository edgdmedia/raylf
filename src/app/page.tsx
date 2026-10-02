import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SocialLinks } from "@/components/ui/social-links";
import { HeroBackdrop } from "@/components/ui/hero-backdrop";
import { EditionRail } from "@/components/ui/edition-rail";
import {
  facts,
  programmes,
  marqueeWords,
  editions,
  galleryTeaser,
} from "@/data/home";

export const metadata: Metadata = {
  title: "RAYLF — A place for Africa's young leaders",
  description:
    "RAYLF recognises and convenes the most outstanding 20 to 39-year olds across the globe, shaping, transforming and anchoring the future of the continent.",
};

const heroImages = [
  "/photos/award-stage-01.jpg",
  "/photos/award-presentation-04.jpg",
  "/photos/award-presentation-01.jpg",
];

const marqueeRow = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-screen -mt-[84px] flex-col justify-end">
        <HeroBackdrop images={heroImages} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(36,1,69,.55) 0%, rgba(36,1,69,.35) 35%, rgba(36,1,69,.92) 78%, #240145 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 78% 30%, rgba(180,73,220,.45) 0%, rgba(111,38,207,0) 70%)",
          }}
        />
        <div className="grid-overlay" />

        {/* Pulsing ring */}
        <div
          className="pulse-ring pointer-events-none absolute rounded-full"
          style={{
            right: "8%",
            top: "18%",
            width: 360,
            height: 360,
            border: "1px solid rgba(255,243,168,.3)",
            boxShadow:
              "inset 0 0 80px rgba(180,73,220,.35), 0 0 120px rgba(180,73,220,.3)",
          }}
        />

        <div className="container-raylf relative flex flex-col gap-10 pb-16 pt-[180px]">
          <div
            className="inline-flex w-fit items-center gap-2.5 rounded-[var(--radius-pill)] px-4 py-2 pl-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#FFF3A8]"
            style={{ border: "1px solid rgba(255,243,168,.35)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "#F2B84B", boxShadow: "0 0 12px #F2B84B" }}
            />
            Royal African Young Leadership Forum
          </div>

          <h1
            className="max-w-[1200px] text-[clamp(52px,10vw,148px)] leading-[1.05] tracking-[-0.04em] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            A place for Africa&rsquo;s{" "}
            <span className="gold-foil">young leaders.</span>
          </h1>

          <div className="flex flex-col gap-8 border-t border-white/15 pt-8">
            <p className="m-0 max-w-[520px] text-[19px] leading-[1.6] text-white/80">
              RAYLF recognises and convenes the most outstanding 20 to 39-year
              olds across the globe, shaping, transforming and anchoring the
              future of the continent.
            </p>
            <div className="flex flex-wrap justify-start gap-3.5">
              <Button variant="gold" size="lg" href="/awards" iconRight="fa-solid fa-arrow-right">
                RAYLF Awards
              </Button>
              <Button variant="outline-light" size="lg" href="/about">
                About RAYLF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className="overflow-hidden bg-[var(--violet-900)] py-[22px]"
        style={{
          borderTop: "1px solid rgba(255,243,168,.16)",
          borderBottom: "1px solid rgba(255,243,168,.16)",
        }}
      >
        <div className="marquee-track">
          {marqueeRow.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap text-[28px] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: i % 2 ? "#fff" : "#F2B84B",
              }}
            >
              {w}
              <i
                className="fa-solid fa-star text-xs"
                style={{ color: "rgba(255,243,168,.5)" }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section-pad">
        <div className="container-raylf grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[72px]">
          <div className="relative">
            <div
              className="absolute rounded-[var(--radius-lg)]"
              style={{ inset: "24px -24px -24px 24px", border: "2px solid var(--gold-500)" }}
            />
            <div
              className="relative aspect-[4/5] rounded-[var(--radius-lg)] bg-cover bg-center"
              style={{
                backgroundImage: "url(/photos/his-majesty-throne.jpg)",
                boxShadow: "var(--t-shadow)",
              }}
            />
            <div
              className="absolute -left-3 bottom-10 max-w-[240px] rounded-[var(--radius-md)] bg-[var(--violet-700)] p-[22px]"
              style={{
                border: "1px solid rgba(255,243,168,.25)",
                boxShadow: "0 20px 50px rgba(10,0,25,.5)",
              }}
            >
              <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFF3A8]">
                Royal Patron
              </div>
              <div
                className="text-base font-semibold leading-[1.35] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <Eyebrow tone="gold">About RAYLF</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              The spirit, soul and memory of Africa.
            </h2>
            <p className="m-0 text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
              RAYLF is a programme of the Royal African Foundation of His
              Imperial Majesty, the 51st Ooni of Ife. It exists to redefine
              centuries of the rich resilient spirit of African Kingdoms, which
              embodies many defining principles of its identity.
            </p>
            <p className="m-0 text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
              Through the RAYLF Awards and programmes such as G2G Millionaires,
              we celebrate the success stories of young leaders and connect them
              to a lineage of royal patronage.
            </p>
            <div
              className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-md)]"
              style={{ background: "var(--t-line)" }}
            >
              {facts.map((f) => (
                <div
                  key={f.l}
                  className="flex flex-col gap-1.5 p-[22px]"
                  style={{ background: "var(--t-bg)" }}
                >
                  <div
                    className="text-[34px] tracking-[-0.03em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "var(--t-gold)",
                    }}
                  >
                    {f.v}
                  </div>
                  <div className="text-[13px] leading-[1.4]" style={{ color: "var(--t-muted)" }}>
                    {f.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section-pad" style={{ background: "var(--t-sec)" }}>
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex max-w-[720px] flex-col gap-5">
              <Eyebrow tone="gold">What We Do</Eyebrow>
              <h2
                className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
              >
                Find your place.
              </h2>
            </div>
            <p className="m-0 max-w-[400px] text-[17px] leading-[1.65]" style={{ color: "var(--t-muted)" }}>
              Three ways RAYLF recognises, equips and connects young African
              leaders.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
            {programmes.map((p) => (
              <Link
                key={p.n}
                href={p.href}
                className="card-lift programme-card relative flex min-h-[520px] flex-col overflow-hidden rounded-[var(--radius-lg)] text-white"
                style={{ border: "1px solid rgba(255,243,168,.14)" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(36,1,69,.2) 0%, rgba(36,1,69,.55) 45%, rgba(36,1,69,.96) 100%)",
                  }}
                />
                <div className="relative flex items-start justify-between p-6">
                  <span
                    className="text-sm font-semibold tracking-[0.1em] text-[#FFF3A8]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.n}
                  </span>
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ border: "1px solid rgba(255,255,255,.5)" }}
                  >
                    <i className="fa-solid fa-arrow-right -rotate-45" />
                  </span>
                </div>
                <div className="relative mt-auto flex flex-col gap-3 p-7">
                  <h3
                    className="text-[32px] leading-[1.05] tracking-[-0.02em] text-white"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {p.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-white/80">{p.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-[160px] text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/photos/royal-audience.jpg)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(36,1,69,.88)" }} />
        <div
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ border: "1px solid rgba(255,243,168,.14)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[1040px] w-[1040px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ border: "1px solid rgba(255,243,168,.08)" }}
        />
        <div className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-8 px-[var(--container-pad)]">
          <i className="fa-solid fa-quote-left text-[40px] text-[#F2B84B]" />
          <blockquote
            className="m-0 italic text-[clamp(28px,3.6vw,48px)] leading-[1.25] tracking-[-0.015em] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Young Africans are the spirit, soul and memory of Africa.
          </blockquote>
          <div className="gold-rule" />
          <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFF3A8]">
            His Imperial Majesty (H.I.M) Ooni of Ife
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col gap-16">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex max-w-[760px] flex-col gap-5">
              <Eyebrow tone="gold">RAYLF Awards</Eyebrow>
              <h2
                className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
              >
                Every edition, a new generation.
              </h2>
            </div>
            <Button variant="outline" href="/awards#awardees" iconRight="fa-solid fa-arrow-right">
              Awardees
            </Button>
          </div>

          <EditionRail editions={editions} />

        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="pb-[140px]">
        <div className="container-raylf grid grid-cols-2 gap-4 lg:grid-cols-4 lg:[grid-auto-rows:220px]">
          <div
            className="col-span-2 row-span-2 rounded-[var(--radius-lg)] bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryTeaser[0]})`, minHeight: 220 }}
          />
          <div
            className="rounded-[var(--radius-lg)] bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryTeaser[1]})`, minHeight: 220 }}
          />
          <div
            className="rounded-[var(--radius-lg)] bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryTeaser[2]})`, minHeight: 220 }}
          />
          <div
            className="relative col-span-2 overflow-hidden rounded-[var(--radius-lg)] text-white"
            style={{ minHeight: 220 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/photos/award-greeting.jpg)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(63,2,142,.92) 0%, rgba(80,2,185,.8) 45%, rgba(180,73,220,.65) 100%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 p-8">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFF3A8]">
                Follow the journey
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div
                  className="text-[32px] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  @royalafricanlyf
                </div>
                <SocialLinks tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL MISSION — always dark */}
      <section className="relative py-[140px]" style={{ background: "#240145" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/brand/africa-world-map.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #240145 0%, rgba(36,1,69,.75) 55%, rgba(36,1,69,.35) 100%)",
          }}
        />
        <div className="container-raylf relative flex flex-col gap-6">
          <Eyebrow tone="light">Global Mission</Eyebrow>
          <h2
            className="max-w-[760px] text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            From Ile-Ife to the world.
          </h2>
          <p className="m-0 max-w-[560px] text-lg leading-[1.7] text-white/80">
            Africa&rsquo;s economic prosperity, the blessings of its natural
            resources and the valuable inheritance of its creative culture,
            carried forward by young leaders across every continent.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-[120px]">
        <div className="container-raylf">
          <div
            className="relative overflow-hidden rounded-[32px] bg-[image:var(--gradient-violet-sky)] px-8 py-[96px] text-center text-white md:px-12"
          >
            <div
              className="pointer-events-none absolute left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full"
              style={{
                bottom: -360,
                background:
                  "radial-gradient(circle, rgba(242,184,75,.45) 0%, rgba(242,184,75,0) 65%)",
              }}
            />
            <div className="relative mx-auto flex max-w-[940px] flex-col items-center gap-7">
              <h2
                className="max-w-[900px] text-[clamp(40px,6vw,88px)] leading-[1.05] tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                There&rsquo;s a place for you.
              </h2>
              <p className="m-0 max-w-[560px] text-lg leading-[1.65] text-white/90">
                Discover the programmes through which RAYLF recognises, equips
                and connects young African leaders.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Button variant="gold" size="lg" href="/programmes" iconRight="fa-solid fa-arrow-right">
                  Our Programmes
                </Button>
                <Button variant="outline-light" size="lg" href="/about">
                  About RAYLF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
