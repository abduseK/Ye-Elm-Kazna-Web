export default function EachFatwa() {
  return (
    <div
      className="
                    no-scrollbar mt-10
                    relative w-full h-52 rounded-2xl z-0 border-zinc-800 border border-t-0 border-l-0 
                    hover:border-zinc-700 hover:border-2 hover:border-t-0 hover:border-l-0 hover:bg-zinc-900 duration-[0.4s]
                    sm:w-full md:w-full lg:w-96 xl:w-96 2xl:w-96
                "
    >
      <div
        className="
                        no-scrollbar
                        absolute w-full h-full -m-2 p-4 border-2 rounded-xl border-zinc-700 text-zinc-300
                        hover:border-zinc-200 hover:bg-[#0A0A0A] hover:text-white hover:-m-4 duration-[0.2s]
                        sm:w-full md:w-full lg:w-96 xl:w-96 2xl:w-96
                    "
      >
        {/* Date */}
        <div className="flex justify-between">
          <span className="text-zinc-500 text-xs">December 24, 2023</span>
        </div>

        {/* Title */}
        <div
          className="text-md font-bold mb-0 mt-1 text-white
                    sm:text-xl sm:mb-3
                    sm:text-zinc-300 md:text-zinc-300 lg:text-zinc-300 xl:text-zinc-300"
        >
          የድድ መድማት
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 mt-2">
          የሱና ፆም እየፆምኩ እያለ ለአሱር ሶላት ውዱእ እያደረኩ በአጋጣሚ ጥርሴን አመመኝና ስነካው ድዴ ደማ ፣ ታዲያ
          ይህ ፆሜ ትክክል ነው ወይስ ተበላሽቶብኛል?'
        </p>
      </div>
    </div>
  );
}
