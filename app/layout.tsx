import type { Metadata } from "next";
import { Teko, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Diesel 4WD & Performance | Wangaratta Diesel Specialist",
  description:
    "Wangaratta's trusted diesel specialist. ECU remapping, DPF solutions, diesel diagnostics. 4.9★ from 123 Google reviews. Get it fixed right the first time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
