import React, { useState } from "react";
import "./Edit.css";
import ShutterBtn from "../../Assets/shutterButton.svg";
import Ellipse10 from "../../Assets/Ellipse10.svg";
import CrossMark from "../../Assets/Cross.svg";
import RetakeBtn from "../../Assets/retakeButton.png";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [isRetake, setIsRetake] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  const handleSave = () => {
    navigate("/");
  };
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
      <button className="saveBtn" onClick={handleSave}>
        Save
      </button>
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
      <div className="closeBtn" onClick={handleClose}>
        <img src={Ellipse10} alt="ellipse10" className="ellipse10" />
        <img src={CrossMark} alt="crossMark" className="crossMark" />
      </div>
    </div>
  );
}

export default Edit;
