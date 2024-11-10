import Link from "next/link";

export default function FatwaCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[1, 2, 3].map((_, index) => (
        <Link
          href="/details"
          key={index}
          className="relative bg-[#1c1c1e] border border-[#38383a] rounded-xl p-6 shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:border-white hover:shadow-xl"
        >
          <p className="text-sm text-gray-400 mb-2">December 24, 2023</p>
          <h2 className="text-2xl font-bold text-white mb-2">የድድ መድማት</h2>
          <p className="text-gray-300">
            የሱና ፆም እየፆምኩ እያለ ለአሱር ሶላት ውዱእ እያደረኩ በአጋጣሚ ጥርሴን አመመኝና ስነካው ድዴ ደማ ፣
            ታዲያ ይህ ፆሜ ትክክል ነው ወይስ ተበላሽቶብኛል?
          </p>
        </Link>
      ))}
    </div>
  );
}
