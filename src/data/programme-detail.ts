export interface ProgrammeDetail {
  key: string;
  label: string;
  value: string;
}

export interface ProgrammeOffer {
  icon: string;
  title: string;
  body: string;
}

export const details: ProgrammeDetail[] = [
  { key: "For", label: "For", value: "Young African founders" },
  { key: "Focus", label: "Focus", value: "Building enduring wealth" },
  { key: "Patronage", label: "Patronage", value: "Under royal guidance" },
];

export const offers: ProgrammeOffer[] = [
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Leadership Training",
    body:
      "Intensive programmes designed to build strategic thinking and enterprise skills.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Mentorship",
    body:
      "Connect with experienced mentors and industry leaders.",
  },
  {
    icon: "fa-solid fa-crown",
    title: "Royal Patronage",
    body:
      "Official recognition and support from the Royal African Foundation.",
  },
];