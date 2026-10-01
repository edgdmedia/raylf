export interface AwardeeProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  category: string;
  year: string;
  photo: string;
}

export const sampleAwardee: AwardeeProfile = {
  name: "Awardee Name",
  role: "Role Name",
  location: "Country",
  bio:
    "Brief biography of the awardee describing their contributions and achievements. This space honors young African leaders who have made significant impacts in their fields.",
  category: "Entrepreneurship",
  year: "2024",
  photo: "/photos/speaker-portrait.jpg",
};