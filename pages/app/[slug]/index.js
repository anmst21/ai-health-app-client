import SideBar from "@/components/main-menu/side-bar/SideBar";
import MainScreen from "@/components/main-menu/main-screen";
import PlanCard from "@/components/main-menu/main-screen/plan-card";
import { cardsData } from "@/utilities/formFields";
import WeeklySchedule from "@/components/main-menu/main-screen/weekly-schedule";

export default function Page() {
  return (
    <div className="container">
      <div className="app-container">
        <div className="app-sidebar">
          <SideBar />
        </div>
        <div className="app-content">
          <div className="main-screen">
            <WeeklySchedule />
          </div>
        </div>
      </div>
    </div>
  );
}
