import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ classname, children, click, type }) => {
  const className = classNames({
    btn: true,
    btn__blue: classname === "blue",
    btn__red: classname === "red",
    btn__green: classname === "green",
    btn__tertiary: classname === "tertiary",
    btn__white: classname === "white",
  });

  return (
    <button className={className} type={type} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
