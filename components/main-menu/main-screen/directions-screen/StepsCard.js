import React from "react";
import Image from "next/image";

const StepsCard = () => {
  return (
    <div className="directions-card">
      <div
        className="plan-card__conatainer plan-card__container-fix"
        style={{ border: "none" }}
      >
        <div className="plan-card__filler" />
        <div className="plan-card__image">
          <Image
            alt="card image"
            src="/wallpaper-demo.png"
            width={400}
            height={250}
            className="plan-card__image--element plan-card__image--mask"
          />
        </div>
        <div className="plan-card__content">
          <h2 className="plan-card__content--h1">Breakfast</h2>

          <h4 className="plan-card__content--h4 plan-card__content__text-fix">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            ipsa unde minus! Aliquid repellendus neque consectetur eveniet
            repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque
            consectetur eveniet repudiandae odit? Voluptas? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Facilis ipsa unde minus!
            Aliquid repellendus neque consectetur eveniet repudiandae odit?
            Voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Facilis ipsa unde minus! Aliquid repellendus neque consectetur
            eveniet repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid
            repellendus neque consectetur eveniet repudiandae odit? Voluptas?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
// /wallpaper-demo.png
