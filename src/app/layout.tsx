import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

// next/font downloads each font at build time and serves it from this site,
// so a visitor's browser never asks Google for anything.
const display = Archivo({
  subsets: ["latin"],
  // The width axis is what lets the headlines be set wider than normal.
  axes: ["wdth"],
  variable: "--font-archivo",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sam Blaha | Web, blockchain and Flutter developer",
  description:
    "Sam Blaha builds products end to end: Provven, verified credentials for truck drivers on Midnight, and Riffster, a practice app for bass and guitar in Flutter.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} motion-safe:scroll-smooth`}
    >
      <body className="bg-ink font-sans text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
