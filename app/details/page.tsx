import NavBar from "@/app/sections/nav";
import DetailBody from "../detailBody";

export default function DetailScreen() {
  return (
    <div>
      <div className="pt-5 pr-5 text-white min-h-screen flex flex-col custom-bg">
        <NavBar />
        <div className="no-scrollbar flex-grow mt-8 overflow-y-auto">
          <DetailBody />
        </div>
      </div>
    </div>
  );
}
