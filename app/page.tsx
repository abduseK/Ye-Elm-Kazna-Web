"use client";

import Body from "@/app/sections/body";
import NavBar from "@/components/nav";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="text-white min-h-screen custom-bg md:px-52 ">
      <div className="scrollable-content no-scrollbar">
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
