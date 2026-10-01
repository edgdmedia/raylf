export interface ProgrammeDetail {
  key: string;
  value: string;
}

export interface ProgrammeOffer {
  icon: string;
  title: string;
  body: string;
}

export interface OtherProgramme {
  title: string;
  body: string;
  img: string;
  href: string;
}

export const programmeContent: Record<
  string,
  {
    title: string;
    goldWord: string;
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    details: ProgrammeDetail[];
    email: string;
  }
> = {
  "g2g-millionaires": {
    title: "G2G",
    goldWord: "Millionaires",
    eyebrow: "The Programme",
    heading: "Building enduring wealth across the continent.",
    paragraphs: [
      "G2G Millionaires equips young African founders to build enterprises that last — connecting ambition to capital, mentorship and royal patronage.",
      "Participants join a cohort of vetted founders aged 20 to 39, gaining access to structured programmes, networks and convenings under the banner of the Royal African Foundation.",
    ],
    details: [
      { key: "For", value: "Founders aged 20–39" },
      { key: "Focus", value: "Enterprise & wealth creation" },
      { key: "Patronage", value: "The 51st Ooni of Ife" },
    ],
    email: "info@royalafrican.foundation",
  },
};

export const offers: ProgrammeOffer[] = [
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Structured Learning",
    body: "Workshops and masterclasses on building enduring, continent-scale enterprises.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Cohort & Network",
    body: "A vetted peer network of young founders, mentors and patrons across the diaspora.",
  },
  {
    icon: "fa-solid fa-crown",
    title: "Royal Patronage",
    body: "Recognition and convening under the lineage of the Royal African Foundation.",
  },
];

export const momentPhotos = [
  "/photos/award-presentation-02.jpg",
  "/photos/award-presentation-04.jpg",
  "/photos/award-certificate-03.jpg",
];

export const otherProgrammes: OtherProgramme[] = [
  {
    title: "RAYLF Awards",
    body: "Recognising young African leaders whose success stories are shaping the continent.",
    img: "/photos/award-presentation-01.jpg",
    href: "/awards",
  },
  {
    title: "Leadership Forum",
    body: "Convening young leaders under royal patronage to exchange ideas and build networks.",
    img: "/photos/speaker-portrait.jpg",
    href: "/programmes",
  },
];
