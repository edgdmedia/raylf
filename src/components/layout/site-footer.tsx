export function SiteFooter() {
  return React.createElement(
    "footer",
    {
      style: {
        background: "var(--violet-950)",
        color: "var(--text-on-dark-muted)",
        padding: "72px var(--container-pad) 48px",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px var(--container-pad) 48px",
          display: "grid",
          gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)",
          gap: 48,
        },
      },
      React.createElement("div", null, React.createElement("img", {
        src: "/logo/raylf-logo-white.png",
        alt: "RAYLF",
        height: 84,
        style: { display: "block", marginBottom: 18 },
      }), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 14,
          lineHeight: 1.7,
          maxWidth: 360,
        },
      }, "RAYLF's mission is to redefine centuries of the rich resilient spirit of African Kingdoms which embodies many defining principles of its identity"))),
      React.createElement("div", null, React.createElement("h5", {
        style: {
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: "#fff",
          margin: "0 0 18px",
        },
      }, "Important Links"), React.createElement("ul", {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        },
      }, React.createElement("li", {
        style: {
          display: "flex",
          gap: 10,
          alignItems: "center",
          fontSize: 14,
        },
      }, React.createElement("i", {
        className: "fa-solid fa-chevron-right",
        style: { fontSize: 10, color: "var(--gold-500)" },
      }), React.createElement("a", {
        href: "#",
        style: { color: "inherit" },
      }, "Royal African Foundation")))))),
      React.createElement("div", null, React.createElement("h5", {
        style: {
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: "#fff",
          margin: "0 0 18px",
        },
      }, "Contact"), React.createElement("a", {
        href: "mailto:info@royalafrican.foundation",
        style: {
          color: "var(--gold-200)",
          fontSize: 14,
        },
      }, "info@royalafrican.foundation")), React.createElement("div", {
        style: { marginTop: 22 },
      }, React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
        },
      }, React.createElement("div", {
        style: {
          fontSize: 13,
        },
      }, "\xA9 ", new Date().getFullYear(), " Royal African Young Leadership Forum"))))
    )
  );
}
export default SiteFooter;