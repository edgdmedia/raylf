import React from "react";

export function Eyebrow({
  tone = "gold",
  children,
}: {
  tone?: "gold" | "light";
  children: React.ReactNode;
}) {
  return (
    <div className={`eyebrow ${tone === "light" ? "eyebrow-light" : "eyebrow-gold"}`}>
      {children}
    </div>
  );
}

export default Eyebrow;
