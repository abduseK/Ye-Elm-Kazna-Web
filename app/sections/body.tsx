import { useState } from "react";
import Image from "next/image";
import FatwaCard from "@/components/fatwaCard";
import SearchBar from "../../components/searchBar";
import Combobox from "@/components/comboBox";
import bodyLogo from "../../public/logo3.png";

export default function Body() {
  const options: string[] = ["ሁሉም ፈታዋዎች", "አቂዳ", "ቢድዐ", "ሶላት", "ጾም", "ዒድ"];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag === "ሁሉም ፈታዋዎች" ? null : tag);
  };

  return (
    <div className="mt-16 justify-center">
      <div className="justify-center flex">
        <Image src={bodyLogo} alt="" height={70} width={200}></Image>
      </div>
      <h1 className="text-center text-5xl text-white">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="mt-10 flex flex-col gap-5 md:flex-row md:justify-center">
        <SearchBar onSearch={setSearchQuery} />
        <Combobox options={options as string[]} onSelect={handleTagSelect} />
      </div>
      <FatwaCard selectedTag={selectedTag} searchQuery={searchQuery} />
    </div>
  );
}
