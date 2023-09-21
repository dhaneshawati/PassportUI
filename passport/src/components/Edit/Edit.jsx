import React, { useState } from "react";
import "./Edit.css";
import ShutterBtn from "../../Assets/shutterButton.svg";
import Ellipse10 from "../../Assets/Ellipse10.svg";
import CrossMark from "../../Assets/Cross.svg";
import RetakeBtn from "../../Assets/retakeButton.png";

function Edit() {
  const [isRetake, setIsRetake] = useState(false);

  return (
    <div className="edit_page">
      <div className="rectangle_47"></div>
      <div className="rectangle_22">
        <input
          type="text"
          placeholder="Enter your first name"
          className="nameInput"
        />
      </div>
      <button className="saveBtn">Save</button>
      {!isRetake ? (
        <img
          src={ShutterBtn}
          alt="shutterBtn"
          className="shutterBtn"
          onClick={() => setIsRetake(true)}
        />
      ) : (
        <img src={RetakeBtn} alt="retakeBtn" className="retakeBtn" />
      )}
      <div className="closeBtn">
        <img src={Ellipse10} alt="ellipse10" className="ellipse10" />
        <img src={CrossMark} alt="crossMark" className="crossMark" />
      </div>
    </div>
  );
}

export default Edit;
