"use client";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-white">خزينة العلم</h1>
        <div className="flex gap-2 sm:gap-5 justify-center items-center">
          <select
            className="bg-[#15141a] text-gray-300 border border-gray-700 rounded-md px-1 sm:px-2 py-1 text-sm sm:text-base focus:outline-none"
            style={{ backgroundColor: "#15141a" }}
          >
            <option value="light" className="bg-[#15141a]">
              Light
            </option>
            <option value="dark" className="bg-[#15141a]">
              Dark
            </option>
          </select>
          <button className="bg-white text-black py-1 sm:py-2 px-3 sm:px-5 rounded-full text-sm sm:text-base whitespace-nowrap">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}
