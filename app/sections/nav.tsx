"use client";

export default function NavBar() {
  return (
    <nav className="px-4 w-full">
      <div className="flex justify-center items-center py-6 max-w-7xl mx-auto">
        {/* Premium Centered Button */}
        <a
          href="https://github.com/abduseK/Ye-Elm-Kazna/releases/tag/v1.0.0"
          target="_blank"
          rel="noopener noreferrer"
          className="
    inline-flex items-center justify-center 
    px-8 py-3 
    font-bold text-black 
    bg-white border border-gray-300 rounded-full
    transition-colors duration-200
    hover:bg-gray-300
    active:bg-gray-100
    focus:outline-none focus:ring-2 focus:ring-gray-200
    no-underline
  "
        >
          <span className="flex items-center gap-2 tracking-wide text-sm sm:text-base">
            መተግበሪያውን ያውርዱ
            <svg
              className="w-4 h-4"
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
        </a>
      </div>
    </nav>
  );
}
