import { useState } from "react";

const Combobox = ({ options = [] }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xs">
      {/* Trigger Button */}
      <button
        className="w-1/2 text-left p-2 border border-gray-700 rounded-lg bg-[#1c1c1e] text-white flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-400">
          {selected ? selected : "ፈትዋ ይምረጡ"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9.75L12 13.5l3.75-3.75"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1c1c1e] border border-gray-700 rounded-lg shadow-lg z-10 p-3">
          <input
            type="text"
            className="w-full p-2 mb-2 bg-[#1c1c1e] text-white border border-gray-700 rounded focus:outline-none"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="max-h-40 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                  setQuery("");
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Combobox;
