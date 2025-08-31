"use client";
import { useState } from "react";
import Image from "next/image";
import GitIcon from "../../public/github2.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4">
      <div className="flex justify-between items-center py-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white"></h1>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 sm:gap-5 justify-center items-center">
          <button
            className="bg-white text-black py-1 sm:py-2 px-3 sm:px-5 rounded-full text-sm sm:text-base whitespace-nowrap"
            onClick={() =>
              window.open(
                "https://github.com/abduseK/Ye-Elm-Kazna/releases/tag/v2.0.0",
                "_blank"
              )
            }
          >
            Download App
          </button>
          <button
            className="border px-3 py-2 rounded-full text-sm sm:text-base flex items-center gap-1"
            onClick={() =>
              window.open(
                "https://github.com/abduseK/Ye-Elm-Kazna-Web",
                "_blank"
              )
            }
          >
            <Image src={GitIcon} alt="GitHub" width={20} height={20} />
            <span className="ml-2">Star</span>
          </button>
        </div>
      </div>
      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 px-6 mt-8">
          <button
            className="bg-white text-black py-2 px-5 rounded-full text-base whitespace-nowrap"
            onClick={() =>
              window.open(
                "https://github.com/abduseK/Ye-Elm-Kazna/releases/tag/v2.0.0",
                "_blank"
              )
            }
          >
            Download App
          </button>
          <button
            className="border px-5 py-2 rounded-full text-base flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://github.com/abduseK/Ye-Elm-Kazna-Web",
                "_blank"
              )
            }
          >
            <Image src={GitIcon} alt="GitHub" width={20} height={20} />
            <span className="ml-2">Star</span>
          </button>
        </div>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
