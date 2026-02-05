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
    "የዒልም ካዝና በዕለት ተዕለት ሕይወታችን ለሚገጥሙን ሃይማኖታዊ ጥያቄዎች አስተማማኝ እና ፈጣን ምላሾችን በአንድ ጣራ ስር የያዘ ዲጂታል መድረክ ነው። ይህ ፕሮጀክት በተለያዩ የሕይወት ዘርፎች—ከአምልኮ እስከ ማህበራዊ ግንኙነት—ያሉ ኢስላማዊ የሕግ ውሳኔዎችን (ፈታዋዎችን) በቀላሉ ተደራሽ ለማድረግ ታስቦ የተዘጋጀ የዕውቀት ማከማቻ ነው።",
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
