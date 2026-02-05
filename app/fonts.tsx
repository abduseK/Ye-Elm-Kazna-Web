import localFont from "next/font/local";

// If your file is in src/app/layout.tsx and font is in public/fonts/
export const myCustomFont = localFont({
  src: [
    {
      path: "../public/fonts/NotoSerifEthiopic-ExtraCondensedBlack.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom", // This creates a CSS variable
});
