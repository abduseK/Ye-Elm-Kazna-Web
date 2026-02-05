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
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-white/20 text-white rounded-sm px-1">
          {part}
        </span>
      ) : (
        part
      ),
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

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 py-8">
      {filteredFatwas.map((fatwa) => (
        <div key={fatwa.id} className="group">
          <Link
            href={`/details?id=${fatwa.id}`}
            passHref
            className="block h-full"
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-[#1C1C1E] border border-white/5 p-8 transition-all duration-300 text-left hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              {/* Date Header */}
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  January 31, 2026
                </p>
              </div>

              {/* Title - Start Aligned */}
              <h2 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-white transition-colors">
                {highlightText(fatwa.title, searchQuery)}
              </h2>

              {/* Body - Start Aligned */}
              <p className="text-[15px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                {highlightText(truncateText(fatwa.question, 130), searchQuery)}
              </p>

              {/* Action Hint */}
              <div className="mt-8 flex items-center text-[15px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-all duration-300">
                <span>ዝርዝር መልሱን ያንብቡ</span>
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
