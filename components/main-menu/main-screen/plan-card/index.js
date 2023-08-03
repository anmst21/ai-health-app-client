import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/redux/thunks/deleteUserThunk";

import classNames from "classnames";

import { useRouter } from "next/router";

const PlanCard = ({ data }) => {
  const className = classNames({
    "plan-card__footer--stat": true,
    "plan-card__col--purp": data.style === "Fusion",
    "plan-card__col--red": data.style === "Keto",
    "plan-card__col--yellow": data.style === "Gluten Free",
    "plan-card__col--grass": data.style === "Exotic Insects",
    "plan-card__col--comfort": data.style === "Comfort Food",
    "plan-card__col--halal": data.style === "Halal",
    "plan-card__col--kosher": data.style === "Kosher",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  function formatDate(dateNow) {
    const date = new Date(dateNow);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month < 10 ? "0" + month : month}/${year}`;
  }
  const handleDelete = () => {
    dispatch(deleteUser(data._id));
  };

  return (
    <div className="plan-card__conatainer">
      <div className="plan-card__filler" />
      <div className="plan-card__trash z-index-five" onClick={handleDelete}>
        <Image src="/trash-icon.svg" width={19} height={22} />
      </div>
      <div
        className="plan-card__image"
        onClick={() => router.push(`/app/${data._id}`)}
      >
        <Image
          alt="card image"
          src={data.image}
          width={400}
          height={250}
          className="plan-card__image--element plan-card__image--mask"
        />
      </div>
      <div className="plan-card__content">
        <h2 className="plan-card__content--h1">{data.planName}</h2>
        <h4 className="plan-card__content--h4">{data.planDesc}</h4>
        <div className="plan-card__footer">
          <span className="plan-card__footer--date">
            {formatDate(data.date)}
          </span>
          <div className="plan-card__footer--justify">
            {data.calories && (
              <div className="plan-card__footer--cal plan-card__col--blue">
                {data.calories + "cal."}
              </div>
            )}
            {data.style && <div className={className}>{data.style}</div>}

            {data.vegan && (
              <div className={"plan-card__footer--stat plan-card__col--green"}>
                Veg
              </div>
            )}
            {data.goal && (
              <div className={"plan-card__footer--stat plan-card__col--sand"}>
                {data.goal}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
