import Image from "next/image";
import FatwaCard from "@/components/fatwaCard";
import SearchBar from "../../components/searchBar";
import Combobox from "@/components/comboBox";
import bodyLogo from "../../public/logo3.png";

export default function Body() {
  const options = ["አቂዳ", "ቢድዐ 1", "ቢድዐ 2", "ሶላት 1", "ሶላት 2", "ጾም", "ዒድ"];

  return (
    <div className="mt-24 justify-center">
      <div className="justify-center flex">
        <Image src={bodyLogo} alt="" height={70} width={200}></Image>
      </div>
      <h1 className="text-center text-5xl text-white">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="sm:ml-44 mt-10 flex flex-col gap-5 md:flex-row md:justify-center md:gap-5">
        <SearchBar />
        <Combobox options={options} />
      </div>
      <FatwaCard />
      <FatwaCard />
      <FatwaCard />
    </div>
  );
}
