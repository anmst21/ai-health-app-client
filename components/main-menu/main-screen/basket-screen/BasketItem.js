import React, { useState } from "react";
import classNames from "classnames";

const BasketItem = ({ name, weight, index }) => {
  const [isActive, setIsActive] = useState(false);
  const className = classNames({
    "basket-screen__element": true,
    "basket-screen__element--active": isActive,
  });
  return (
    <div
      className={className}
      key={index}
      onClick={() => setIsActive((isActive) => !isActive)}
    >
      <p1 className="basket-screen__p1">{name}</p1>
      <span className="basket-screen__span">{weight}</span>
    </div>
  );
};

export default BasketItem;
