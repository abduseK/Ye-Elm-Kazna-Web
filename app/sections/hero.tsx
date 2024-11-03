import Image from "next/image";
import bodyLogo from "../../public/logo3.png";

export default function Hero() {
  return (
    <div className="mt-24 h-screen">
      <div className="justify-center flex">
        <Image src={bodyLogo} alt="" height={70} width={200}></Image>
      </div>
      <h1 className="text-center text-5xl text-white">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="mt-5 flex justify-center">
        <button className="bg-white text-black h-3/4 py-2 px-5 rounded-full">
          Download App
        </button>
      </div>
    </div>
  );
}
