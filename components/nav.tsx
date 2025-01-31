"use client";
import ThemeToggler from "./toggle-icon";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-white"></h1>
        <div className="flex gap-2 sm:gap-5 justify-center items-center">
          <ThemeToggler />
          <button className="bg-white text-black py-1 sm:py-2 px-3 sm:px-5 rounded-full text-sm sm:text-base whitespace-nowrap">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}
