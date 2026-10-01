export interface YearTab {
  year: string;
  label: string;
  tag: string;
  img: string;
  intro: string;
}

export interface Awardee {
  name: string;
  category: string;
  country: string;
  photo: string;
}

export const editions: YearTab[] = [
  {
    year: "2024",
    tag: "Edition IV",
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

export const categories = ["All", "Entrepreneurship", "Public Service", "Creative Arts", "Technology", "Philanthropy"];

export const awardeesDefault: Awardee[] = [
  {
    name: "Awardee Name",
    category: "Entrepreneurship",
    country: "Nigeria",
    photo: "/photos/speaker-portrait.jpg",
  },
  {
    name: "Awardee Name",
    category: "Public Service",
    country: "Ghana",
    photo: "/photos/award-greeting.jpg",
  },
  {
    name: "Awardee Name",
    category: "Creative Arts",
    country: "Kenya",
    photo: "/photos/award-certificate-03.jpg",
  },
  {
    name: "Awardee Name",
    category: "Technology",
    country: "South Africa",
    photo: "/photos/award-presentation-02.jpg",
  },
  {
    name: "Awardee Name",
    category: "Philanthropy",
    country: "Nigeria",
    photo: "/photos/award-certificate-01.jpg",
  },
  {
    name: "Awardee Name",
    category: "Entrepreneurship",
    country: "Rwanda",
    photo: "/photos/award-presentation-03.jpg",
  },
  {
    name: "Awardee Name",
    category: "Technology",
    country: "Egypt",
    photo: "/photos/award-presentation-02.jpg",
  },
  {
    name: "Awardee Name",
    category: "Creative Arts",
    country: "Senegal",
    photo: "/photos/award-certificate-02.jpg",
  },
];