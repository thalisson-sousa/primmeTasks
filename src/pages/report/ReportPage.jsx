import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/sideBar/SideBar";

export default function ReportPage() {
  return (
    <div>
      <Header />
      <div className="Container">
        <div>
          <SideBar />
        </div>
        <div>Report Page</div>
      </div>
    </div>
  );
}
