import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMDB DARK",
  description: "Created by Maarten Speet",
};

import Header from "@/components/header"
import Search from "@/components/search"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased container mx-auto py-6 px-4 max-w-6xl dark`}
      >
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
