import Link from "next/link";
import fatwas from "../app/data/fatwas.json";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-7xl px-4">
      {filteredFatwas.map((fatwa) => (
        <div key={fatwa.id}>
          <Link href={`/details?id=${fatwa.id}`} passHref>
            <div className="mt-7 h-full mx-auto max-w-md overflow-hidden rounded-xl bg-[#1c1c1e] shadow-md md:max-w-2xl">
              <div className="md:flex">
                <div className="p-8 text-start">
                  <p className="text-sm text-gray-400 mb-2">
                    February 23, 2025
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {highlightText(fatwa.title, searchQuery)}
                  </h2>
                  <p className="mt-2 text-gray-500">
                    {highlightText(fatwa.question, searchQuery)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
