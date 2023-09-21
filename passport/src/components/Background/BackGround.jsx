import React from "react";
import Cloud1 from "../../Assets/Cloud1.png";
import Cloud2 from "../../Assets/Cloud2.png";
import Plane2 from "../../Assets/Plane2.svg";
import Plane3 from "../../Assets/Plane3.svg";
import Path1 from "../../Assets/path1.svg";
import V1 from "../../Assets/V1.png";
import V3 from "../../Assets/V3.png";
import V5 from "../../Assets/V5.png";

function BackGround() {
  return (
    <div className="background">
      <div className="vector">
        <img src={V1} alt="V1" className="V1" />
      </div>
      <div className="vector_3">
        <img src={V3} alt="V3" className="V3" />
      </div>
      <div className="vector_4">
        <img src={Path1} alt="path1" className="path1" />
      </div>
      <div className="vector_5">
        <img src={V5} alt="V5" className="V5" />
      </div>
      <img src={Cloud1} alt="Cloud1" className="cloud1" />
      <img src={Cloud2} alt="Cloud2" className="cloud2" />
      <img src={Plane2} alt="Plane2" className="plane2" />
      <img src={Plane3} alt="Plane3" className="plane3" />
    </div>
  );
}

export default BackGround;
