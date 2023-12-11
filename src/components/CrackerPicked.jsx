/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars

// setStage("cracker opened")

import { useState } from "react";

const CrackerPicked = ({ setStage, color }) => {
  const [scaleX, setSetScaleX] = useState(1);
  const [scaleY, setSetScaleY] = useState(1);
  const [crackerTop, setCrackerTop] = useState("23.2%");
  const [crackerBottom, setCrackerBottom] = useState("50%");
  const [pull, setPull] = useState(0);
  console.log(pull);

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
        }}
      />
      <div
        style={{
          position: "relative",
          transform: `translate(-2.5%, -105%) rotate(-22.5deg) scale(${
            pull === 6 ? 1 : scaleX
          }, ${pull === 6 ? 1 : scaleY})`,
          height: "100%",
        }}
        onClick={() => {
          setSetScaleX((x) => (x -= 0.05));
          setSetScaleY((y) => (y += 0.05));
          setCrackerTop((position) => position.replace("%", "") - 0.1 + "%");
          setCrackerBottom(
            (position) => Number(position.replace("%", "")) + 0.1 + "%"
          );
          setPull((pull) => {
            if (pull >= 6) {
              pull = 0;
              return pull;
            }
            pull += 1;
            return pull;
          });
        }}
      >
        <img
          src={`/public/GB_SPLIT/pop_top_${color}.webp`}
          alt="cracker top"
          style={{
            top: pull >= 6 ? "23.2%" : crackerTop,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
          }}
        />
        <img
          src={`/public/GB_SPLIT/pop_btm_${color}.webp`}
          alt="cracker bottom"
          style={{
            top: pull >= 6 ? "50%" : crackerBottom,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default CrackerPicked;

// animation: "crackerAnimation 2s infinite"
