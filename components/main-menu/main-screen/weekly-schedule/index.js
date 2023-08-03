import React, { useState } from "react";
import ChevronBack from "@/components/misc/ChevronBack";
import MenuIcon from "@/components/misc/MenuIcon";
import Image from "next/image";
import VerticalRadio from "@/components/misc/vertical-radio";
import WeeklyScheduleCard from "./WeeklyScheduleCard";
import { weekMeal } from "@/utilities/formFields";
import RoundMenu from "@/components/misc/round-menu";

const WeeklySchedule = () => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long" });
  const [dayIndex, setDayIndex] = useState(weekDays.indexOf(today));
  const { meals } = weekMeal.find((meal) => meal.day === weekDays[dayIndex]);
  console.log(meals);

  const incrementDay = () => {
    setDayIndex((prevDayIndex) => (prevDayIndex + 1) % weekDays.length);
  };

  const decrementDay = () => {
    setDayIndex(
      (prevDayIndex) => (prevDayIndex - 1 + weekDays.length) % weekDays.length
    );
  };
  return (
    <div className="main-screen__weekly-container">
      <VerticalRadio data={weekDays} value={dayIndex} setValue={setDayIndex} />

      <div className="main-screen__arrow">
        <div className="main-screen__arrow--item" onClick={decrementDay}>
          <Image
            alt="arr up"
            src="/scroll-down-chevron.svg"
            width={85}
            height={20}
          />
        </div>
        <div
          alt="arr down"
          className="main-screen__arrow--item"
          onClick={incrementDay}
        >
          <Image src="/scroll-down-chevron.svg" width={85} height={20} />
        </div>
      </div>
      <Image
        alt="bg img"
        src="/wallpaper-demo.png"
        width={850}
        height={640}
        className="main-screen__bg-img plan-card__image--element"
      />

      <div className="main-screen__absolute--header">
        <div className="settings-page__header--text">
          <ChevronBack fix linkTo="/app" />
          <h1>{weekDays[dayIndex]}</h1>
        </div>
        <RoundMenu />
      </div>

      <div className="main-screen__cards">
        {meals.map((meal, index) => (
          <WeeklyScheduleCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;
{
  /* <ChevronBack fix /> */
}
