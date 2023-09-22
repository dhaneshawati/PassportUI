import React, { useState } from "react";
import "./Edit.css";
import ShutterBtn from "../../Assets/shutterButton.svg";
import Ellipse10 from "../../Assets/Ellipse10.svg";
import CrossMark from "../../Assets/Cross.svg";
import RetakeBtn from "../../Assets/retakeButton.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef } from "react";
import { useCallback } from "react";

function Edit() {
  const [fName, setFName] = useState("");
  const [picture, setPicture] = useState("");
  const [url, setUrl] = useState("");

  const picRef = useRef(null);
  const videoconstraints = {
    width: 96,
    height: 109,
    facingMode: "user",
  };
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/", { state: { firstName: "", photo: "" } });
  };
  const handleSave = () => {
    navigate("/", { state: { firstName: fName, photo: picture } });
  };
  const handleInput = (e) => {
    var letters = /^[A-Za-z]+$/;
    if (e.target.value.match(letters) || e.target.value == "") {
      setFName(e.target.value);
    } else {
      alert("only letters are allowed");
      setFName(fName.substring(0, fName.length));
    }
  };
  const rotateImage = (imageBase64, cb) => {
    var img = new Image();
    img.src = imageBase64;
    img.onload = () => {
      var canvas = document.createElement("canvas");
      const maxDim = Math.max(img.height, img.width);
      canvas.width = img.height;
      canvas.height = img.width;
      var ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, maxDim / 2, maxDim / 2);
      ctx.rotate(90 * (Math.PI / 180));
      ctx.drawImage(img, -maxDim / 2, -maxDim / 2);
      console.log(img.src);
      cb(canvas.toDataURL("image/jpeg"));
    };
    // setPicture(url);
  };
  const capture = useCallback(() => {
    const pictureSrc = picRef.current.getScreenshot({ width: 96, height: 109 });
    // rotateImage(pictureSrc, (url) => {
    //   setUrl(url);
    //   // setPicture(url);
    //   console.log(url, pictureSrc);
    // });
    // console.log(url);
    setPicture(pictureSrc);
  });

  return (
    <div className="edit_page">
      <div className="rectangle_47">
        {picture == "" ? (
          <Webcam
            audio={false}
            height={365}
            ref={picRef}
            width={314}
            screenshotFormat="image/jpeg"
            videoConstraints={videoconstraints}
          />
        ) : (
          <img src={picture} alt="profileImage" />
        )}
      </div>
      <div className="rectangle_22">
        <input
          type="text"
          placeholder="Enter your first name"
          className="nameInput"
          maxLength={30}
          onChange={handleInput}
          value={fName}
        />
      </div>
      <button className="saveBtn" onClick={handleSave}>
        Save
      </button>
      {picture == "" ? (
        <img
          src={ShutterBtn}
          alt="shutterBtn"
          className="shutterBtn"
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        />
      ) : (
        <img
          src={RetakeBtn}
          alt="retakeBtn"
          className="retakeBtn"
          onClick={(e) => {
            e.preventDefault();
            setPicture("");
          }}
        />
      )}
      <div className="closeBtn" onClick={handleClose}>
        <img src={Ellipse10} alt="ellipse10" className="ellipse10" />
        <img src={CrossMark} alt="crossMark" className="crossMark" />
      </div>
    </div>
  );
}

export default Edit;
