import { useState } from "react";
import { FaArrowDownWideShort } from "react-icons/fa6";

interface ComboboxProps {
  options: string[];
  onSelect: (value: string) => void;
}

export default function Combobox({ options, onSelect }: ComboboxProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelect = (option: string) => {
    setSelected(option as any); // Type assertion to fix type mismatch
    setIsOpen(false);
    setQuery("");
    onSelect(option);
  };

  return (
    <div className="relative w-full justify-center text-center flex max-w-xs">
      <button
        className="w-2/3 tex-left p-2 border border-gray-700 rounded-lg bg-[#1c1c1e] text-white flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-400">
          {selected ? selected : "ፈትዋ ይምረጡ"}
        </span>
        <FaArrowDownWideShort className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-2/3 bg-[#1c1c1e] border border-gray-700 rounded-lg shadow-lg z-10 p-3">
          <input
            type="text"
            className="w-full p-2 mb-2 bg-[#1c1c1e] text-white border border-gray-700 rounded focus:outline-none"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="max-h-40 overflow-y-auto no-scrollbar">
            {filteredOptions.map((option, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700 flex items-center"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
