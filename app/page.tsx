"use client";

import Body from "@/app/sections/body";
import NavBar from "@/components/nav";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="text-white min-h-screen px-14 custom-bg md:px-64">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}
