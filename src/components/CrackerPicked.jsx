/* eslint-disable react/prop-types */
import React from "react";
import pop from "/Images/SVG/pop_r_bg.svg";

// eslint-disable-next-line no-unused-vars
const CrackerPicked = ({ setStage, color }) => {
  console.log(color)
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/public/Images/WebP/popping_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      <img
        src={`/Images/WebP/pop_${color?.split("").slice(0, 1)}.webp`}
        // src={pop}
        alt="cracker"
        style={{
          position: "absolute",
          height: "100%",
          width: "15%",
          transform: "rotate(-20deg)",
          left: "40%",
          top: "0%",
        }}
        onClick={() => setStage("cracker opened")}
      />
    </div>
  );
};

export default CrackerPicked;
