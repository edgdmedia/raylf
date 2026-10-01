const icons = {
  facebook: "fa-brands fa-facebook-f",
  x: "fa-brands fa-x-twitter",
  instagram: "fa-brands fa-instagram",
  youtube: "fa-brands fa-youtube",
};

export function SocialLinks({
  networks = ["facebook", "x", "instagram"],
  tone = "light",
  variant = "icons",
  handle = "royalafricanlyf",
  site = "raylf.org",
}: {
  networks?: string[];
  tone?: "light" | "dark";
  variant?: "icons" | "pill";
  handle?: string;
  site?: string;
}) {
  const dark = tone === "dark";

  if (variant === "pill") {
    return React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "#fff",
        borderRadius: "999px",
        padding: "10px 22px 10px 12px",
        boxShadow: "var(--shadow-md)",
        fontFamily: "'var(--font-body)'",
        fontWeight: 500,
        fontSize: 17,
        color: "var(--ink-900)",
      },
    }, networks.map((n) =>
      React.createElement("span", {
        key: n,
        style: {
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1.5px solid var(--ink-900)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
        },
      }, React.createElement("i", { className: icons[n] }))
    ), React.createElement("span", null, handle), React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "1.5px solid var(--ink-900)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        marginLeft: 10,
      },
    }, React.createElement("i", { className: "fa-solid fa-globe" })), React.createElement("span", null, site));
  }

  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
    },
  }, networks.map((n) =>
    React.createElement("a", {
      key: n,
      href: "#",
      "aria-label": n,
      style: {
        width: 38,
        height: 38,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: dark ? "rgba(255, 255, 255, .08)" : "var(--brand-primary)",
        color: dark ? "var(--gold-200)" : "#fff",
        fontSize: 15,
      },
    }, React.createElement("i", { className: icons[n] }))
  ));
}
export default SocialLinks;