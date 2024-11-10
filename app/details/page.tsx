import NavBar from "@/components/nav";
import Footer from "../sections/footer";
import DetailBody from "@/components/detailBody";

export default function DetailScreen() {
  return (
    <div className="text-white min-h-screen flex flex-col px-14 custom-bg md:px-64 ">
      <div className="scrollable-content no-scrollbar">
        <NavBar />
        <div className="flex-grow mt-16 justify-center flex">
          <DetailBody />
        </div>
        <Footer />
      </div>
    </div>
  );
}
