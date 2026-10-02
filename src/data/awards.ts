export interface Edition {
  year: string;
  tag: string;
  img: string;
  intro: string;
}

export interface Awardee {
  slug: string;
  name: string;
  role: string;
  category: string;
  country: string;
  year: string;
  photo: string;
  /** CSS background-position to frame the portrait inside announcement flyers */
  position?: string;
}

export const editions: Edition[] = [
  {
    year: "2026",
    tag: "Upcoming",
    img: "/photos/royal-audience.jpg",
    intro:
      "The 2026 RAYLF Awards is the upcoming edition, happening in Ghana this year — convening and celebrating the most outstanding young African leaders aged 20 to 39.",
  },
  {
    year: "2024",
    tag: "Latest",
    img: "/photos/award-stage-01.jpg",
    intro:
      "The 2024 RAYLF Awards recognised young African leaders whose success stories are shaping, transforming and anchoring the future of the continent.",
  },
  {
    year: "2022",
    tag: "Edition III",
    img: "/photos/award-presentation-03.jpg",
    intro:
      "The 2022 Royal African Awards were held May 20th–22nd at Oduduwa Hall, Obafemi Awolowo University, Ile-Ife — recognising young leaders across enterprise, service, arts and technology.",
  },
  {
    year: "2021",
    tag: "Edition II",
    img: "/photos/award-presentation-02.jpg",
    intro:
      "The 2021 RAYLF Awards recognised young African leaders whose success stories are shaping, transforming and anchoring the future of the continent.",
  },
  {
    year: "2020",
    tag: "Edition I",
    img: "/photos/award-presentation-01.jpg",
    intro:
      "The 2020 RAYLF Awards recognised young African leaders whose success stories are shaping, transforming and anchoring the future of the continent.",
  },
];

export const categories = [
  "All",
  "Entrepreneurship",
  "Public Service",
  "Creative Arts",
  "Technology",
  "Philanthropy",
];

/* 2022 awardees — names and roles from the official announcement cards */
export const awardees: Awardee[] = [
  {
    slug: "olufemi-idowu",
    name: "Olufemi Idowu",
    role: "Co-founder, Vision Strategy & Growth at Femadons Consumart Limited",
    category: "Entrepreneurship",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/olufemi-idowu.jpg",
    position: "28% 46%",
  },
  {
    slug: "ayodeji-balogun",
    name: "Ayodeji Balogun",
    role: "Chief Executive Officer (CEO), AFEX",
    category: "Entrepreneurship",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/ayodeji-balogun.jpg",
    position: "28% 46%",
  },
  {
    slug: "hakeem-onasanya",
    name: "Hakeem Onasanya",
    role: "Special Adviser to the Chairperson, Board of Trustees, Lagos State Employment Trust Fund (LSETF)",
    category: "Public Service",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/hakeem-onasanya.jpg",
    position: "28% 46%",
  },
  {
    slug: "oyebisi-adeaga",
    name: "Oluwabukunmi Oyebisi Adeaga",
    role: "Founder, Kiekie Fashion Brand",
    category: "Creative Arts",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/oyebisi-adeaga.jpg",
    position: "28% 46%",
  },
  {
    slug: "bisola-adeniyi",
    name: "Bisola Adeniyi",
    role: "Founder/CEO, Lady Biba",
    category: "Entrepreneurship",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/bisola-adeniyi.jpg",
    position: "28% 46%",
  },
  {
    slug: "segun-sangolana",
    name: "Oluwasegun Adefemi Sangolana",
    role: "Executive Chef, Anasbari",
    category: "Creative Arts",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/segun-sangolana.jpg",
    position: "28% 46%",
  },
  {
    slug: "rinu-oduala",
    name: "Rinu Oduala",
    role: "Project Director, HubNGR",
    category: "Technology",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/rinu-oduala.jpg",
    position: "28% 46%",
  },
  {
    slug: "toluwalase-eniola",
    name: "Toluwalase Benjamin Eniola",
    role: "Co-Founder, IAmMindful Africa",
    category: "Philanthropy",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/toluwalase-eniola.jpg",
    position: "28% 46%",
  },
  {
    slug: "azeezat-yishawu",
    name: "Azeezat Yishawu",
    role: "First Female Speaker, Nigerian Youth Parliament",
    category: "Public Service",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/azeezat-yishawu.jpg",
    position: "28% 46%",
  },
  {
    slug: "olabintan-odunola",
    name: "Olabintan Odunola",
    role: "Team Lead, The Health City",
    category: "Public Service",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/olabintan-odunola.jpg",
    position: "28% 46%",
  },
  {
    slug: "goodness-morakinyo",
    name: "Goodness Morakinyo",
    role: "Founder, Valencia School",
    category: "Entrepreneurship",
    country: "Nigeria",
    year: "2022",
    photo: "/awardees/2022/goodness-morakinyo.jpg",
    position: "28% 46%",
  },
];

export function awardeesByYear(year: string): Awardee[] {
  return awardees.filter((a) => a.year === year);
}
