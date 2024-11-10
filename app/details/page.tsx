import NavBar from "@/components/nav";
import Footer from "../sections/footer";
import DetailBody from "@/components/detailBody";

export default function DetailScreen() {
  return (
    <div className="text-white min-h-screen flex flex-col px-14 custom-bg md:px-64">
      <NavBar />
      <div className="no-scrollbar flex-grow mt-8 overflow-y-auto">
        <DetailBody />
      </div>
    </div>
  );
}
