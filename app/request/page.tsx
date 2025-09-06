import NavBar from "../sections/nav";
import RequestPage from "../sections/request_page";

export default function Page() {
  return (
    <div className="custom-bg">
      <div className="scrollable-content">
        <NavBar />
        <RequestPage />
      </div>
    </div>
  );
}
