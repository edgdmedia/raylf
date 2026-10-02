import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Breadcrumbs } from "@/components/ui/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SocialLinks } from "@/components/ui/social-links";
import { AwardeeCard } from "@/components/ui/awardee-card";
import { awardees, awardeesByYear } from "@/data/awards";

const momentPhotos = [
  "/photos/award-presentation-01.jpg",
  "/photos/award-presentation-02.jpg",
  "/photos/award-certificate-03.jpg",
];

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return awardees.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = awardees.find((x) => x.slug === slug);
  return {
    title: a ? `${a.name} — ${a.category}` : "Awardee",
    description: a
      ? `${a.name}, RAYLF Awards ${a.category} awardee from ${a.country}.`
      : "A RAYLF Awards awardee.",
  };
}

export default async function AwardeePage({ params }: Props) {
  const { slug } = await params;
  const a = awardees.find((x) => x.slug === slug);
  if (!a) notFound();

  const more = awardeesByYear(a.year).filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <>
      <SiteNav />

      {/* PROFILE HERO — always dark */}
      <section className="relative -mt-[84px] pb-24 pt-[180px]" style={{ background: "#240145", color: "#fff" }}>
        <div className="grid-overlay" />
        <div className="container-raylf relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-16">
          {/* Portrait with gold frame + badge */}
          <div className="relative w-full max-w-[480px]">
            <div
              className="absolute rounded-[var(--radius-lg)]"
              style={{ inset: "24px -24px -24px 24px", border: "2px solid var(--gold-500)" }}
            />
            <div
              className="relative aspect-[4/5] rounded-[var(--radius-lg)] bg-cover"
              style={{
                backgroundImage: `url(${a.photo})`,
                backgroundPosition: a.position ?? "center",
                boxShadow: "0 30px 80px rgba(10,0,25,.6)",
              }}
            />
            <div
              className="absolute -left-6 -top-6 flex h-24 w-24 flex-col items-center justify-center rounded-full text-[var(--violet-950)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <i className="fa-solid fa-award text-2xl" />
              <span
                className="mt-1 text-xs font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {a.year}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Breadcrumbs
              items={[
                { label: "RAYLF Awards", href: "/awards" },
                { label: a.year, href: `/awards/${a.year}` },
                { label: a.name },
              ]}
            />
            <Eyebrow tone="light">{a.category}</Eyebrow>
            <h1
              className="text-[clamp(48px,7vw,104px)] leading-[1.05] tracking-[-0.04em] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {a.name}
            </h1>
            <div className="flex flex-wrap gap-6 text-[15px]">
              <span className="inline-flex items-center gap-2.5 text-white/85">
                <i className="fa-solid fa-location-dot text-[var(--gold-400)]" />
                {a.country}
              </span>
              <span className="inline-flex items-center gap-2.5 text-white/85">
                <i className="fa-solid fa-briefcase text-[var(--gold-400)]" />
                {a.category} · Class of {a.year}
              </span>
            </div>
            <p className="m-0 max-w-[560px] text-lg leading-[1.7] text-white/80">
              {a.role}. Recognised at the {a.year} RAYLF Awards for outstanding
              achievement in {a.category.toLowerCase()} and an unwavering
              commitment to shaping, transforming and anchoring the future of
              the continent.
            </p>
            <SocialLinks tone="dark" />
          </div>
        </div>
      </section>

      {/* AWARD CITATION */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1000px] px-[var(--container-pad)] text-center">
          <Eyebrow tone="gold">Award Citation</Eyebrow>
          <p
            className="mt-8 text-[clamp(26px,3vw,40px)] leading-[1.35] tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--t-fg)" }}
          >
            &ldquo;For outstanding achievement and an unwavering commitment to
            shaping, transforming and anchoring the future of the continent.&rdquo;
          </p>
          <div className="gold-rule mx-auto mt-8" />
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "var(--t-gold)" }}>
            Royal African Young Leadership Forum
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="pb-[140px]">
        <div className="container-raylf">
          <div className="mb-14 flex flex-col gap-5">
            <Eyebrow tone="gold">Moments</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              On the night.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {momentPhotos.map((src) => (
              <div
                key={src}
                className="aspect-[4/3] rounded-[var(--radius-lg)] bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MORE FROM THE CLASS */}
      <section className="section-pad" style={{ background: "var(--t-sec)" }}>
        <div className="container-raylf flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <Eyebrow tone="gold">Class of {a.year}</Eyebrow>
            <h2
              className="text-[clamp(38px,5vw,68px)] leading-[1.12] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--t-fg)" }}
            >
              More from the class.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-5">
            {more.map((m) => (
              <Link key={m.slug} href={`/awardee/${m.slug}`} className="awardee-link card-lift block">
                <AwardeeCard
                  photo={m.photo}
                  name={m.name}
                  category={m.category}
                  country={m.country}
                  year={m.year}
                  position={m.position}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
