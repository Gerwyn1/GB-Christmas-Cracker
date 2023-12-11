/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars

import { useState, useEffect } from "react";

const CrackerPicked = ({ setStage, color }) => {
  const [scaleX, setSetScaleX] = useState(1);
  const [scaleY, setSetScaleY] = useState(1);
  const [crackerTop, setCrackerTop] = useState("23.6%");
  const [crackerBottom, setCrackerBottom] = useState("50%");
  const [pull, setPull] = useState(0);

  console.log(pull);

  useEffect(() => {
    if (pull === 5) {
      setCrackerTop((position) => position.replace("%", "") - 15 + "%");
      setCrackerBottom(
        (position) => Number(position.replace("%", "")) + 15 + "%"
      );
    } else if (pull < 5) {
      setSetScaleX((x) => (x -= 0.05));
      setSetScaleY((y) => (y += 0.05));
      setCrackerTop((position) => position.replace("%", "") - 0.1 + "%");
      setCrackerBottom(
        (position) => Number(position.replace("%", "")) + 0.1 + "%"
      );
    }
  }, [pull]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="/Images/WebP/popping_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          filter: pull === 5 ? "brightness(.6)" : "brightness(1)",
        }}
      />
      <div
        style={{
          position: "relative",
          transform: `translate(-2.5%, -105%) rotate(-22.5deg) scale(${
            pull >= 5 ? 1 : scaleX
          }, ${pull >= 5 ? 1 : scaleY})`,
          height: "100%",
        }}
        onClick={(e) => {
          if (
            (e.target.id === "top_cracker" ||
              e.target.id === "bottom_cracker") &&
            pull < 5
          ) {
            setPull((pull) => pull + 1);
          }
        }}
      >
        <img
          id="top_cracker"
          src={`/public/GB_SPLIT/pop_top_${color}.webp`}
          alt="cracker top"
          style={{
            top: crackerTop,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
            transition: "top .4s cubic-bezier(.01,1,.32,.75)",
          }}
        />
        <img
          id="bottom_cracker"
          src={`/public/GB_SPLIT/pop_btm_${color}.webp`}
          alt="cracker bottom"
          style={{
            top: crackerBottom,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
            transition: "top .4s cubic-bezier(.01,1,.32,.75)",
          }}
        />
      </div>
    </div>
  );
};

export default CrackerPicked;

// animation: "crackerAnimation 2s infinite"
