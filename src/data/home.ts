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

export interface HomeNavLink {
  label: string;
  href: string;
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
    body:
      "Recognising young African leaders whose success stories are shaping the continent.",
    img: "/photos/award-presentation-01.jpg",
    href: "/awards",
  },
  {
    n: "02",
    title: "G2G Millionaires",
    body:
      "A programme equipping young founders to build enduring wealth and enterprise.",
    img: "/photos/award-presentation-02.jpg",
    href: "/programmes",
  },
  {
    n: "03",
    title: "Leadership Forum",
    body:
      "Convening young leaders under royal patronage to exchange ideas and build networks.",
    img: "/photos/speaker-portrait.jpg",
    href: "/programmes",
  },
];

export const navLinks: HomeNavLink[] = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Awards", href: "/awards" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/join" },
];

export const editionData = [
  { year: "2024", label: "Edition IV", img: "/photos/award-stage-01.jpg" },
  { year: "2022", label: "Edition III", img: "/photos/award-presentation-03.jpg" },
  { year: "2021", label: "Edition II", img: "/photos/award-presentation-02.jpg" },
  { year: "2020", label: "Edition I", img: "/photos/award-presentation-01.jpg" },
];