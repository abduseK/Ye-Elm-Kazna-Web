export default function Body() {
  return (
    <div className="mt-24 justify-center">
      <h1 className="text-center text-5xl text-white">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="mt-8 justify-center text-center flex">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Fatwa..."
            className="bg-[#1c1c1e] text-gray-400 placeholder-gray-400 border border-gray-700 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:border-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m1.1-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
