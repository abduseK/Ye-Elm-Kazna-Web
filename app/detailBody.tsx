"use client";
import { useState, useEffect } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdSource } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import MainImage from "../public/detailImages/main.jpg";
import Image from "next/image";
import fatwas from "./data/fatwas.json";
import { CiCalendarDate } from "react-icons/ci";
import Footer from "./sections/footer";

// const images = [
//   "/../public/detailImages/main.jpg",
//   "/../public/detailImages/main2.jpg",
//   "/../public/detailImages/main3.jpeg",
//   "/../public/detailImages/main4.avif",
//   "/../public/detailImages/main5.avif",
//   "/../public/detailImages/main6.jpg",
//   "/../public/detailImages/main7.jpg",
//   "/../public/detailImages/main8.jpg",
// ];

// Add an interface for the Fatwa type
interface Fatwa {
  id: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  source: string;
  tags: {
    tags1: string[];
    tags2: string[];
    tags3?: string[];
    tags4?: string[];
    tags5?: string[];
  };
}

export default function DetailBody() {
  // Update the state type to be either Fatwa or null
  const [fatwa, setFatwa] = useState<Fatwa | null>(null);
  const [loading, setLoading] = useState(true);

  // const randomIndex = Math.floor(Math.random() * images.length);
  // const selectedImage = images[randomIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get the ID from the URL
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");

      const foundFatwa = fatwas.find((entry) => entry.id.toString() === id);

      if (foundFatwa) {
        // Ensure all required tag arrays are present
        setFatwa({
          ...foundFatwa,
          tags: {
            tags1: foundFatwa.tags.tags1 ?? [],
            tags2: foundFatwa.tags.tags2 ?? [],
            tags3: foundFatwa.tags.tags3 ?? [],
          },
        });
      } else {
        setFatwa(null);
      }

      setLoading(false);
    }, 500);

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
            <Image src={MainImage} alt="Image" className="rounded-lg w-full" />
          </div>

          {/* Right: Project Info */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold mb-2">{fatwa.title}</h1>
            <p className="text-gray-400 mb-4">{fatwa.description}</p>

            <div className="flex items-center space-x-2 mb-4">
              <MdSource className="text-xl" />
              <p
                dangerouslySetInnerHTML={{
                  __html: fatwa.source.replace(/, /g, "<br />"),
                }}
                className="text-sm text-gray-300"
              ></p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                {fatwa.tags["tags1"]}
              </span>
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                {fatwa.tags["tags2"]}
              </span>
              {fatwa.tags.tags3 && fatwa.tags.tags3.length > 0 && (
                <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                  {fatwa.tags["tags3"]}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Repository Stats */}
      <div className="max-w-3xl w-full bg-[#1c1c1e] rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <BsPatchQuestionFill />
          <span
            dangerouslySetInnerHTML={{
              __html: fatwa.question.replace(/, /g, "<br /> <br />"),
            }}
          ></span>
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: fatwa.answer.replace(/, /g, "<br /> <br />"),
          }}
          className="text-gray-400 mb-4"
        ></p>
        <div className="flex gap-3 items-center justify-end text-gray-300">
          <CiCalendarDate />
          <p>Last updated: August 31, 2025</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
