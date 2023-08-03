import DirectionsScreen from "@/components/main-menu/main-screen/directions-screen";
import SideBar from "@/components/main-menu/side-bar/SideBar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
      <div className="app-container">
        <div className="app-sidebar">
          <SideBar />
        </div>
        <div className="app-content">
          <div className="main-screen">
            <Image
              alt="bg img"
              src="/wallpaper-demo.png"
              width={850}
              height={640}
              className="main-screen__bg-img plan-card__image--element"
            />
            <DirectionsScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
