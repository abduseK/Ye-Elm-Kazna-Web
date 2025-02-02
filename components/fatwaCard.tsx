import Link from "next/link";
import fatwas from "../app/data/fatwas.json";
import { Card } from "@/components/ui/card";

interface FatwaCardProps {
  selectedTag: string | null;
  searchQuery: string;
}

export default function FatwaCard({
  selectedTag,
  searchQuery,
}: FatwaCardProps) {
  // Highlighting searched word
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredFatwas = fatwas.filter((fatwa) => {
    const matchesTag = selectedTag
      ? fatwa.tags.tags1.includes(selectedTag)
      : true;
    const matchesQuery = searchQuery
      ? fatwa.title.includes(searchQuery) ||
        fatwa.question.includes(searchQuery)
      : true;
    return matchesTag && matchesQuery;
  });

  // const displayedFatwas =
  //   filteredFatwas.length > 10 ? filteredFatwas.slice(0, 10) : filteredFatwas;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {filteredFatwas.map((fatwa) => (
        <div className="w-full" key={fatwa.id}>
          <Link href={`/details?id=${fatwa.id}`} passHref>
            <Card className="w-full h-64 bg-[#1c1c1e] border border-[#38383a] rounded-xl p-6 shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:translate-x-2">
              <div>
                <p className="text-sm text-gray-400 mb-2">January 29, 2025</p>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {highlightText(fatwa.title, searchQuery)}
                </h2>
                <p className="text-gray-300">
                  {highlightText(fatwa.question, searchQuery)}
                </p>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
