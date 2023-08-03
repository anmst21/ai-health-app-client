import SideBar from "@/components/main-menu/side-bar/SideBar";
import ScheduleCreate from "@/components/main-menu/main-screen/schedule-create";
import AddPostButton from "@/components/main-menu/main-screen/AddPostButton";

export default function Home() {
  return (
    <div className="container">
      <div className="app-container">
        <div className="app-sidebar">
          <SideBar />
        </div>

        <div className="main-screen">
          <ScheduleCreate />
        </div>

        <AddPostButton link="/app" />
      </div>
    </div>
  );
}
