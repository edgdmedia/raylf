import Image from "next/image";
import { useTheme } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import {
  facts,
  programmes,
  navLinks,
  editionData,
} from "../data/home";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/ui/eyebrow";
import { PillButton } from "../components/ui/pill-button";

export default function Home() {
  const { theme, toggleTheme, themeIcon } = useTheme();

  const words = [
    "Shaping",
    "Transforming",
    "Anchoring",
    "Young Leaders",
    "20 to 39",
    "RAYLF Awards",
    "G2G Millionaires",
  ];
  const marqueeRow = [...words, ...words, ...words, ...words];
  const marqueeItems = marqueeRow.map((w, i) => (
    <span
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 48,
        fontFamily: "'Poppins', system-ui, sans-serif",
        fontWeight: 600,
        fontSize: 28,
        letterSpacing: "-.01em",
        color: i % 2 ? "#fff" : "#f2b84b",
        whiteSpace: "nowrap",
      }}
    >
      {w}
      <i
        className="fa-solid fa-star"
        style={{
          fontSize: 12,
          color: "rgba(255, 243, 168, .5)",
        }}
      />
    </span>
  ));

  const orbStyle = {
    position: "absolute" as const,
    right: "8%" as const,
    top: "18%" as const,
    width: 360 as const,
    height: 360 as const,
    borderRadius: "50%" as const,
    border: "1px solid rgba(255, 243, 168, .3)" as const,
    boxShadow:
      "inset 0 0 80px rgba(180, 73, 220, .35), 0 0 120px rgba(180, 73, 220, .3)" as const,
    animation: "raylf-pulse 6s ease-in-out infinite" as const,
    pointerEvents: "none" as const,
  };

  return (
    <>
      <SiteNav />
      <main className="relative">
        {/* Hero section */}
        <section
          id="top"
          data-screen-label="Hero"
          style={{
            position: "relative",
            marginTop: "-84px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            overflowX: "clip",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "url(/photos/award-stage-01.jpg) center/cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(36,1,69,.55) 0%, rgba(36,1,69,.35) 35%, rgba(36,1,69,.92) 78%, #240145 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(60% 50% at 78% 30%, rgba(180, 73, 220, .45) 0%, rgba(111, 38, 207, 0) 70%)",
            }}
          />
          {showGrid && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: [
                  "linear-gradient(rgba(255, 243, 168, .07) 1px, transparent 1px)",
                  "linear-gradient(90deg, rgba(255, 243, 168, .07) 1px, transparent 1px)",
                ],
                backgroundSize: "88px 88px",
                maskImage: "linear-gradient(180deg, transparent 0%, #000 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, transparent 0%, #000 40%, transparent 100%)",
              }}
            />
          )}
          <div
            style={{
              position: "absolute",
              right: "8%",
              top: "18%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              border: "1px solid rgba(255, 243, 168, .3)",
              boxShadow:
                "inset 0 0 80px rgba(180, 73, 220, .35), 0 0 120px rgba(180, 73, 220, .3)",
              animation: "raylf-pulse 6s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "180px var(--container-pad) 64px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 10,
                padding: "8px 16px 8px 10px",
                borderRadius: "999px",
                border: "1px solid rgba(255, 243, 168, .35)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fff3a8",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#f2b84b",
                  boxShadow: "0 0 12px #f2b84b",
                }}
              />
              Royal African Young Leadership Forum
            </div>
            <h1
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(52px, 10vw, 148px)",
                lineHeight: ".92",
                letterSpacing: "-.04em",
                textWrap: "balance",
                maxWidth: 1200,
              }}
            >
              A place for Africa{"'{'}{'}''}{''}
              <span
                style={{
                  background: "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Africa’s young leaders.
              </span>
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                gap: 32,
                alignItems: "end",
                borderTop: "1px solid rgba(255, 255, 255, .16)",
                paddingTop: 32,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, .82)",
                  maxWidth: 520,
                  textWrap: "pretty",
                }}
              >
                RAYLF recognises and convenes the most outstanding 20 to 39-year olds across the globe, shaping, transforming and anchoring the future of the continent.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  iconRight="fa-solid fa-arrow-right"
                  href="/awards"
                >
                  RAYLF Awards
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href="/about"
                >
                  About RAYLF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 243, 168, .16)",
            borderBottom: "1px solid rgba(255, 243, 168, .16)",
            background: "var(--violet-900)",
            padding: "22px 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "raylf-marquee 40s linear infinite",
            }}
          >
            {marqueeItems}
          </div>
        </div>

        {/* About section */}
        <section
          id="about"
          data-screen-label="About"
          style={{
            position: "relative",
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
              <div
                style={{
                  position: "absolute",
                  left: "-12",
                  bottom: 40,
                  padding: "18px 22px",
                  borderRadius: "16px",
                  background: "var(--violet-700)",
                  border: "1px solid rgba(255, 243, 168, .25)",
                  boxShadow: "0 20px 50px rgba(10, 0, 25, .5)",
                  maxWidth: 240,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "#fff3a8",
                    marginBottom: 6,
                  }}
                >
                  Royal Patron
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: 1.35,
                  }}
                >
                  His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <Eyebrow tone="gold">About RAYLF</Eyebrow>
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
                The spirit, soul and memory of Africa.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--t-muted)",
                  textWrap: "pretty",
                }}
              >
                RAYLF is a programme of the Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife. It exists to redefine centuries of the rich resilient spirit of African Kingdoms, which embodies many defining principles of its identity.
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
                Through the RAYLF Awards and programmes such as G2G Millionaires, we celebrate the success stories of young leaders and connect them to a lineage of royal patronage.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "1px",
                  background: "var(--t-line)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginTop: 12,
                }}
              >
                {facts.map((fact, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "22px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Poppins', system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 34,
                        letterSpacing: "-.03em",
                        color: "var(--t-gold)",
                      }}
                    >
                      {fact.v}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        lineHeight: 1.4,
                        color: "var(--t-muted)",
                      }}
                    >
                      {fact.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programmes section */}
        <section
          id="programmes"
          data-screen-label="Programmes"
          style={{
            position: "relative",
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
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 32,
                flexWrap: "wrap",
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
                <Eyebrow tone="gold">What We Do</Eyebrow>
                <h2
                  style={{
                    margin: 0,
                    color: "var(--t-fg)",
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(38px, 5vw, 68px)",
                    lineHeight: 1,
                    letterSpacing: "-.03em",
                  }}
                >
                  Find your place.
                </h2>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 400,
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: "var(--t-muted)",
                  }}
                >
                  Three ways RAYLF recognises, equips and connects young African leaders.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                  gap: 20,
                }}
              >
                {programmes.map((prog, i) => (
                  <a
                    key={i}
                    href={prog.href}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: 520,
                      borderRadius: "24px",
                      overflow: "hidden",
                      color: "#fff",
                      border: "1px solid rgba(255, 243, 168, .14)",
                      transition: "transform .35s cubic-bezier(.2,.7,.2,1), border-color .35s",
                      styleHover: {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(242, 184, 75, .7)",
                        color: "#fff",
                      },
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(${prog.img})`,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(36, 1, 69, .2) 0%, rgba(36, 1, 69, .55) 45%, rgba(36, 1, 69, .96) 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        padding: "24px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Poppins', system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: 14,
                          letterSpacing: ".1em",
                          color: "#fff3a8",
                        }}
                      >
                        {prog.n}
                      </span>
                      <span
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          border: "1px solid rgba(255, 255, 255, .5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="fa-solid fa-arrow-right"
                          style={{
                            transform: "rotate(-45deg)",
                          }}
                        />
                      </span>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        marginTop: "auto",
                        padding: "28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          color: "#fff",
                          fontFamily: "'Poppins', system-ui, sans-serif",
                          fontWeight: 700,
                          fontSize: 32,
                          letterSpacing: "-.02em",
                          lineHeight: 1.05,
                        }}
                      >
                        {prog.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "rgba(255, 255, 255, .8)",
                        }}
                      >
                        {prog.body}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote section */}
        <section
          data-screen-label="Quote"
          style={{
            position: "relative",
            padding: "160px var(--container-pad)",
            textAlign: "center",
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
              background: "rgba(36, 1, 69, .88)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 720,
              height: 720,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "1px solid rgba(255, 243, 168, .14)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 1040,
              height: 1040,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "1px solid rgba(255, 243, 168, .08)",
            }}
          />
          <div
            style={{
              position: "relative",
              maxWidth: 1000,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            <i
              className="fa-solid fa-quote-left"
              style={{
                fontSize: 40,
                color: "#f2b84b",
              }}
            />
            <blockquote
              style={{
                margin: 0,
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(28px, 3.6vw, 48px)",
                lineHeight: 1.25,
                letterSpacing: "-.015em",
                textWrap: "balance",
              }}
            >
              Young Africans are the spirit, soul and memory of Africa.
            </blockquote>
            <div
              style={{
                width: 70,
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#fff3a8",
              }}
            >
              His Imperial Majesty (H.I.M) Ooni of Ife
            </div>
          </div>
        </section>

        {/* Awards section */}
        <section
          id="awards"
          data-screen-label="Awards"
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
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  maxWidth: 760,
                }}
              >
                <Eyebrow tone="gold">RAYLF Awards</Eyebrow>
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
                  Every edition, a new generation.
                </h2>
                <PillButton
                  variant="outline-light"
                  size="lg"
                  href="/awards#awardees"
                  iconRight="fa-solid fa-arrow-right"
                >
                  Awardees
                </PillButton>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {editionData.map((ed, i) => (
                  <button
                    key={ed.year}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "999px",
                      border: `1px solid ${ed.year === "2024" ? "#fff3a8" : "rgba(255, 255, 255, .35)"}`,
                      background: ed.year === "2024" ? "#fff3a8" : "transparent",
                      color: ed.year === "2024" ? "#240145" : "#fff",
                      fontFamily: "'Poppins', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                      transition: "all .25s",
                    }}
                  >
                    {ed.year}
                  </button>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: 20,
              }}
            >
              {editionData.map((ed, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    aspectRatio: "3 / 4",
                    border: "1px solid rgba(255, 243, 168, .14)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${ed.img})`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(36, 1, 69, .1) 0%, rgba(36, 1, 69, .88) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      padding: "22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: "rgba(36, 1, 69, .7)",
                        border: "1px solid rgba(255, 243, 168, .3)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "#fff3a8",
                      }}
                    >
                      {ed.tag}
                    </span>
                    <div
                      style={{
                        fontFamily: "'Poppins', system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 64,
                        lineHeight: 1,
                        letterSpacing: "-.04em",
                      }}
                    >
                      {ed.year}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "rgba(255, 255, 255, .8)",
                      }}
                    >
                      {ed.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery teaser */}
        <section
          id="gallery"
          data-screen-label="Gallery"
          style={{
            padding: "0 var(--container-pad) 140px",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridAutoRows: 220,
              gap: 16,
            }}
          >
            <div
              style={{
                gridColumn: "span 2",
                gridRow: "span 2",
                borderRadius: "24px",
                background: "url(/photos/award-presentation-04.jpg) center/cover",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                background: "url(/photos/speaker-portrait.jpg) center/cover",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                background: "url(/photos/award-greeting.jpg) center/cover",
              }}
            />
            <div
              style={{
                borderRadius: "24px",
                background: "radial-gradient(110% 70% at 50% 70%, #b449dc 0%, #6f26cf 28%, #5002b9 55%, #3f028e 100%)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#fff3a8",
                }}
              >
                Follow the journey
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    letterSpacing: "-.02em",
                  }}
                >
                  @royalafricanlyf
                </div>
                <i
                  className="fa-brands fa-instagram"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    background: "rgba(255, 255, 255, .08)",
                    color: "#fff",
                  }}
                />
                <span>royalafricanlyf.org</span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Mission */}
        <section
          data-screen-label="Global Mission"
          style={{
            position: "relative",
            background: "#240145",
            padding: "140px var(--container-pad)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "url(/brand/africa-world-map.jpg) center/cover",
              opacity: .5,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #240145 0%, rgba(36, 1, 69, .75) 55%, rgba(36, 1, 69, .35) 100%)",
            }}
          />
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <Eyebrow tone="light">Global Mission</Eyebrow>
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5vw, 68px)",
                lineHeight: 1,
                letterSpacing: "-.03em",
                textWrap: "balance",
                maxWidth: 760,
              }}
            >
              From Ile-Ife to the world.
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: 560,
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, .8)",
                textWrap: "pretty",
              }}
            >
              Africa’s economic prosperity, the blessings of its natural resources and the valuable inheritance of its creative culture, carried forward by young leaders across every continent.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="join"
          data-screen-label="Join"
          style={{
            padding: "120px var(--container-pad)",
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
                "linear-gradient(180deg, #4403a7 0%, #5002b9 40%, #6f26cf 75%, #b449dc)",
              padding: "96px 48px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: -360,
                width: 720,
                height: 720,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(242, 184, 75, .45) 0%, rgba(242, 184, 75, 0) 65%)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 88px)",
                lineHeight: ".95",
                letterSpacing: "-.04em",
                textWrap: "balance",
                maxWidth: 900,
              }}
            >
              There’s a place for you.
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: 560,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, .88)",
              }}
            >
              Discover the programmes through which RAYLF recognises, equips and connects young African leaders.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <PillButton
                variant="gold"
                size="lg"
                href="/programmes"
                iconRight="fa-solid fa-arrow-right"
              >
                Our Programmes
              </PillButton>
              <PillButton
                variant="outline-light"
                size="lg"
                href="/about"
              >
                About RAYLF
              </PillButton>
            </div>
          </div>
        </div>
        </section>

        {/* Footer */}
        <SiteFooter />
      </main>
    </>
  );
}