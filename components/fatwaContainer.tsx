import EachFatwa from "./eachFetwas";
import FatwaCard from "./fatwaCard";

export default function FatwaGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <FatwaCard />
      <FatwaCard />
      <FatwaCard />
      <FatwaCard />
      <FatwaCard />
    </div>
  );
}
