import FatwaCard from "@/components/fatwaCard";
import SearchBar from "../../components/searchBar";
import Combobox from "@/components/comboBox";

export default function Body() {
  const options = ["አቂዳ", "ቢድዐ 1", "ቢድዐ 2", "ሶላት 1", "ሶላት 2", "ጾም", "ዒድ"];

  return (
    <div className="mt-24 justify-center">
      <h1 className="text-center text-5xl text-white">
        የትኛውም ጉዳይ ላይ ያሎትን ጥያቄ ወይም <br /> ፈትዋ እዚሁ ያግኙ
      </h1>
      <div className="justify-center mt-5 md:flex md:gap-5">
        <SearchBar />
        <Combobox options={options} />
      </div>
      <FatwaCard />
      <FatwaCard />
      <FatwaCard />
    </div>
  );
}
