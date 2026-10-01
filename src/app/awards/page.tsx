import Image from "next/image";
import { useTheme, usePathname } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/ui/eyebrow";
import { RoyalQuote } from "../components/ui/royal-quote";
import { AwardeeCard } from "../components/ui/awardee-card";
import { editions, categories, awardeesDefault } from "../data/awards";

export default function Awards() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [year, setYear] = React.useState("2024");
  const [cat, setCat] = React.useState("All");

  const filteredAwardees = awardeesDefault.filter(
    (a) => cat === "All" || a.category === cat
  );

  // Set year from URL if applicable
  if (pathname.includes("/awards/2024") || pathname.includes("/awards/2022")) {
    const matched = pathname.match(/\/awards\/(\d{4})/);
    if (matched) setYear(matched[1]);
  }

  return (
    <>
      <SiteNav />
      <main>
        {/* Awards Hero */}
        <section
          data-screen-label="Awards Hero"
          style={{
            position: "relative",
            marginTop: "-84px",
            minHeight: "86vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "#240145",
            overflowX: "clip",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url(/photos/award-stage-01.jpg)",
              transition: "background-image .4s",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(36, 1, 69, .55) 0%, rgba(36, 1, 69, .4) 40%, rgba(36, 1, 69, .95) 85%, #240145 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(50% 50% at 80% 30%, rgba(180, 73, 220, .4) 0%, rgba(180, 73, 220, 0) 70%)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "200px var(--container-pad) 56px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                color: "rgba(255, 255, 255, .7)",
              }}
            >
              <a href="/">Home</a>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
              <span style="color: #fff3a8">RAYLF Awards</span>
            </div>
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(52px, 9vw, 132px)",
                lineHeight: ".92",
                letterSpacing: "-.04em",
                textWrap: "balance",
              }}
            >
              RAYLF Awards <span
                style={{
                  background:
                    "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {year}
              </span>
            </h1>
            <span
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255, 243, 168, .35)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fff3a8",
              }}
            >
              {editions.find((e) => e.year === year)?.tag ?? "Latest"}
            </span>
            <p
              style={{
                margin: 0,
                maxWidth: 640,
                fontSize: 19,
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, .85)",
                textWrap: "pretty",
              }}
            >
              {editions.find((e) => e.year === year)?.intro ?? ""}
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                borderTop: "1px solid rgba(255, 255, 255, .16)",
                paddingTop: 24,
              }}
            >
              {editions.map((ed) => (
                <button
                  key={ed.year}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "999px",
                    border: `1px solid ${
                      year === ed.year ? "#fff3a8" : "rgba(255, 255, 255, .35)"
                    }`,
                    background: year === ed.year ? "#fff3a8" : "transparent",
                    color: year === ed.year ? "#240145" : "#fff",
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    transition: "all .25s",
                    onClick: () => setYear(ed.year),
                  }}
                >
                  {ed.year}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Awardees */}
        <section
          id="awardees"
          data-screen-label="Awardees"
          style={{
            padding: "120px var(--container-pad)",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <Eyebrow tone="gold">Awardees</Eyebrow>
              <h2
                style={{
                  margin: 0,
                  color: "var(--t-fg)",
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(38px, 5vw, 68px)",
                  lineHeight: 1,
                  letterSpacing: "-.03em",
                  textWrap: "balance",
                }}
              >
                Class of {year}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {categories.map((c) => (
                <button
                  key={c}
                  style={{
                    padding: "9px 18px",
                    borderRadius: "999px",
                    border: `1px solid ${
                      cat === c ? "var(--t-line)" : "rgba(255, 255, 255, .35)"
                    }`,
                    background: cat === c ? "var(--t-gold)" : "var(--t-chip)",
                    color: cat === c
                      ? theme === "dark"
                        ? "#fff"
                        : "#240145"
                      : "var(--t-fg)",
                    fontFamily: "'Manrope', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all .25s",
                    onClick: () => setCat(c),
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))",
              gap: 20,
            }}
          >
            {filteredAwardees.map((a, i) => (
              <a
                key={i}
                href="/awardee"
                style={{
                  display: "block",
                  transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
                  styleHover: {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <AwardeeCard
                  photo={a.photo}
                  name={a.name}
                  category={a.category}
                  country={a.country}
                  year={year}
                  hintSize="100%, 320px"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Ceremony */}
        <section
          data-screen-label="Ceremony"
          style={{
            position: "relative",
            padding: "140px var(--container-pad)",
            background: "#240145",
            color: "#fff",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: 72,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <Eyebrow tone="light">The Ceremony</Eyebrow>
              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(34px, 4.5vw, 60px)",
                  lineHeight: 1.02,
                  letterSpacing: "-.03em",
                  textWrap: "balance",
                }}
              >
                Presented under royal patronage.
              </h2>
              <RoyalQuote
                tone="dark"
                size="lg"
                attribution="His Imperial Majesty (H.I.M) Ooni of Ife"
              >
                Young Africans are the spirit, soul and memory of Africa.
              </RoyalQuote>
              <Button
                variant="outline-light"
                href="/gallery"
                iconRight="fa-solid fa-arrow-right"
              >
                Gallery
              </Button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridAutoRows: 220,
                gap: 16,
              }}
            >
              <div
                style={{
                  borderRadius: 24,
                  background: "url(/photos/award-certificate-01.jpg) center/cover",
                }}
              />
              <div
                style={{
                  borderRadius: 24,
                  background: "url(/photos/award-presentation-04.jpg) center/cover",
                }}
              />
              <div
                style={{
                  borderRadius: 24,
                  background: "url(/photos/award-certificate-02.jpg) center/cover",
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}