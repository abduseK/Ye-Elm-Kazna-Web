import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-1 pt-28 text-center justify-center">
      <p className="text-gray-400 sm:mb-1 mb-3">
        If you have any suggestions or notice any mistakes in these Fatwas,
        please contact us.
      </p>
      <p>
        ማንኛውም አይነት አስተያየት፣ እርማት ወይም ፈትዋዎቹ ላይ ስህተት ካዩ በቀጥታ ያናግሩን 👉{" "}
        <a
          className="text-gray-400 hover:text-gray-300"
          href="https://t.me/lazyCoder_I0I0"
          target="_"
        >
          Abdulselam
        </a>
      </p>
      <div className="flex items-center justify-center mt-12 mb-6">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full backdrop-blur-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-medium">
            Powered by
          </span>
          <div className="w-[1px] h-3 bg-white/10" />
          <Link
            href="https://moonastudio.build.et"
            target="_blank"
            className="text-[12px] font-bold tracking-tight text-white/70 hover:text-white transition-all duration-300 flex items-center gap-1"
          >
            Moona<span className="text-white/40 font-light">Studio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
