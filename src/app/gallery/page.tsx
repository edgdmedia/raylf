import Image from "next/image";
import { useTheme } from "../components/use-theme";
import { SiteNav } from "../components/layout/site-nav";
import { SiteFooter } from "../components/layout/site-footer";
import { Button } from "../components/ui/button";
import { Eyebrow } from "../components/ui/eyebrow";
import { SocialLinks } from "../components/ui/social-links";
import { galleryPhotos, albumChips } from "../data/gallery";

export default function Gallery() {
  const { theme } = useTheme();
  const [album, setAlbum] = React.useState("All");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(-1);

  const filteredPhotos = album === "All"
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.album === album);

  const handleOpen = (index: number) => {
    setLightboxOpen(true);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setLightboxOpen(false);
    setCurrentIndex(-1);
  };

  const navigate = (delta: number) => {
    if (currentIndex === -1) return;
    const next = currentIndex + delta;
    const length = filteredPhotos.length;
    if (next >= 0 && next < length) {
      setCurrentIndex(next);
    } else if (next < 0) {
      setCurrentIndex(length - 1);
    } else if (next >= length) {
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <SiteNav />
      <main>
        {/* Gallery Hero */}
        <section
          data-screen-label="Gallery Hero"
          style={{
            padding: "var(--container-pad) 140px",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: 400,
              background:
                "radial-gradient(50% 50% at 80% 30%, rgba(180, 73, 220, .45) 0%, rgba(180, 73, 220, 0) 70%)",
            }}
          />
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: "64px 0 16px",
                color: "#fff",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 1,
                letterSpacing: "-.04em",
                textWrap: "balance",
              }}
            >
              Celebrate the journey.
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: 640,
                color: "rgba(255, 255, 255, .8)",
                fontSize: 18,
                lineHeight: 1.6,
              }}
            >
              Celebrate your people.
            </p>
          </div>
        </section>

        {/* Album chips */}
        <section
          data-screen-label="Album Chips"
          style={{
            padding: "0 var(--container-pad) 140px",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {albumChips.map((chip) => (
              <button
                key={chip}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: `1px solid ${
                    album === chip ? "var(--t-gold)" : "rgba(255, 255, 255, .35)"
                  }`,
                  background: album === chip ? "var(--t-gold)" : "var(--t-chip)",
                  color: album === chip
                    ? theme === "dark" ? "#fff" : "#240145"
                    : "var(--t-fg)",
                  fontFamily: "'Manrope', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all .25s",
                  onClick: () => setAlbum(chip),
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section
          data-screen-label="Gallery Grid"
          style={{
            padding: "0 var(--container-pad) 140px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto-fill minmax(280px, 1fr)",
              gridAutoRows: 260,
              gridAutoFlow: "dense",
              gap: 20,
            }}
          >
            {filteredPhotos.map((photo, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 24,
                  background: `url(${photo.src}) center/cover`,
                  position: "relative",
                }}
              />
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(36, 1, 69, .92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <img
              src={filteredPhotos[currentIndex]?.src ?? ""}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 24,
              }}
            />
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 24,
                right: 28,
                background: "none",
                border: 0,
                color: "#fff",
                fontSize: 26,
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <button
              onClick={() => navigate(-1)}
              style={{
                position: "absolute",
                top: "50%",
                left: 28,
                width: 52,
                height: 52,
                borderRadius: 50,
                background: "rgba(255, 255, 255, .1)",
                color: "#fff3a8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button
              onClick={() => navigate(1)}
              style={{
                position: "absolute",
                top: "50%",
                right: 28,
                width: 52,
                height: 52,
                borderRadius: 50,
                background: "rgba(255, 255, 255, .1)",
                color: "#fff3a8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        )}

        {/* Follow band */}
        <section
          data-screen-label="Follow Band"
          style={{
            background: "radial-gradient(110% 70% at 50% 70%, #b449dc 0%, #6f26cf 28%, #5002b9 55%, #3f028e 100%)",
            padding: "var(--container-pad) 140px",
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 16,
                flexWrap: "wrap",
                width: "100%",
                maxWidth: 600,
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
              <SocialLinks
                tone={theme === "dark" ? "dark" : "light"}
                networks={["facebook", "x", "instagram"]}
                variant="pill"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}