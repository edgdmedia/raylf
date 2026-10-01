export interface HeroFact {
  v: string;
  l: string;
}

export interface HeroProgramme {
  n: string;
  title: string;
  body: string;
  img: string;
  href: string;
}

export interface Edition {
  year: string;
  label: string;
  tag: string;
  img: string;
}

export const facts: HeroFact[] = [
  { v: "20–39", l: "Age range of RAYLF leaders" },
  { v: "4", l: "Award editions since 2020" },
  { v: "51st", l: "Ooni of Ife, Royal Patron" },
];

export const programmes: HeroProgramme[] = [
  {
    n: "01",
    title: "RAYLF Awards",
    body: "Recognising young African leaders whose success stories are shaping the continent.",
    img: "/photos/award-presentation-01.jpg",
    href: "/awards",
  },
  {
    n: "02",
    title: "G2G Millionaires",
    body: "A programme equipping young founders to build enduring wealth and enterprise.",
    img: "/photos/award-presentation-02.jpg",
    href: "/programme/g2g-millionaires",
  },
  {
    n: "03",
    title: "Leadership Forum",
    body: "Convening young leaders under royal patronage to exchange ideas and build networks.",
    img: "/photos/speaker-portrait.jpg",
    href: "/programmes",
  },
];

export const marqueeWords = [
  "Shaping",
  "Transforming",
  "Anchoring",
  "Young Leaders",
  "20 to 39",
  "RAYLF Awards",
  "G2G Millionaires",
];

export const editions: Edition[] = [
  { year: "2024", label: "RAYLF Awards", tag: "Latest", img: "/photos/award-stage-01.jpg" },
  { year: "2022", label: "RAYLF Awards", tag: "Edition III", img: "/photos/award-presentation-03.jpg" },
  { year: "2021", label: "RAYLF Awards", tag: "Edition II", img: "/photos/award-presentation-02.jpg" },
  { year: "2020", label: "RAYLF Awards", tag: "Edition I", img: "/photos/award-presentation-01.jpg" },
];

export const galleryTeaser = [
  "/photos/award-presentation-04.jpg",
  "/photos/speaker-portrait.jpg",
  "/photos/award-greeting.jpg",
];
