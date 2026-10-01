import Image from "next/image";
import { useTheme } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import { SectionHeading } from "../components/ui/section-heading";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/ui/eyebrow";
import { RoyalQuote } from "../components/ui/royal-quote";
import { pillars, milestones } from "../data/about";

export default function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <SiteNav />
      <main>
        {/* About Hero */}
        <section
          data-screen-label="About Hero"
          style={{
            position: "relative",
            marginTop: "-84px",
            minHeight: "78vh",
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
              background: "url(/photos/royal-audience.jpg) center/cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(36, 1, 69, .6) 0%, rgba(36, 1, 69, .45) 40%, rgba(36, 1, 69, .95) 85%, #240145 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "200px var(--container-pad) 72px",
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
              <a href="/" style={{ color: "rgba(255, 255, 255, .7)" }}>
                Home
              </a>
              <i
                className="fa-solid fa-chevron-right"
                style={{ fontSize: 10 }}
              />
              <span style="color: #fff3a8">About</span>
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
              Our <span
                style={{
                  background:
                    "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                History
              </span>
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: 640,
                fontSize: 19,
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, .82)",
                textWrap: "pretty",
              }}
            >
              A programme of the Royal African Foundation, convening the most outstanding 20 to 39-year olds across the globe under royal patronage.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section
          data-screen-label="Who We Are"
          style={{
            padding: "140px var(--container-pad)",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                position: "sticky",
                top: 120,
              }}
            >
              <Eyebrow tone="gold">Who We Are</Eyebrow>
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
                Rooted in the Kingdoms of Africa.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 20,
                  lineHeight: 1.65,
                  color: "var(--t-fg)",
                  textWrap: "pretty",
                }}
              >
                RAYLF's mission is to redefine centuries of the rich resilient spirit of African Kingdoms which embodies many defining principles of its identity.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--t-muted)",
                  textWrap: "pretty",
                }}
              >
                The Royal African Young Leadership Forum is a programme of the Royal African Foundation of His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife. It recognises and convenes young African leaders aged 20 to 39, chiefly through the RAYLF Awards.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--t-muted)",
                  textWrap: "pretty",
                }}
              >
                Through the Awards and programmes such as G2G Millionaires, RAYLF celebrates the success stories of young leaders and connects them to Africa's economic prosperity, the blessings of its natural resources and the valuable inheritance of its creative culture.
              </p>
              <div
                style={{
                  aspectRatio: "16 / 10",
                  borderRadius: "24px",
                  background: "url(/photos/award-presentation-03.jpg) center/cover",
                  boxShadow: "var(--t-shadow)",
                }}
              />
            </div>
            <div></div>
          </div>
        </section>

        {/* Mission */}
        <section
          data-screen-label="Pillars"
          style={{
            padding: "120px var(--container-pad)",
            background: "var(--t-sec)",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 56,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                maxWidth: 720,
              }}
            >
              <Eyebrow tone={theme === "dark" ? "light" : "gold"}>Our Mission</Eyebrow>
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
                Shaping. Transforming. Anchoring.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "1px",
                background: "var(--t-line)",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  style={{
                    padding: "40px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    minHeight: 280,
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: ".1em",
                      color: "var(--t-gold)",
                    }}
                  >
                    {pillar.n}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      marginTop: "auto",
                      color: "var(--t-fg)",
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      letterSpacing: "-.02em",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--t-muted)",
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Royal Patron */}
        <section
          data-screen-label="Royal Patron"
          style={{
            position: "relative",
            padding: "140px var(--container-pad)",
            background: "#240145",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -200,
              top: "50%",
              width: 800,
              height: 800,
              transform: "translateY(-50%)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(180, 73, 220, .35) 0%, rgba(180, 73, 220, 0) 65%)",
            }}
          />
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "24px -24px -24px 24px",
                  border: "2px solid var(--gold-500)",
                  borderRadius: "24px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: "24px",
                  background: "url(/photos/his-majesty-throne.jpg) center/cover",
                  boxShadow: "0 30px 80px rgba(10, 0, 25, .6)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <Eyebrow tone="light">Royal Patron</Eyebrow>
              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(34px, 4vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-.03em",
                  textWrap: "balance",
                }}
              >
                His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, .8)",
                }}
              >
                The 51st Ooni of Ife and founder of the Royal African Foundation, under whose patronage RAYLF recognises young African leaders.
              </p>
              <i
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 1.5,
                  color: "#fff3a8",
                }}
              >
                "Young Africans are the spirit, soul and memory of Africa."
              </i>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section
          data-screen-label="Timeline"
          style={{
            padding: "140px var(--container-pad)",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 64,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <Eyebrow tone="gold">Milestones</Eyebrow>
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
                The RAYLF Awards
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                gap: 32,
              }}
            >
              {milestones.map((m) => (
                <a
                  key={m.year}
                  href="/awards"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    color: "var(--t-fg)",
                    styleHover: { color: "var(--t-fg)" },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                        boxShadow: "0 0 16px rgba(242, 184, 75, .6)",
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        height: 2,
                        borderRadius: 2,
                        background: "var(--t-line)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 72,
                      lineHeight: 1,
                      letterSpacing: "-.04em",
                    }}
                  >
                    {m.year}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--t-muted)",
                    }}
                  >
                    {m.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          data-screen-label="CTA"
          style={{
            padding: "0 var(--container-pad) 120px",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: 1320,
              margin: "0 auto",
              borderRadius: 32,
              overflow: "hidden",
              background:
                "linear-gradient(180deg, rgba(36, 1, 69, .88) , rgba(36, 1, 69, .88)), url(/brand/africa-world-map.jpg) center/cover",
              padding: "80px 48px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(34px, 4.5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-.03em",
                textWrap: "balance",
                maxWidth: 640,
              }}
            >
              Explore our programmes.
            </h2>
            <PillButton
              variant="gold"
              size="lg"
              href="/programmes"
              iconRight="fa-solid fa-arrow-right"
            >
              Programmes
            </PillButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}