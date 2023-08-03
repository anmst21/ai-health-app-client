import React from "react";
import Image from "next/image";
import classNames from "classnames";

const LogoRound = ({ dir, basket }) => {
  const className = classNames({
    "icon-round": true,
    "icon-round__directions": dir,
  });

  const basketLogo = basket ? "/basket-icon.svg" : "/registration-icon.svg";
  const basketWidth = basket ? 60 : 68;
  const basketHeigth = basket ? 49 : 65;

  return (
    <div className={className}>
      <Image
        alt="logo-round"
        src={basketLogo}
        width={basketWidth}
        height={basketHeigth}
      />
    </div>
  );
};

export default LogoRound;
