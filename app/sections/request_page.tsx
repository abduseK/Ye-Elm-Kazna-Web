"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  BsSendFill,
  BsCheckCircleFill,
  BsExclamationCircleFill,
} from "react-icons/bs";

export default function RequestPage() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  // Notification State
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  // Auto-hide notification logic
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 4000); // Vanish after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, question }),
      });

      const data = await res.json();

      if (data.success) {
        setCategory("");
        setQuestion("");
        setNotification({
          show: true,
          message: "ጥያቄዎ በትክክል ተልኳል፣ እናመሰግናለን!",
          type: "success",
        });
      } else {
        throw new Error();
      }
    } catch {
      setNotification({
        show: true,
        message: "ይቅርታ፣ ጥያቄዎ ሊላክ አልቻለም። እባክዎ ደግመው ይሞክሩ።",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/20 relative">
      {/* --- POP-UP UI --- */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
          notification.show
            ? "translate-y-0 opacity-100"
            : "-translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
            notification.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}
        >
          {notification.type === "success" ? (
            <BsCheckCircleFill />
          ) : (
            <BsExclamationCircleFill />
          )}
          <p className="text-sm font-medium tracking-wide">
            {notification.message}
          </p>
        </div>
      </div>
      {/* ----------------- */}

      <main className="max-w-2xl mx-auto px-6 mt-24 pb-24">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-12 flex items-center gap-3 text-white transition-all group"
        >
          <div className="flex gap-2 text-center items-center py-2 px-5 rounded-full border border-white/5 group-hover:border-white/20 bg-[#1C1C1E]">
            <IoMdArrowRoundBack className="text-xl group-hover:-translate-x-1 transition-transform" />
            ተመለስ
          </div>
        </button>

        {/* Header Section */}
        <div className="mb-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ፈትዋ ይጠይቁ
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            የፈትዋ ጥያቄ ከመላኮ በፊት፣ በጉዳዩ ዙሪያ ምላሽ መሰጠቱን ቀድመው ያረጋግጡ። ጥያቄዎትንም በደንብ
            አብራርተው ለመፃፍ ይሞክሩ።
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1C1C1E] border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
              የጥያቄው ምድብ
            </label>
            <input
              type="text"
              placeholder="ለምሳሌ፡ ሶላት፣ ሴቶች..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
              ጥያቄዎ
            </label>
            <textarea
              placeholder="ጥያቄዎትን እዚህ በዝርዝር ይፃፉ..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white min-h-[200px] resize-none focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-white hover:bg-gray-200 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-neutral-300 border-t-black rounded-full animate-spin" />
                <span className="text-sm">በመላክ ላይ...</span>
              </div>
            ) : (
              <>
                <span>ላክ</span>
                <BsSendFill className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </main>
    </div>
  );
}
