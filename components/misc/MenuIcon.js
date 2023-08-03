import React from "react";
import Image from "next/image";
import classNames from "classnames";

const MenuIcon = ({ card }) => {
  const className = classNames({
    "menu-icon": true,

    "menu-icon__card": card,
  });

  const heightImg = card ? 25.5 : 31.5;
  const widthImg = card ? 7 : 9;

  return (
    <div className={className}>
      <Image
        alt="round menu"
        src="/menu-icon.svg"
        width={widthImg}
        height={heightImg}
      />
    </div>
  );
};

export default MenuIcon;
