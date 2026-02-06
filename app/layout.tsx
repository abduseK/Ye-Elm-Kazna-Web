import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./sections/nav";
import { myCustomFont } from "./fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// const amharicF = localFont({
//   src: "/fonts/NotoSerifEthiopic-ExtraCondensedBlack.ttf",
// });

// const amharicF = localFont({
//   src: "/fonts/NotoSerifEthiopic-ExtraCondensedBlack.ttf",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "የ ዒልም ካዝና",
  description:
    "A comprehensive collection of Islamic fatwas in Amharic, covering various topics and questions related to Islamic jurisprudence. Explore our extensive database of fatwas to find answers to your religious inquiries and gain insights into Islamic teachings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myCustomFont.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
