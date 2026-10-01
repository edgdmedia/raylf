import Image from "next/image";
import { useTheme } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import { RoyalQuote } from "../components/ui/royal-quote";
import { details, offers } from "../data/programme-detail";
import { Button } from "../components/ui/button";

export default function Programme() {
  const { theme } = useTheme();

  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section
          data-screen-label="Programme Hero"
          style={{
            position: "relative",
            marginTop: "-84px",
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "#240145",
            overflowX: "clip",
          }}
        >
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
              <span>Programmes</span>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
              <span style="color: #fff3a8">G2G Millionaires</span>
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
              G2G <span
                style={{
                  background:
                    "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Millionaires
              </span>
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section
          data-screen-label="Overview"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr / minmax(280px, 1fr)",
            gap: 40,
            padding: "140px var(--container-pad)",
          }}
        >
          <div>
            <Eyebrow tone="gold">Overview</Eyebrow>
            <h2
              style={{
                margin: 0,
                color: "var(--t-fg)",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 4.5vw, 60px)",
                lineHeight: 1,
                letterSpacing: "-.03em",
                textWrap: "balance",
              }}
            >
              Find your place.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--t-muted)",
                textWrap: "pretty",
              }}
            >
              The G2G Millionaires programme equips young African founders to build enduring wealth and enterprise. Through mentorship, leadership training, and royal patronage, participants gain the skills and networks needed to create lasting impact across the continent.
            </p>
            <p
              style={{
                margin: 0,
                marginTop: 24,
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--t-muted)",
                textWrap: "pretty",
              }}
            >
              Since its inception, the programme has supported numerous young leaders in transforming their ventures and contributing to Africa's economic growth.
            </p>
          </div>
          <div>
            <RoyalQuote
              tone="dark"
              size="lg"
              attribution="His Imperial Majesty (H.I.M) Ooni of Ife"
            >
              Young Africans are the spirit, soul and memory of Africa.
            </RoyalQuote>
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
            <Button
              variant="gold"
              size="lg"
              iconRight="fa-solid fa-arrow-right"
              href="mailto:enquiry@royalafrican.foundation"
            >
              Enquire
            </Button>
          </div>
        </section>

        {/* What the programme offers */}
        <section
          data-screen-label="Offer Cards"
          style={{
            display: "flex",
            gap: 24,
            padding: "140px var(--container-pad)",
          }}
        >
          {offers.map((offer, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                minHeight: 200,
                background: "var(--violet-800)",
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 50,
                  background:
                    "linear-gradient(100deg, #c48a1f 0%, #f2b84b 48%, #d29b29 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "24px auto 0",
                }}
              >
                <i
                  className={offer.icon}
                  style={{ fontSize: 24, color: "var(--violet-950)" }}
                />
              </div>
              <div
                style={{
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Poppins', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 1.25,
                    color: "#fff",
                    letterSpacing: "-.02em",
                  }}
                >
                  {offer.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, .8)",
                  }}
                >
                  {offer.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Moments - 3-column photo mosaic */}
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
              gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
              gridAutoRows: 280,
              gap: 20,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/speaker-portrait.jpg) center/cover",
              }}
            />
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-02.jpg) center/cover",
              }}
            />
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-01.jpg) center/cover",
              }}
            />
          </div>
        </section>

        {/* Other programmes */}
        <section
          data-screen-label="Other Programmes"
          style={{
            padding: "140px var(--container-pad)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-03.jpg) center/cover",
                position: "relative",
              }}
            />
            <div
              style={{
                borderRadius: 24,
                background: "url(/photos/award-presentation-04.jpg) center/cover",
                position: "relative",
              }}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}