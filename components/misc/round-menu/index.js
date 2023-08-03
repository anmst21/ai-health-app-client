import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-icon__container">
      <div
        className={classNames("menu-icon", {
          "menu-icon__click": isOpen,
        })}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {isOpen ? (
          <Image
            alt="close-menu"
            src="/close-home.svg"
            width={30}
            height={30}
          />
        ) : (
          <Image
            alt="round menu"
            src="/menu-icon.svg"
            width={9}
            height={31.5}
          />
        )}
      </div>
      {isOpen && (
        <>
          <div className=" menu-icon-1">
            <Image
              alt="round menu"
              src="/export-icon-sm.svg"
              width={31}
              height={43}
            />
          </div>
          <div className="menu-icon-2">
            <Image
              alt="round menu"
              src="/edit-icon-sm.svg"
              width={35}
              height={35}
            />
          </div>
          <div className="menu-icon-3">
            <Image
              alt="round menu"
              src="/trash-icon.svg"
              width={30}
              height={35}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MenuIcon;
