import React from "react";

export function RoyalQuote({
  children,
  attribution,
  tone = "light",
  size = "md",
}: {
  children: React.ReactNode;
  attribution?: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const dark = tone === "dark";
  return (
    <figure
      className="m-0 max-w-[760px] rounded pl-6"
      style={{ borderLeft: "4px solid var(--gold-600)" }}
    >
      <blockquote
        className={`m-0 italic font-medium leading-normal text-balance ${
          size === "lg" ? "text-[26px]" : "text-xl"
        }`}
        style={{
          fontFamily: "var(--font-display)",
          color: dark ? "#fff" : "var(--brand-primary)",
        }}
      >
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption
          className="mt-3.5 text-[15px] font-bold"
          style={{
            fontFamily: "var(--font-body)",
            color: dark ? "var(--gold-200)" : "var(--gold-700)",
          }}
        >
          &mdash; {attribution}
        </figcaption>
      )}
    </figure>
  );
}

export default RoyalQuote;
