import type { Metadata } from "next";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import AwardsClient from "./awards-client";

export const metadata: Metadata = {
  title: "RAYLF Awards",
  description:
    "Every edition, a new generation. Explore the RAYLF Awards — recognising young African leaders whose success stories are shaping the continent.",
};

export default function AwardsPage() {
  return (
    <>
      <SiteNav />
      <AwardsClient />
      <SiteFooter />
    </>
  );
}
