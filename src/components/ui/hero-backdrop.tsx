"use client";

import { useEffect, useState } from "react";

export function HeroBackdrop({
  images,
  interval = 7000,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "#240145" }}>
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          className={`kenburns hero-slide absolute inset-0 bg-cover bg-center ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

export default HeroBackdrop;
