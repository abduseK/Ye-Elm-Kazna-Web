"use client";

import Body from "@/app/sections/body";
import NavBar from "@/components/nav";
import Footer from "./sections/footer";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <div className="text-white min-h-screen px-14 custom-bg md:px-64">
      <div className="scrollable-content no-scrollbar">
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
