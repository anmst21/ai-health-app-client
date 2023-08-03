import React from "react";
import MenuIcon from "@/components/misc/MenuIcon";
import ChevronBack from "@/components/misc/ChevronBack";
import WeeklyScheduleCard from "../weekly-schedule/WeeklyScheduleCard";
import StepsCard from "./StepsCard";
import LogoRound from "@/components/misc/logo-round";
import AddPostButton from "../AddPostButton";
import Image from "next/image";

const DirectionsScreen = () => {
  return (
    <div className="main-screen__weekly-container">
      <div className="main-screen__absolute--header directions-card__fix">
        <div className="settings-page__header--text">
          <ChevronBack fix linkTo="/app/complexId123" />
          <h1>Directions</h1>
        </div>
        <LogoRound dir />
      </div>

      {/* <ChevronBack fix /> */}
      <AddPostButton link="/app/complexId123/basket" />

      <div className="main-screen__cards main-screen__cards--fix">
        <StepsCard />
        <StepsCard />
        <StepsCard />
        <StepsCard />
        <StepsCard />
        <StepsCard />
      </div>
    </div>
  );
};

export default DirectionsScreen;
