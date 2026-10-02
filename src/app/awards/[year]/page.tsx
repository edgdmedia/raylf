import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { AwardeeCard } from "@/components/ui/awardee-card";
import { editionDetails, editionDetail } from "@/data/editions";
import { awardeesByYear } from "@/data/awards";

interface Props {
  params: Promise<{ year: string }>;
}

export function generateStaticParams() {
  return editionDetails.map((e) => ({ year: e.year }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  const ed = editionDetail(year);
  return {
    title: ed ? `${ed.year} Edition` : "Edition",
    description: ed?.summary[0] ?? "A RAYLF Awards edition.",
  };
}

export default async function EditionPage({ params }: Props) {
  const { year } = await params;
  const ed = editionDetail(year);
  if (!ed) notFound();

  const awardees = awardeesByYear(ed.year);

  return (
    <>
      <SiteNav />

      <PageHero
        image={ed.img}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "RAYLF Awards", href: "/awards" },
          { label: ed.year },
        ]}
        title={ed.title}
        goldWord={ed.goldWord}
        intro={ed.tag}
        height="72vh"
        scrim="down"
      />

      {/* OVERVIEW + DETAILS */}
      <section className="section-pad">
        <div className="container-raylf grid grid-cols-[1.6fr_minmax(280px,1fr)] gap-14 max-lg:grid-cols-1">
          <div className="flex flex-col gap-7">
            <Eyebrow tone="gold">The Edition</Eyebrow>
            <h2
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              {ed.year} — {ed.location}.
            </h2>
            {ed.summary.map((p, i) => (
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
              {[
                { key: "Edition", value: ed.tag },
                { key: "Host", value: ed.location },
                { key: "Venue", value: ed.venue },
                { key: "Date", value: ed.date },
              ].map((d) => (
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
              <Button variant="gold" href="/awards" iconRight="fa-solid fa-arrow-right">
                All editions
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-[140px]">
        <div className="container-raylf">
          <div
            className="grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-md)]"
            style={{ background: "var(--t-line)" }}
          >
            {ed.stats.map((s) => (
              <div key={s.l} className="flex flex-col gap-1.5 p-[32px]" style={{ background: "var(--t-bg)" }}>
                <div
                  className="text-[clamp(34px,4vw,56px)] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-gold)" }}
                >
                  {s.v}
                </div>
                <div className="text-sm" style={{ color: "var(--t-muted)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: "var(--t-sec)" }}>
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="gold">Committee & Patronage</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              The {ed.year} team.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6">
            {ed.team.map((t) => (
              <div
                key={t.role}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] p-8"
                style={{ background: "var(--t-card)", border: "1px solid var(--t-line)" }}
              >
                <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--t-gold)" }}>
                  {t.role}
                </div>
                <div
                  className="text-lg font-semibold leading-[1.4]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--t-fg)" }}
                >
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDEES */}
      <section className="section-pad">
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="gold">Awardees</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              Class of {ed.year}.
            </h2>
          </div>
          {awardees.length === 0 ? (
            <p className="m-0 max-w-[560px] text-lg" style={{ color: "var(--t-muted)" }}>
              Awardees for this edition will be announced here.
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
              {awardees.map((a) => (
                <Link key={a.slug} href={`/awardee/${a.slug}`} className="awardee-link card-lift block">
                  <AwardeeCard
                    photo={a.photo}
                    name={a.name}
                    category={a.category}
                    country={a.country}
                    year={a.year}
                    position={a.position}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
