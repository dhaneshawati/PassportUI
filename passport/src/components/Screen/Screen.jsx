import React from "react";
import "./Screen.css";
import Time from "../../Assets/Time.svg";
import Battery from "../../Assets/Battery.svg";
import Cell from "../../Assets/Cellular.svg";
import Wifi from "../../Assets/Wifi.svg";
import Bottom from "../Bottom/Bottom";
import Home from "../../Assets/Home-icon.svg";
import Treasure from "../../Assets/Treasure-chest.svg";
import Sourvenirs from "../../Assets/sourvenirs.png";
import BackGround from "../Background/BackGround";
import Passport from "../Passport/Passport";
import "../../Fonts/HobeauxBold.ttf";
import { createFileName, useScreenshot } from "use-react-screenshot";
import { createRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../../Assets/Profile-photo.svg";
import { useEffect } from "react";

function Screen() {
  const ssRef = createRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/", { state: { firstName: "", photo: "" } });
  };
  // useEffect(() => {
  //   location.state.firstName = "";
  //   location.state.photo = "";
  // }, []);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const download = (image, { name = "passport", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => {
    takeScreenshot(ssRef.current).then(download);
  };
  return (
    <div className="screen_container" ref={ssRef}>
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
        <img src={Home} alt="home_icon" className="home" onClick={handleHome} />
        <div className="sourvenirs">
          <img src={Sourvenirs} alt="Treasure" className="treasure" />
        </div>
      </div>
      <BackGround />
      <Passport
        fName={location?.state?.firstName ? location?.state?.firstName : "NAME"}
        profilePhoto={location?.state?.photo ? location?.state?.photo : Profile}
      />
      <div className="downloadBtn" onClick={downloadScreenshot}></div>
      <Bottom />
    </div>
  );
}

export default Screen;
