import SideBar from "@/components/main-menu/side-bar/SideBar";

export default function Stats() {
  return (
    <div className="container">
      <div className="app-container">
        <div className="app-sidebar">
          <SideBar />
        </div>

        <div className="main-screen"></div>
      </div>
    </div>
  );
}
