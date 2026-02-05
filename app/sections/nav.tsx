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
            px-8 py-3 font-semibold text-white transition-all duration-300 
            bg-gradient-to-r from-neutral-800 to-neutral-950
            border border-white/10 rounded-full
           
            active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.4)]
            
          "
        >
          {/* Subtle Inner Glow effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

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
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
