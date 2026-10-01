export interface GalleryPhoto {
  src: string;
  album: string;
  caption?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/photos/award-presentation-01.jpg",
    album: "Awards 2024",
  },
  {
    src: "/photos/speaker-portrait.jpg",
    album: "Awards 2024",
  },
  {
    src: "/photos/award-greeting.jpg",
    album: "Awards 2022",
  },
  {
    src: "/photos/award-certificate-01.jpg",
    album: "Awards 2022",
  },
  {
    src: "/photos/award-presentation-03.jpg",
    album: "Royal Audience",
  },
  {
    src: "/photos/his-majesty-throne.jpg",
    album: "Royal Audience",
  },
  {
    src: "/photos/royal-audience.jpg",
    album: "Royal Audience",
  },
  {
    src: "/photos/award-certificate-02.jpg",
    album: "Royal Audience",
  },
];