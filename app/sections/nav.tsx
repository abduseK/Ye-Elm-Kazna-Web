"use client";
// import ThemeToggler from "./toggle-icon";
import Image from "next/image";
import GitIcon from "../../public/github2.png";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-white"></h1>
        <div className="flex gap-2 sm:gap-5 justify-center items-center">
          {/* <ThemeToggler /> */}
          <button
            className="bg-white text-black py-1 sm:py-2 px-3 sm:px-5 rounded-full text-sm sm:text-base whitespace-nowrap"
            onClick={() =>
              window.open(
                "https://github.com/abduseK/Ye-Elm-Kazna/releases/tag/v1.0.0",
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
            <Image
              src={GitIcon}
              alt="GitHub"
              width={20}
              height={20}
              // style={{ fill: "white" }}
            />
            <span className="ml-2">Star</span>
          </button>
        </div>
      </div>
    </div>
  );
}
