import React from "react";
import SideBar from "./side-bar/SideBar";
import MainScreen from "./main-screen/";
import AddPostButton from "./main-screen/AddPostButton";
import LoadingScreen from "./loading-screen";

const MainMenu = () => {
  return (
    <div className="app-container">
      {/* <LoadingScreen /> */}
      <div className="app-sidebar">
        <SideBar />
      </div>
      <div className="app-content">
        <MainScreen />
      </div>
      {/* <AddPostButton ingredients /> */}
      {/* <AddPostButton link="/app/create" /> */}
    </div>
  );
};

export default MainMenu;
