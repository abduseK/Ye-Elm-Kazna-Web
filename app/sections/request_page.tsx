"use client";

import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function RequestPage() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here

    setLoading(true);
    const res = await fetch("api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, question }),
    });

    const data = await res.json();

    if (data.success) {
      setTimeout(() => {
        setCategory("");
        setQuestion("");
        setLoading(false);
        alert("ጥያቄዎ ተልኳል፣ እናመሰግናለን!");
      }, 1500);
    } else {
      alert("ይቅርታ፣ ጥያቄዎ ሊልክ አልቻለም። እባክዎ ደግመው ይሞክሩ።");
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center min-h-[70vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-[#1c1c1e] rounded-xl shadow-md p-6 flex flex-col gap-5"
      >
        <button
          onClick={handleBackClick} // Goes back to the previous page
          className="absolute -top-8 left-4 text-2xl mb-5 text-white"
          aria-label="Go back"
        >
          <IoMdArrowRoundBack />
        </button>
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          ፈትዋ ይጠይቁ
        </h2>
        <p className="text-white">
          የፈትዋ ጥያቄ ከመላኮ በፊት፣ በጉዳዩ ዙሪያ ምላሽ መሰጠቱን ቀድመው ያረጋግጡ። ጥያቄዎትንም በደንብ አብራርተው
          ለመፃፍ ይሞክሩ
        </p>
        <input
          type="text"
          placeholder="የጥያቄው ምድብ (ሶላት, ሴቶች)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          placeholder="ጥያቄዎትን እዚህ ይፃፉ..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="px-4 py-3 rounded-lg bg-[rgba(255, 255, 255, 0.05)] text-black min-h-[240px] resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-300 text-black font-semibold py-3 rounded-lg transition-all flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="loader w-6 h-6 border-4 border-black border-t-black rounded-full animate-spin"></span>
          ) : (
            "ላክ"
          )}
        </button>
      </form>
      {/* {message && <p className="mt-4 bg-white text-center">{message}</p>} */}
      {/* Spinner styles */}
      <style jsx>{`
        .loader {
          border: 4px solid #1c1c1e;
          border-top: 4px solid #a78bfa;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
