export interface ProgrammeCard {
  n: string;
  title: string;
  body: string;
  img: string;
  href: string;
}

export const programmes: ProgrammeCard[] = [
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
    href: "/programme/g2g-millionaires",
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