import { useState } from "react";
import Image from "next/image";
import FatwaCard from "@/components/fatwaCard";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import bodyLogo from "../../public/logo3.png";
import { Input } from "@/components/ui/input";

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
      <h1 className="text-center text-3xl md:text-5xl text-white leading-tight">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="mt-10 flex flex-col gap-5 md:flex-row md:justify-center">
        <Input
          placeholder="ፈትዋ ይፈልጉ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select onValueChange={handleTagSelect} defaultValue={options[0]}>
          <SelectTrigger>
            <SelectValue placeholder="Select a tag" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <FatwaCard selectedTag={selectedTag} searchQuery={searchQuery} />
    </div>
  );
}
