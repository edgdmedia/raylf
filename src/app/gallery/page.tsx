import type { Metadata } from "next";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Celebrate the journey — moments from the RAYLF Awards, royal audiences and convenings.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <GalleryClient />
      <SiteFooter />
    </>
  );
}
