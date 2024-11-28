import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import CoverParticles from "@/components/cover-particles";

const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Genao Multiservices | Coming Soon Page",
  description: "Coming Soon Page for Genao Multiservices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.className} bg-gradient-cover`}
      >
        <CoverParticles />
        {children}
      </body>
    </html>
  );
}
