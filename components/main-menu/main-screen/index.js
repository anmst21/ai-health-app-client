import React from "react";
import NoPosts from "./NoPosts";
import ScheduleCreate from "./schedule-create";
import AddPostButton from "./AddPostButton";
import PlanCard from "./plan-card";
import WeeklySchedule from "./weekly-schedule";
import Image from "next/image";
import DirectionsScreen from "./directions-screen";
import BasketScreen from "./basket-screen";

const MainScreen = () => {
  return (
    <div className="main-screen">
      {/* <div className="main-screen__cards">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div> */}

      {/* <WeeklySchedule /> */}

      <div className="main-screen__weekly-container">
        <DirectionsScreen />
      </div>
      {/* <ScheduleCreate /> */}
    </div>
  );
};

export default MainScreen;
