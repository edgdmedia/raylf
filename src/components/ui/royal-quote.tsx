export function RoyalQuote({
  children,
  attribution,
  tone = "light",
  size = "md",
}: {
  children: React.ReactNode;
  attribution: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const dark = tone === "dark";
  const fontSize = size === "lg" ? 26 : 20;

  return React.createElement(
    "figure",
    {
      style: {
        margin: 0,
        borderLeft: "4px solid var(--gold-600)",
        borderRadius: 4,
        paddingLeft: 24,
        maxWidth: 760,
      },
    },
    React.createElement(
      "blockquote",
      {
        style: {
          margin: 0,
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: fontSize,
          lineHeight: 1.5,
          color: dark ? "#fff" : "var(--brand-primary)",
          textWrap: "pretty",
        },
      },
      "\u201C",
      children,
      "\u201D"
    ),
    React.createElement(
      "figcaption",
      {
        style: {
          marginTop: 14,
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: dark ? "var(--gold-200)" : "var(--gold-700)",
        },
      },
      "\u2014 ",
      attribution
    )
  );
}
export default RoyalQuote;