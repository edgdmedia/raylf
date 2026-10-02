import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  programmeContent,
  offers,
  momentPhotos,
  otherProgrammes,
} from "@/data/programme-detail";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return Object.keys(programmeContent).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = programmeContent[id];
  return {
    title: c ? `${c.title} ${c.goldWord}` : "Programme",
    description: c?.paragraphs[0] ?? "A RAYLF programme for young African leaders.",
  };
}

export default async function ProgrammePage({ params }: Props) {
  const { id } = await params;
  const c = programmeContent[id];
  if (!c) notFound();

  return (
    <>
      <SiteNav />

      <PageHero
        image="/photos/award-presentation-02.jpg"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: `${c.title} ${c.goldWord}` },
        ]}
        title={c.title}
        goldWord={c.goldWord}
        height="80vh"
        scrim="left"
      />

      {/* OVERVIEW + DETAILS */}
      <section className="section-pad">
        <div className="container-raylf grid grid-cols-[1.6fr_minmax(280px,1fr)] gap-14 max-lg:grid-cols-1">
          <div className="flex flex-col gap-7">
            <Eyebrow tone="gold">{c.eyebrow}</Eyebrow>
            <h2
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.02] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              {c.heading}
            </h2>
            {c.paragraphs.map((p, i) => (
              <p key={i} className="m-0 text-lg leading-[1.7]" style={{ color: "var(--t-muted)" }}>
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:sticky lg:top-[120px] lg:self-start">
            <div
              className="flex flex-col gap-6 rounded-[var(--radius-lg)] p-8"
              style={{
                background: "var(--t-card)",
                border: "1px solid var(--t-line)",
                boxShadow: "var(--t-shadow)",
              }}
            >
              {c.details.map((d) => (
                <div key={d.key} className="flex flex-col gap-1">
                  <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--t-gold)" }}>
                    {d.key}
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--t-fg)" }}
                  >
                    {d.value}
                  </div>
                </div>
              ))}
              <Button variant="gold" href={`mailto:${c.email}`} iconRight="fa-solid fa-arrow-right">
                Enquire
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* OFFERS */}
      <section className="section-pad" style={{ background: "var(--t-sec)" }}>
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex max-w-[720px] flex-col gap-5">
            <Eyebrow tone="gold">What the programme offers</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              Built for builders.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
            {offers.map((o) => (
              <div
                key={o.title}
                className="flex flex-col gap-5 rounded-[var(--radius-lg)] p-8"
                style={{
                  background: "var(--t-card)",
                  border: "1px solid var(--t-line)",
                }}
              >
                <span
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-[var(--violet-950)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <i className={`${o.icon} text-xl`} />
                </span>
                <h3
                  className="text-2xl tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--t-fg)" }}
                >
                  {o.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.65]" style={{ color: "var(--t-muted)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="gold">Moments</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              From the journey.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5 [grid-auto-rows:280px]">
            {momentPhotos.map((src) => (
              <div
                key={src}
                className="rounded-[var(--radius-lg)] bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMMES */}
      <section className="pb-[140px]">
        <div className="container-raylf">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
            {otherProgrammes.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="card-lift relative flex min-h-[380px] flex-col overflow-hidden rounded-[var(--radius-lg)] text-white"
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
                      "linear-gradient(180deg, rgba(36,1,69,.15) 0%, rgba(36,1,69,.92) 100%)",
                  }}
                />
                <div className="relative flex justify-end p-6">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-[var(--violet-950)]"
                    style={{ background: "var(--gold-200)" }}
                  >
                    <i className="fa-solid fa-arrow-right -rotate-45" />
                  </span>
                </div>
                <div className="relative mt-auto flex flex-col gap-3 p-7">
                  <h3
                    className="text-[28px] leading-[1.05] tracking-[-0.02em] text-white"
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

      <SiteFooter />
    </>
  );
}
