import Image from "next/image";
import bodyLogo from "../../public/logo3.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FatwaCard from "@/components/fatwaCard";
// import RequestPage from "../request/page";
import Link from "next/link";

export default function Body() {
  const options: string[] = [
    "ሁሉም ፈታዋዎች",
    "አቂዳ",
    "ቢድዐ",
    "ሶላት",
    "ረመዳን",
    "ዒድ",
    "ሴቶች",
    "ዶዒፍ",
    "ጁማ",
  ];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  // const [showComingSoon, setShowComingSoon] = useState(false);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag === "ሁሉም ፈታዋዎች" ? null : tag);
  };

  return (
    <div className="relative">
      <Link href="/request">
        <button
          className="fixed bottom-8 right-8 z-50 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-300 transition-all flex items-center gap-2"
          // onClick={() => setShowComingSoon(true)}
        >
          <span role="img" aria-label="AI">
            🙋🏿‍♂️
          </span>{" "}
          ፈትዋ ጥያቄ ይላኩ
        </button>
      </Link>
      {/* Main Content or Coming Soon */}

      <div className="mt-5 text-center justify-center">
        <div className="flex justify-center">
          <Image src={bodyLogo} alt="" height={70} width={200}></Image>
        </div>
        <h1 className="text-3xl md:text-5xl">
          የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
        </h1>
        <div className="mt-10 flex flex-col gap-5 md:flex-row items-center justify-center">
          <Input
            placeholder="ፈትዋ ይፈልጉ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select onValueChange={handleTagSelect} defaultValue={options[0]}>
            <SelectTrigger>
              <SelectValue placeholder="ፈትዋ ይመረጡ" />
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
        <div className="flex justify-center">
          <FatwaCard selectedTag={selectedTag} searchQuery={searchQuery} />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
