export function AwardeeCard({
  photo,
  name,
  category,
  year,
  country,
}: {
  photo: string;
  name: string;
  category: string;
  year: string;
  country: string;
}) {
  const [h, setH] = React.useState(false);

  return React.createElement("figure", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: 0,
      position: "relative",
      aspectRatio: "4/5",
      borderRadius: "var(--radius-lg, 24px)",
      overflow: "hidden",
      background: `url(${photo}) center/cover`,
      boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur-base)",
    },
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      opacity: h ? 1 : .9,
      transition: "opacity var(--dur-base)",
    },
  }), React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20,
      color: "#fff",
    },
  }, category && React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--gold-200)",
      marginBottom: 6,
    },
  }, category), React.createElement("div", {
    style: {
      fontFamily: "'var(--font-display)'",
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.25,
    },
  }, name), (year || country) && React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .8,
      marginTop: 4,
    },
  }, [country, year].filter(Boolean).join(" · "))), React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "var(--gradient-gold)",
      transform: h ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-slow) var(--ease-standard)",
    },
  }));
}
export default AwardeeCard;