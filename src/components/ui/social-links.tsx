const icons: Record<string, string> = {
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
  if (variant === "pill") {
    return (
      <div
        className="inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] bg-white px-[22px] py-2.5 pl-3 text-[17px] font-medium text-[var(--ink-900)] shadow-[var(--shadow-md)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {networks.map((n) => (
          <span
            key={n}
            className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px] border-[var(--ink-900)] text-sm"
          >
            <i className={icons[n]} />
          </span>
        ))}
        <span>{handle}</span>
        <span className="ml-2.5 inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px] border-[var(--ink-900)] text-sm">
          <i className="fa-solid fa-globe" />
        </span>
        <span>{site}</span>
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div className="flex gap-2.5">
      {networks.map((n) => (
        <a
          key={n}
          href="#"
          aria-label={n}
          className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full text-[15px]"
          style={{
            background: dark ? "rgba(255,255,255,.08)" : "var(--brand-primary)",
            color: dark ? "var(--gold-200)" : "#fff",
          }}
        >
          <i className={icons[n]} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
