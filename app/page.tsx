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
    // <div className="text-white min-h-screen custom-bg md:px-52 flex items-center justify-center">
    //   <div className="text-center">
    //     <h1 className="text-5xl md:text-7xl font-bold animate-pulse">
    //       Under Development
    //     </h1>
    //     <p className="mt-4 text-lg md:text-xl">
    //       I am working hard to bring you this website. Stay tuned!
    //     </p>
    //   </div>
    // </div>
  );
}
