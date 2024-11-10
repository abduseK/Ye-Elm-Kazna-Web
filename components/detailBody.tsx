"use client";

import { BsPatchQuestionFill } from "react-icons/bs";
import { MdSource } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import MainImage from "../public/main.jpg";
import Image from "next/image";

export default function DetailBody() {
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
            <h1 className="text-3xl font-bold mb-2">ነሺዳ</h1>
            <p className="text-gray-400 mb-4">በቢድዐ ዙርያ የተሰጠ ፈትዋ</p>

            <div className="flex items-center space-x-2 mb-4">
              <MdSource className="text-xl" />
              <p className="text-sm text-gray-300">
                {" "}
                ሸይኹል ኢስላም ኢብኑ_ተይሚያ <br /> ሸይኽ ኢብኑ_ኡሰይሚን እና <br /> ሸይኽ ኢብኑ_ባዝ
                ረሂመሁሙሏህ,
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                መውሊድ
              </span>
              <span className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                ቢድዐ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Repository Stats */}
      <div className="max-w-3xl w-full bg-[#1c1c1e] rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <BsPatchQuestionFill />
          <span>በዘመናችን የምናያቸው ኢስላማዊ ነሽዳዎች ይፈቀዳሉን? እነዚህን ማዳመጡስ?</span>
        </h2>
        <p className="text-gray-400 mb-4">
          በመጀመሪያ ደረጃ ነሺዳ ብሎ ማለት ከቋንቋ አንፃር ግጥም ማለት ነው።
          <br /> <br /> ስለዚህ በዚህ ትርጓሜ ከሄድን ግጥም በሸሪዓችን ሽርክያትና መጥፎ ነገሮች
          እስካልተቀላቀሉበት ድረስ የተፈቀደ ነው። ለዚህም በነብዩ (ሶለሏሁ ዓለይሂ ወሰለም) ዘመንም ሶሀቦች ስራ ሲሰሩ፣
          ከስራ ሲያርፋ ለመነሳሳት ግጥም እየገጣጠሙ ይሉ እንደነበር ዘገባዎች ያመለክታሉ፣ ታዲያ እነዚህን ግጥሞች በጀመዓ
          በአንድ ድምፅ አልነበረም ሲሏቸው የነበረው፣ እንደውም ሳይዘጋጁበት እንደመጣላቸው ስለነበር አስባይና ተቀባይም
          አልነበረም፣ ታዲያ በዚህ መልኩ ማንም ሰው ግጥም መግጠም ይችላል። <br />
          <br /> ልክ እነ ኢብኑል_ቀይምና ሌሎችም ታላላቅ ኡለሞች በኪታቦቻቸው ግጥሞችን እንደሚያስቀምጡት በግጥም
          መልኩ መልእክትን ማስተላለፍ የሚከለከል አይሆንም።
        </p>
        <div className="flex items-center justify-end text-gray-300">
          <p>📅 Last updated: 11/4/2024</p>
        </div>
      </div>
    </div>
  );
}
