"use client";

export default function NavBar() {
  return (
    <nav className="px-4 w-full">
      <div className="flex justify-center items-center py-6 max-w-7xl mx-auto">
        {/* Premium Centered Button */}
        <button
          onClick={() =>
            window.open(
              "https://github.com/abduseK/Ye-Elm-Kazna/releases/tag/v2.0.0",
              "_blank",
            )
          }
          className="
    group relative inline-flex items-center justify-center 
    px-8 py-3 font-bold text-black transition-all duration-300 
    /* White to Light Gray Gradient */
    bg-gradient-to-b from-white to-neutral-200
    /* Subtle border to define the shape */
    border border-white/20 rounded-full
    /* Soft shadow for depth */
    shadow-[0_10px_20px_rgba(255,255,255,0.05),0_4px_6px_rgba(0,0,0,0.1)]
    hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]
    hover:-translate-y-0.5
    active:scale-95
  "
        >
          {/* Inner Glossy Effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-t from-black/[0.03] to-transparent opacity-100" />

          <span className="relative flex items-center gap-2 tracking-wide text-sm sm:text-base">
            መተግበሪያውን ያውርዱ
            <svg
              className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
