"use client";
import { useState, useEffect } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdSource } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import MainImage from "../public/main.jpg";
import Image from "next/image";
import fatwas from "./data/fatwas.json";

export default function DetailBody() {
  const [fatwa, setFatwa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get the ID from the URL
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");

      const foundFatwa = fatwas.find((entry) => entry.id.toString() === id);

      setFatwa(foundFatwa);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (!fatwa) {
    return <p>Fatwa Not Found</p>;
  }
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className=" text-white min-h-screen flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl w-full rounded-lg shadow-lg p-6 mb-6">
        <button
          onClick={handleBackClick} // Goes back to the previous page
          className="text-2xl mb-5"
          aria-label="Go back"
        >
          <IoMdArrowRoundBack />
        </button>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Left: Project Image */}

          <div className="lg:w-1/2">
            <Image
              src={MainImage}
              alt="Food Pick"
              className="rounded-lg w-full"
            />
          </div>

          {/* Right: Project Info */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold mb-2">{fatwa.title}</h1>
            <p className="text-gray-400 mb-4">{fatwa.description}</p>

            <div className="flex items-center space-x-2 mb-4">
              <MdSource className="text-xl" />
              <p className="text-sm text-gray-300"> {fatwa.source}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                {fatwa.tags["tags1"]}
              </span>
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                {fatwa.tags["tags2"]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Repository Stats */}
      <div className="max-w-3xl w-full bg-[#1c1c1e] rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <BsPatchQuestionFill />
          <span>{fatwa.question}</span>
        </h2>
        <p className="text-gray-400 mb-4">{fatwa.answer}</p>
        <div className="flex items-center justify-end text-gray-300">
          <p>📅 Last updated: 11/4/2024</p>
        </div>
      </div>
    </div>
  );
}
