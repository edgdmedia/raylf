import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal African Young Leadership Forum",
  description:
    "The Royal African Young Leadership Forum (RAYLF) - A programme of the Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        className="min-h-full bg-white font-sans text-brand-black antialiased"
        data-theme="dark"
      >
        {children}
      </body>
    </html>
  );
}