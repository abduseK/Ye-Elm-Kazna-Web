"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsPatchQuestionFill, BsCheckAll } from "react-icons/bs";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import fatwas from "./data/fatwas.json";
import { CiCalendarDate } from "react-icons/ci";
import Footer from "./sections/footer";

// 1. Define your local images here
const localImages = [
  "/detailImages/main.jpg",
  "/detailImages/main3.jpeg",
  "/detailImages/main4.avif",
  "/detailImages/main5.avif",
  "/detailImages/main6.jpg",
  "/detailImages/main9.jpg",
  "/detailImages/main10.jpg",
  "/detailImages/main11.jpg",
  "/detailImages/main12.jpg",
  "/detailImages/main13.jpg",
  "/detailImages/main14.jpg",
];

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
  };
}

export default function DetailBody() {
  const router = useRouter();
  const [fatwa, setFatwa] = useState<Fatwa | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      const foundFatwa = fatwas.find((entry) => entry.id.toString() === id);

      if (foundFatwa) {
        setFatwa({
          ...foundFatwa,
          tags: {
            tags1: foundFatwa.tags.tags1 ?? [],
            tags2: foundFatwa.tags.tags2 ?? [],
            tags3: foundFatwa.tags.tags3 ?? [],
          },
        });
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!fatwa)
    return (
      <div className="text-white text-center mt-20 font-bold">
        Fatwa Not Found
      </div>
    );

  // 2. Logic to pick an image based on the ID
  // We use the ID to select an index so it's "random" but stays the same for each specific fatwa
  const imageIndex = parseInt(fatwa.id) % localImages.length;
  const selectedImage = localImages[imageIndex];

  return (
    <div className="text-white min-h-screen font-sans selection:bg-white/20">
      <main className="max-w-4xl mx-auto px-6 pt-8 pb-0">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-3 text-white hover:text-white transition-all group"
        >
          <div className="flex gap-2 text-center items-center py-2 px-5 rounded-full border border-white/5 group-hover:border-white/20 bg-[#1C1C1E]">
            <IoMdArrowRoundBack className="text-xl group-hover:-translate-x-1 transition-transform" />
            ተመለስ
          </div>
        </button>

        {/* Header */}
        <header className="mb-12 text-left">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.values(fatwa.tags)
              .flat() // Merges tags1, tags2, tags3 arrays into one flat list
              .filter(Boolean) // Removes any undefined or empty strings
              .map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 group-hover:border-white/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-[1.1] tracking-tight text-white">
            {fatwa.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            {fatwa.description}
          </p>
        </header>

        {/* Selected Local Image */}
        <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
          <Image
            src={selectedImage}
            alt={fatwa.title}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-6 text-white/30">
                <BsPatchQuestionFill className="text-xl" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  ጥያቄ
                </span>
              </div>
              <div
                className="text-2xl md:text-3xl font-medium leading-snug text-white/90"
                dangerouslySetInnerHTML={{
                  __html: fatwa.question.replace(/, /g, "<br/><br/>"),
                }}
              />
            </section>

            <section className="relative rounded-3xl bg-[#1C1C1E] border border-white/5 p-8">
              <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="flex items-center gap-3 mb-6 text-white/30">
                <BsCheckAll className="text-xl text-white/60" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  መልስ
                </span>
              </div>
              <div
                className="text-lg md:text-xl leading-relaxed text-gray-400 space-y-6"
                dangerouslySetInnerHTML={{
                  __html: fatwa.answer.replace(/, /g, "<br/><br/>"),
                }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 p-8 rounded-3xl bg-[#1C1C1E] border border-white/5">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 text-white/40">
                  <MdOutlineMenuBook />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    ምንጭ
                  </span>
                </div>
                <p
                  className="text-sm text-gray-300 leading-loose"
                  dangerouslySetInnerHTML={{
                    __html: fatwa.source.replace(/, /g, "<br />"),
                  }}
                />
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-white/40 mb-1">
                  <CiCalendarDate />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    ተሻሽሏል
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  January 31, 2026
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
