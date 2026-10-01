export interface AboutPillar {
  n: string;
  title: string;
  body: string;
}

export interface Milestone {
  year: string;
  label: string;
}

export const pillars: AboutPillar[] = [
  {
    n: "01",
    title: "Shaping",
    body:
      "Recognising young leaders early and setting a standard of excellence rooted in African heritage.",
  },
  {
    n: "02",
    title: "Transforming",
    body:
      "Equipping young Africans to turn ideas into enterprises, institutions and movements.",
  },
  {
    n: "03",
    title: "Anchoring",
    body:
      "Connecting each generation of leaders to the royal institutions and culture of the continent.",
  },
];

export const milestones: Milestone[] = [
  { year: "2020", label: "First edition of the RAYLF Awards" },
  { year: "2021", label: "Second edition of the RAYLF Awards" },
  { year: "2022", label: "Third edition of the RAYLF Awards" },
  { year: "2024", label: "Fourth edition of the RAYLF Awards" },
];