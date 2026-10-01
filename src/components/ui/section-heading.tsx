export function SectionHeading({
  kicker,
  title,
  body,
  invert = false,
}: {
  kicker?: string;
  title: string;
  body?: string;
  invert?: boolean;
}) {
  const textColor = invert ? "text-white" : "text-brand-black";
  const mutedColor = invert ? "text-white/70" : "text-brand-muted";

  return React.createElement(
    "div",
    { className: "max-w-3xl" },
    kicker && React.createElement("p", { className: "text-[12px] font-bold uppercase tracking-[0.14em] mb-2" }, kicker),
    React.createElement(
      "h2",
      {
        className: `
          mt-4 font-display font-black tracking-[-0.03em] 
          ${textColor} md:text-5xl
        `,
      },
      title
    ),
    body && React.createElement(
      "p",
      {
        className: `
          mt-4 text-base leading-relaxed md:text-lg ${mutedColor}
        `,
      },
      body
    )
  );
}
export default SectionHeading;