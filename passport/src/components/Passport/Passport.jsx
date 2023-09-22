import React from "react";
// import Profile from "../../Assets/Profile-photo.svg";
import EditBtn from "../../Assets/EditBtn.png";
// import WorldMap from "../WorldMap/WorldMap";
import CheckMark1 from "../../Assets/Checkmark1.svg";
import CheckMark2 from "../../Assets/Checkmark2.svg";
import CheckMark3 from "../../Assets/Checkmark3.svg";
import WorldMapImg from "../../Assets/WorldMap.png";
import Profile from "../../Assets/Profile-photo.svg";
import { useNavigate } from "react-router-dom";

function Passport({ fName, profilePhoto }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/edit");
  };
  return (
    <div className="passport">
      <div className="myPassport">
        {/* <div className="rectangle23"></div> */}
        <div className="milkybar_container">
          <div className="milky_logo"></div>
        </div>
        <div className="Group9">
          <div className="earth"></div>
        </div>
        <span className="emboss">Passport</span>
      </div>
      <div className="rectangle28"></div>
      <div className="p_upper">
        {/* <div className="text_explore">I’m ready to discover the world !</div> */}
        <div className="dp">
          <img
            src={profilePhoto}
            alt="profile_photo"
            className={
              profilePhoto == Profile ? "profile_photo" : "capturedImg"
            }
            onClick={handleEdit}
          />
          <div onClick={handleEdit}>
            <div className="rectangle71"></div>
            <img src={EditBtn} alt="editBtn" className="editBtn" />
          </div>
        </div>
        <div className="details">
          {/* <div className="rectangle71"></div>
          <img src={EditBtn} alt="editBtn" className="editBtn" /> */}
          <div className="namefield">NAME</div>
          <div className={fName == "NAME" ? "nameText" : "userName"}>
            {fName}
          </div>
          <div className="text_explore">I’m ready to discover the world !</div>
        </div>
        <div className="page_gradient"></div>
      </div>
      <div className="p_bottom">
        <div className="rectangle29"></div>
        <div className="insideMap">
          {/* <WorldMap /> */}
          <img src={WorldMapImg} alt="worldmap" className="worldImage" />
          <div className="page_grad"></div>
          <div className="continent_text">Continents Explored</div>
          <div className="lock1"></div>
          <div className="lock2"></div>
          <div className="lock3"></div>
          <img src={CheckMark1} alt="checkmark1" className="checkmark1" />
          <img src={CheckMark2} alt="checkmark2" className="checkmark2" />
          <img src={CheckMark3} alt="checkmark3" className="checkmark3" />
        </div>
      </div>
    </div>
  );
}

export default Passport;
