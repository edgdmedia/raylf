export interface EditionStat {
  v: string;
  l: string;
}

export interface TeamMember {
  role: string;
  name: string;
}

export interface EditionDetail {
  year: string;
  tag: string;
  title: string;
  goldWord: string;
  location: string;
  venue: string;
  date: string;
  img: string;
  summary: string[];
  stats: EditionStat[];
  team: TeamMember[];
}

export const editionDetails: EditionDetail[] = [
  {
    year: "2026",
    tag: "Upcoming Edition",
    title: "RAYLF Awards",
    goldWord: "2026",
    location: "Ghana",
    venue: "To be announced",
    date: "2026",
    img: "/photos/royal-audience.jpg",
    summary: [
      "The 2026 edition is the upcoming RAYLF Awards, happening in Ghana this year. It carries the forum from Ile-Ife to West Africa — celebrating the most outstanding 20 to 39-year olds across the globe under royal patronage.",
      "Awardees, categories and the full programme of convenings will be announced ahead of the ceremony.",
    ],
    stats: [
      { v: "Ghana", l: "Host country" },
      { v: "TBA", l: "Awardees" },
      { v: "6", l: "Award categories" },
    ],
    team: [
      { role: "Royal Patron", name: "H.I.M Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife" },
      { role: "Organising Committee", name: "To be announced" },
    ],
  },
  {
    year: "2024",
    tag: "Latest Edition",
    title: "RAYLF Awards",
    goldWord: "2024",
    location: "Nigeria",
    venue: "To be confirmed",
    date: "2024",
    img: "/photos/award-stage-01.jpg",
    summary: [
      "The 2024 RAYLF Awards recognised young African leaders whose success stories are shaping, transforming and anchoring the future of the continent.",
      "A full edition summary, awardee profiles and ceremony highlights will be published here.",
    ],
    stats: [
      { v: "TBA", l: "Awardees" },
      { v: "6", l: "Award categories" },
      { v: "Nigeria", l: "Host country" },
    ],
    team: [
      { role: "Royal Patron", name: "H.I.M Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife" },
      { role: "Organising Committee", name: "To be announced" },
    ],
  },
  {
    year: "2022",
    tag: "Edition III",
    title: "Royal African",
    goldWord: "Awards 2022",
    location: "Ile-Ife, Nigeria",
    venue: "Oduduwa Hall, Obafemi Awolowo University",
    date: "May 20th – 22nd, 2022",
    img: "/photos/award-presentation-03.jpg",
    summary: [
      "The 2022 Royal African Awards gathered young leaders, royals and patrons at Oduduwa Hall, Obafemi Awolowo University, Ile-Ife for a three-day convening from May 20th to 22nd, 2022.",
      "The edition recognised outstanding achievers across enterprise, public service, the creative arts, technology and philanthropy — announced one by one under the royal RAYLF banner.",
    ],
    stats: [
      { v: "11+", l: "Awardees announced" },
      { v: "6", l: "Award categories" },
      { v: "3", l: "Days of convening" },
    ],
    team: [
      { role: "Royal Patron", name: "H.I.M Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife" },
      { role: "Convener", name: "Royal African Young Leadership Forum" },
      { role: "Presented by", name: "Arole Oodua Olofin Adimula" },
    ],
  },
  {
    year: "2021",
    tag: "Edition II",
    title: "RAYLF Awards",
    goldWord: "2021",
    location: "Nigeria",
    venue: "To be confirmed",
    date: "2021",
    img: "/photos/award-presentation-02.jpg",
    summary: [
      "The 2021 edition continued the RAYLF Awards tradition of recognising young African leaders aged 20 to 39 whose work is shaping the continent.",
      "A full edition summary and awardee profiles will be published here.",
    ],
    stats: [
      { v: "TBA", l: "Awardees" },
      { v: "6", l: "Award categories" },
      { v: "Nigeria", l: "Host country" },
    ],
    team: [
      { role: "Royal Patron", name: "H.I.M Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife" },
      { role: "Organising Committee", name: "To be announced" },
    ],
  },
  {
    year: "2020",
    tag: "Edition I",
    title: "RAYLF Awards",
    goldWord: "2020",
    location: "Nigeria",
    venue: "To be confirmed",
    date: "2020",
    img: "/photos/award-presentation-01.jpg",
    summary: [
      "The inaugural 2020 RAYLF Awards launched the tradition — recognising and convening the first class of outstanding young African leaders under royal patronage.",
      "A full edition summary and awardee profiles will be published here.",
    ],
    stats: [
      { v: "TBA", l: "Awardees" },
      { v: "6", l: "Award categories" },
      { v: "Nigeria", l: "Host country" },
    ],
    team: [
      { role: "Royal Patron", name: "H.I.M Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife" },
      { role: "Organising Committee", name: "To be announced" },
    ],
  },
];

export function editionDetail(year: string) {
  return editionDetails.find((e) => e.year === year);
}
