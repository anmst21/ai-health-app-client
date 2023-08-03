import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

const SideBar = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="sidebar">
      <button
        className={classNames("sidebar__button", {
          "sidebar__button--active": router.pathname === "/stats",
        })}
        onClick={() => navigate("/stats")}
      >
        <Image
          alt="stats"
          src="/sidebar/sidebar-stats.svg"
          width="67"
          height="64"
        />
      </button>
      <hr className="sidebar__line" />
      <button
        className={classNames("sidebar__button", {
          "sidebar__button--active": router.pathname.includes("/app"),
        })}
        onClick={() => navigate("/app")}
      >
        <Image
          alt="logo"
          src="/sidebar/sidebar-logo.svg"
          width="79"
          height="82"
        />
      </button>
      <hr className="sidebar__line" />
      <button
        className={classNames("sidebar__button", {
          "sidebar__button--active": router.pathname === "/settings",
        })}
        onClick={() => navigate("/settings")}
      >
        <Image
          alt="settings"
          src="/sidebar/sidebar-settings.svg"
          width="78"
          height="75"
        />
      </button>
    </div>
  );
};

export default SideBar;
