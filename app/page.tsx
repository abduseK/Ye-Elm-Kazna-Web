import Body from "@/components/body";
import EachFatwa from "@/components/eachFetwas";
import FatwaCard from "@/components/fatwaCard";
import FatwaGrid from "@/components/fatwaContainer";
import NavBar from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white min-h-screen px-14 custom-bg md:px-64">
      <NavBar />
      <Body />
      <FatwaCard />
    </div>
  );
}
