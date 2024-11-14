import Link from "next/link";
import fatwas from "../app/data/fatwas.json";
import lastCommitedDate from "../lastCommitDate.json";

export default function FatwaCard({ selectedTag, searchQuery }) {
  // Highlighting searched word
  const highlightText = (text, query) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {filteredFatwas.map((fatwa) => (
        <Link
          href={`/details?id=${fatwa.id}`}
          key={fatwa.id}
          className="relative bg-[#1c1c1e] border border-[#38383a] rounded-xl p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:border-white hover:shadow-xl"
        >
          <p className="text-sm text-gray-400 mb-2">{lastCommitedDate.date}</p>
          <h2 className="text-2xl font-bold text-white mb-2">
            {highlightText(fatwa.title, searchQuery)}
          </h2>
          <p className="text-gray-300">
            {" "}
            {highlightText(fatwa.question, searchQuery)}
          </p>
        </Link>
      ))}
    </div>
  );
}
