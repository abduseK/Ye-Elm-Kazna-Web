import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="justify-center text-center flex">
      <div className="relative">
        <input
          type="text"
          placeholder="ፈትዋ ይፈልጉ..."
          className="bg-[#1c1c1e] text-gray-400 placeholder-gray-400 border border-gray-700 rounded-xl py-2 px-4 pl-10 w-64 focus:outline-none focus:border-white"
          onChange={(e) => onSearch(e.target.value)}
        />
        <IoSearchOutline className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
}
