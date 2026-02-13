"use client";

export default function NavBar() {
  return (
    <nav className="px-4 w-full">
      <div className="flex justify-center items-center py-6 max-w-7xl mx-auto">
        {/* Premium Centered Button */}
        <a
          href="/downloads/yeelmkazna.apk"
          download="Ye-Elm-Kazna.apk" // This renames the file for the user on save
          className="
    inline-flex items-center justify-center 
    px-8 py-3 
    font-bold text-black 
    bg-white border border-gray-300 rounded-full
    transition-all duration-200
    hover:bg-gray-50 hover:border-gray-400
    active:bg-gray-100 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-blue-500
    no-underline
  "
        >
          <span className="flex items-center gap-2 tracking-wide text-sm sm:text-base">
            መተግበሪያውን ያውርዱ (20MB)
            {/* Download Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
