import React from "react";
import "./Screen.css";
import Time from "../../Assets/Time.svg";
import Battery from "../../Assets/Battery.svg";
import Cell from "../../Assets/Cellular.svg";
import Wifi from "../../Assets/Wifi.svg";
import Bottom from "../Bottom/Bottom";
import Home from "../../Assets/Home-icon.svg";
import Treasure from "../../Assets/Treasure-chest.svg";
import BackGround from "../Background/BackGround";
import Passport from "../Passport/Passport";
import "../../Fonts/HobeauxBold.ttf";

function Screen() {
  return (
    <div className="screen_container">
      {/* <div className="screen"></div> */}
      <div className="status">
        <img src={Time} alt="time" className="time" />

        <div className="group_icons">
          <img src={Cell} alt="cellphone" className="cell" />
          <img src={Wifi} alt="wifi" className="wifi" />
          <img src={Battery} alt="battery" className="battery" />
        </div>
      </div>
      <div className="top_logos">
        <div className="logo_container">
          <div className="milkybar"></div>
        </div>
        <img src={Home} alt="home_icon" className="home" />
        <div className="sourvenirs">
          <div className="rectangle_frame">
            <img src={Treasure} alt="Treasure" className="treasure" />
          </div>
        </div>
      </div>
      <BackGround />
      <Passport />
      <div className="downloadBtn"></div>
      <Bottom />
    </div>
  );
}

export default Screen;
