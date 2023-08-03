import React, { useState } from "react";
import MenuIcon from "@/components/misc/MenuIcon";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

const WeeklyScheduleCard = ({ meal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(isOpen);

  const navigateToDirections = () => {
    const currentSlug = router.query.slug;
    router.push({
      pathname: "/app/[slug]/directions",
      query: { slug: currentSlug },
    });
  };
  const onClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div
      className={classNames({
        "weekly-schedule__open": isOpen,
      })}
    >
      {isOpen && (
        <div className="weekly-schedule__menu">
          <Image src="/pencil-icon.svg" width={50} height={51} />
          <Image src="/menu-icon-sm.svg" width={48} height={49} />
        </div>
      )}

      <div
        style={{ border: "none" }}
        className={classNames("plan-card__conatainer", {
          "plan-card__conatainer__open": isOpen,
        })}
      >
        <div onClick={onClick}>
          <MenuIcon card />
        </div>

        <div className="plan-card__filler" />
        <div className="plan-card__image plan-card__image--fix">
          <Image
            src="/wallpaper-demo.png"
            width={400}
            height={250}
            className="plan-card__image--element plan-card__image--mask"
          />
        </div>

        <div className="plan-card__content">
          <h2 className="plan-card__content--h1">{meal.time}</h2>
          <ul className="weekly-schedule__ul">
            {meal.content.map((item, index) => (
              <li
                key={index}
                className="weekly-schedule__ul--li"
                onClick={navigateToDirections}
              >
                {item}
                <Image
                  src="/arrow-btn.svg"
                  height={21}
                  width={28}
                  className="weekly-schedule__ul--img "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduleCard;
