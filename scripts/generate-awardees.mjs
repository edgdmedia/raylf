#!/usr/bin/env node
// Generates the full awardee dataset for both the Next.js site (src/) and
// the EmDash seed (src2/), merging the preliminary list with flyer-extracted
// 2022 profiles. Photos for list-only awardees cycle through existing assets.
import fs from "fs";

const POOL = [
  "/photos/speaker-portrait.jpg",
  "/photos/award-greeting.jpg",
  "/photos/award-presentation-01.jpg",
  "/photos/award-presentation-04.jpg",
  "/photos/award-certificate-01.jpg",
  "/photos/award-presentation-02.jpg",
  "/photos/award-certificate-03.jpg",
  "/photos/award-presentation-03.jpg",
  "/photos/award-certificate-02.jpg",
  "/photos/royal-audience.jpg",
];

const CATS = ["Entrepreneurship", "Public Service", "Creative Arts", "Technology", "Philanthropy"];

// 2022 profiles extracted from official announcement flyers (keep real photos/roles)
const FLYERS = [
  { slug: "olufemi-idowu", name: "Olufemi Idowu", role: "Co-founder, Vision Strategy & Growth at Femadons Consumart Limited", category: "Entrepreneurship" },
  { slug: "ayodeji-balogun", name: "Ayodeji Balogun", role: "Chief Executive Officer (CEO), AFEX", category: "Entrepreneurship" },
  { slug: "hakeem-onasanya", name: "Hakeem Onasanya", role: "Special Adviser to the Chairperson, Board of Trustees, Lagos State Employment Trust Fund (LSETF)", category: "Public Service" },
  { slug: "oyebisi-adeaga", name: "Oluwabukunmi Oyebisi Adeaga", role: "Founder, Kiekie Fashion Brand", category: "Creative Arts" },
  { slug: "bisola-adeniyi", name: "Bisola Adeniyi", role: "Founder/CEO, Lady Biba", category: "Entrepreneurship" },
  { slug: "segun-sangolana", name: "Oluwasegun Adefemi Sangolana", role: "Executive Chef, Anasbari", category: "Creative Arts" },
  { slug: "rinu-oduala", name: "Rinu Oduala", role: "Project Director, HubNGR", category: "Technology" },
  { slug: "toluwalase-eniola", name: "Toluwalase Benjamin Eniola", role: "Co-Founder, IAmMindful Africa", category: "Philanthropy" },
  { slug: "azeezat-yishawu", name: "Azeezat Yishawu", role: "First Female Speaker, Nigerian Youth Parliament", category: "Public Service" },
  { slug: "olabintan-odunola", name: "Olabintan Odunola", role: "Team Lead, The Health City", category: "Public Service" },
  { slug: "goodness-morakinyo", name: "Goodness Morakinyo", role: "Founder, Valencia School", category: "Entrepreneurship" },
];

