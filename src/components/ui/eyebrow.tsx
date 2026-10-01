export function Eyebrow({
  tone = "gold",
  children,
  style,
}: {
  tone?: "gold" | "light" | "purple" | "white";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const colors: Record<string, string> = {
    gold: "var(--gold-600)",
    light: "var(--gold-200)",
    purple: "var(--violet-500)",
    white: "#fff",
  };

  return React.createElement(
    "div",
    {
      style: {
        fontFamily: "'Manrope', system-ui, sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: colors[tone],
        ...style,
      },
    },
    children
  );
}
export default Eyebrow;