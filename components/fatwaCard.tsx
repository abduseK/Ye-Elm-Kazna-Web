import Link from "next/link";
import fatwas from "../app/data/fatwas.json";

export default function FatwaCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {fatwas.map((fatwa) => (
        <Link
          href={`/details?id=${fatwa.id}`}
          key={fatwa.id}
          className="relative bg-[#1c1c1e] border border-[#38383a] rounded-xl p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:border-white hover:shadow-xl"
        >
          <p className="text-sm text-gray-400 mb-2">December 24, 2023</p>
          <h2 className="text-2xl font-bold text-white mb-2">{fatwa.title}</h2>
          <p className="text-gray-300">{fatwa.question}</p>
        </Link>
      ))}
    </div>
  );
}