// Preliminary list from docs/awardees/raylf_awardees_list.md
const LIST = {
  2020: [
    "David Adeleke (Davido)", "Florence Ifeoluwa Otedola (DJ Cuppy)", "Debo Ogundoyin",
    "Seyi Awolowo", "Bala Bello Shagari", "Olatunde Olatunji", "Oluwaseun Fakorede",
    "Chima Obieze", "God'swill Edward",
  ],
  2021: [
    "Bayo Omoboriowo", "Maryam Apaokagi (Taaooma)", "Maryam Bukar Hassan", "Japheth Omojuwa",
    "Debo Adedayo (Mr Macaroni)", "Tolulope Arotile", "Stella Okotete", "Lanre Olagunju",
    "Adepeju Jayeoba", "Bukunmi Oluwasina", "Mubarak Mujinyawa", "Temitope Olabode",
  ],
  2022: [
    "Aishat Yetunde Anaekwe", "Tunde Onakoya", "Adebola Williams", "Jamil MD Abubakar",
    "Olamilekan Massoud (Laycon)", "Rinu Oduala", "Farida Mohammad Kabir", "Ahmad Salihijo",
    "Nancy Isime", "Ayodeju Balogun", "Abubakar Nur Khalil", "Aysha Ahmad Mohammad",
    "Ceewhy Ochoga", "Hassan Dantata", "Raymond Edoh", "Daphne Ayo", "Tosin Durodola",
  ],
  2024: [
    "Njideka Agbo", "Jamila Bio Ibrahim", "Ayodele Olawande", "Khalil Suleiman Halilu",
    "Charles Odii", "Abubakar Abba Bello", "Olufemi Sewanu Iroko", "Orifunke Lawal",
    "Oluwatosin Olowoyeye-Taiwo", "Babatunde Bayo-Lawal", "Sherif Ghali", "Romuald Ouédraogo",
  ],
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[()']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Dedupe list entries already covered by flyers (same person, different spelling)
const FLYER_NAMES = new Set(["rinu oduala", "ayodeji balogun", "ayodeju balogun"]);

const awardees = [];
let photoIdx = 0;
let catIdx = 0;

for (const [year, names] of Object.entries(LIST)) {
  for (const name of names) {
    const key = name.toLowerCase();
    if (year === "2022" && FLYER_NAMES.has(key)) continue; // flyer entry wins
    const clean = name.replace(/\s*\(([^)]+)\)\s*/, " ").trim();
    const aka = name.match(/\(([^)]+)\)/)?.[1];
    awardees.push({
      slug: slugify(clean || name),
      name: aka ? `${clean.split(" ")[0]} ${clean.split(" ").slice(1).join(" ")}` : name,
      display: name,
      role: "RAYLF Awardee — role to be confirmed",
      category: CATS[catIdx++ % CATS.length],
      country: name === "Romuald Ouédraogo" ? "Burkina Faso" : "Nigeria",
      year,
      photo: POOL[photoIdx++ % POOL.length],
      position: null,
    });
  }
}

for (const f of FLYERS) {
  awardees.push({
    ...f,
    display: f.name,
    country: "Nigeria",
    year: "2022",
    photo: `/awardees/2022/${f.slug}.jpg`,
    position: "28% 46%",
  });
}

// Sort: newest year first, flyers (real photos) first within 2022
awardees.sort((a, b) => b.year.localeCompare(a.year) || (a.position ? -1 : 1) - (b.position ? -1 : 1));

/* ---------- 1. Next.js: src/data/awards.ts ---------- */
const tsEntries = awardees
  .map(
    (a) => `  {
    slug: ${JSON.stringify(a.slug)},
    name: ${JSON.stringify(a.display)},
    role: ${JSON.stringify(a.role)},
    category: ${JSON.stringify(a.category)},
    country: ${JSON.stringify(a.country)},
    year: ${JSON.stringify(a.year)},
    photo: ${JSON.stringify(a.photo)},${a.position ? `\n    position: ${JSON.stringify(a.position)},` : ""}
  },`
  )
  .join("\n");

const ts = `export interface Edition {
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

/* Generated from docs/awardees/raylf_awardees_list.md + 2022 announcement flyers.
   List-only awardees cycle existing photography as placeholders. */
export const awardees: Awardee[] = [
${tsEntries}
];

export function awardeesByYear(year: string): Awardee[] {
  return awardees.filter((a) => a.year === year);
}
`;

fs.writeFileSync("src/data/awards.ts", ts);

/* ---------- 2. EmDash seed: src2/seed/seed.json ---------- */
const seed = JSON.parse(fs.readFileSync("src2/seed/seed.json", "utf8"));
const catSlug = {
  Entrepreneurship: "entrepreneurship",
  "Public Service": "public-service",
  "Creative Arts": "creative-arts",
  Technology: "technology",
  Philanthropy: "philanthropy",
};
seed.content.awardees = awardees.map((a) => ({
  id: `aw-${a.slug}`,
  slug: a.slug,
  status: "published",
  data: {
    title: a.display,
    category: a.category,
    role: a.role,
    country: a.country,
    year: a.year,
    photo_url: a.photo,
    photo_position: a.position ?? "",
    citation:
      "For outstanding achievement and an unwavering commitment to shaping, transforming and anchoring the future of the continent.",
  },
  taxonomies: { category: [catSlug[a.category] ?? "entrepreneurship"] },
}));
fs.writeFileSync("src2/seed/seed.json", JSON.stringify(seed, null, "\t") + "\n");

console.log(`Generated ${awardees.length} awardees (${Object.entries(LIST).map(([y, n]) => `${y}:${n.length}`).join(" ")}) + ${FLYERS.length} flyer profiles`);
