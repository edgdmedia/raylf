export interface Edition {
  year: string;
  tag: string;
  img: string;
  intro: string;
}

export interface Awardee {
  slug: string;
  name: string;
  category: string;
  country: string;
  photo: string;
}

export const editions: Edition[] = [
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
      "The 2022 RAYLF Awards recognised young African leaders whose success stories are shaping, transforming and anchoring the future of the continent.",
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

export const awardees: Awardee[] = [
  { slug: "awardee-01", name: "Awardee Name", category: "Entrepreneurship", country: "Nigeria", photo: "/photos/speaker-portrait.jpg" },
  { slug: "awardee-02", name: "Awardee Name", category: "Public Service", country: "Ghana", photo: "/photos/award-greeting.jpg" },
  { slug: "awardee-03", name: "Awardee Name", category: "Creative Arts", country: "Kenya", photo: "/photos/award-certificate-03.jpg" },
  { slug: "awardee-04", name: "Awardee Name", category: "Technology", country: "South Africa", photo: "/photos/award-presentation-02.jpg" },
  { slug: "awardee-05", name: "Awardee Name", category: "Philanthropy", country: "Nigeria", photo: "/photos/award-certificate-01.jpg" },
  { slug: "awardee-06", name: "Awardee Name", category: "Entrepreneurship", country: "Rwanda", photo: "/photos/award-presentation-03.jpg" },
  { slug: "awardee-07", name: "Awardee Name", category: "Technology", country: "Egypt", photo: "/photos/award-presentation-04.jpg" },
  { slug: "awardee-08", name: "Awardee Name", category: "Creative Arts", country: "Senegal", photo: "/photos/award-certificate-02.jpg" },
];
