interface AwardeeCardProps {
  photo: string;
  name: string;
  category?: string;
  year?: string;
  country?: string;
  position?: string;
}

export function AwardeeCard({ photo, name, category, year, country, position }: AwardeeCardProps) {
  return (
    <figure className="group relative m-0 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--t-shadow)]">
      <div
        className="aspect-[4/5] bg-cover"
        style={{ backgroundImage: `url(${photo})`, backgroundPosition: position ?? "center" }}
      />
      <div
        className="absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--overlay-scrim)" }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
        {category && (
          <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-200)]">
            {category}
          </div>
        )}
        <div
          className="text-[19px] font-semibold leading-[1.25]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </div>
        {(year || country) && (
          <div className="mt-1 text-[13px] opacity-80">
            {[country, year].filter(Boolean).join(" · ")}
          </div>
        )}
      </figcaption>
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: "var(--gradient-gold)" }}
      />
    </figure>
  );
}

export default AwardeeCard;
