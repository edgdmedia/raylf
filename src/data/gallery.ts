export interface GalleryPhoto {
  src: string;
  album: string;
  span?: boolean;
}

export const albumChips = [
  "All",
  "Awards 2024",
  "Awards 2022",
  "Awards 2021",
  "Royal Audience",
];

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/photos/award-presentation-01.jpg", album: "Awards 2024", span: true },
  { src: "/photos/speaker-portrait.jpg", album: "Awards 2024" },
  { src: "/photos/award-greeting.jpg", album: "Awards 2022" },
  { src: "/photos/award-certificate-01.jpg", album: "Awards 2022" },
  { src: "/photos/award-presentation-03.jpg", album: "Awards 2021", span: true },
  { src: "/photos/his-majesty-throne.jpg", album: "Royal Audience" },
  { src: "/photos/royal-audience.jpg", album: "Royal Audience" },
  { src: "/photos/award-certificate-02.jpg", album: "Awards 2021" },
  { src: "/photos/award-presentation-04.jpg", album: "Awards 2024" },
  { src: "/photos/award-certificate-03.jpg", album: "Awards 2022" },
];
