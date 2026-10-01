import Image from "next/image";
import { useTheme } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import { AwardeeCard } from "../components/ui/awardee-card";
import { sampleAwardee } from "../data/awardee";
import { Button } from "../components/ui/button";

export default function Awardee() {
  const { theme } = useTheme();

  return (
    <>
      <SiteNav />
      <main>
        {/* Profile Hero */}
        <section
          data-screen-label="Profile Hero"
          style={{
            position: "relative",
            background: "#240145",
            color: "#fff",
            overflowX: "clip",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "180px var(--container-pad) 80px",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  position: "relative",
                  width: 400,
                  height: 400,
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "url(/photos/speaker-portrait.jpg) center/cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  width: 96,
                  height: 96,
                  borderRadius: 50,
                  background:
                    "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "4px solid #fff",
                }}
              >
                <i
                  className="fa-solid fa-trophy"
                  style={{ fontSize: 32, color: "#fff" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  background: "rgba(36, 1, 69, .8)",
                  borderRadius: 50,
                  padding: "8px 12px",
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#fff3a8",
                }}
              >
                2024
              </div>
            </div>
            <div>
              <Eyebrow>RAYLF Awards</Eyebrow>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "rgba(255, 255, 255, .7)",
                  }}
                >
                  RAYLF Awards
                </span>
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ fontSize: 10, color: "rgba(255, 255, 255, .7)" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(48px, 7vw, 104px)",
                  color: "#fff",
                }}
              >
                Awardee Name
              </span>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255, 255, 255, .8)",
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "#f2b84b",
                  }}
                >
                  <i className="fa-solid mdi-localization" style={{ fontSize: 12 }} />
                  Location
                </span>
                <span>Country</span>
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  color: "rgba(255, 255, 255, .8)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "#f2b84b",
                  }}
                >
                  <i className="fa-solid mdi-marker" style={{ fontSize: 12 }} />
                  Role
                </span>
                <span>Role Name</span>
              </div>
              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, .8)",
                }}
              >
                Brief biography of the awardee describing their contributions and achievements. This space honors young African leaders who have made significant impacts in their fields.
              </p>
              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="gold"
                  size="sm"
                  iconRight="fa-solid fa-arrow-right"
                  href="#"
                >
                  View Citation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Award Citation */}
        <section
          data-screen-label="Award Citation"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "64px var(--container-pad)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(26px, 3vw, 40px)",
              color: "#fff3a8",
            }}
          >
            "Award citation text describing the recipient's outstanding contributions to African leadership and society."
          </p>
          <div
            style={{
              width: 70,
              height: 3,
              borderRadius: 3,
              background: "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
              margin: "24px 0",
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
        </section>

        {/* Moments */}
        <section
          data-screen-label="Moments"
          style={{
            padding: "140px var(--container-pad)",
            background: "var(--t-sec)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(4:3, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-01.jpg) center/cover",
                aspectRatio: "4 / 3",
              }}
            />
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-02.jpg) center/cover",
                aspectRatio: "4 / 3",
              }}
            />
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-certificate-03.jpg) center/cover",
                aspectRatio: "4 / 3",
              }}
            />
          </div>
        </section>

        {/* More from the class */}
        <section
          data-screen-label="More from the class"
          style={{
            padding: "140px var(--container-pad)",
            background: "var(--t-sec)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: 20,
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <AwardeeCard
                key={i}
                photo="/photos/speaker-portrait.jpg"
                name="Awardee Name"
                category="Entrepreneurship"
                country="Nigeria"
                year="2024"
                hintSize="100%, 320px"
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}