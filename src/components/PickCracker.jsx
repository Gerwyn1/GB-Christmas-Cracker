import { useEffect, useRef } from "react";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  const crackerPicked = useRef()
  // const beforeStyles = {
  //   content: '""',
  //   background: 'url("/newImages/spear-sword.png")',
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "contain",
  //   position: "absolute",
  //   bottom: "-10%",
  //   right: "-20%",
  // };

  useEffect(() => {
 
  }, [])
  

  const crackerAnimation = {
    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    transform: "rotate(-10deg) translate3d(0, 0, 0)",
    backfaceVisibility: "hidden",
    perspective: "1000px",
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={"/Images/WebP/cover_bg.webp"}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      {/* CROPPED BAG */}
      <img
        className="cropped-bag"
        style={{
          position: "absolute",
          bottom: "-12%",
          right: "-17%",
          zIndex: 9999,
          width: "100%",
          height: "40%",
          transform: "rotate(-25deg)",
        }}
        src="/newImages/fixed-bag.png"
      />
      {/* SPEAR AND SWORD */}
      <img
        style={{
          position: "absolute",
          width: "16.5%",
          // height: "16.5%",
          right: "10%",
          bottom: "0%",
          zIndex: 9997,
          // transform: "rotate(0deg)",
        }}
        src="/newImages/spear-sword.png"
      />
      {/* HAMMER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "32.5%",
          left: "11%",
          bottom: "14.5%",
          zIndex: 4999,
        }}
        src="/Archive/hammer.png"
      />

      {/* RED CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          right: "26%",
          bottom: "15%",
          zIndex: 9998,
          transform: "rotate(-10deg)",
          cursor: "pointer",
          //
        }}
        src="/Images/WebP/pop_r.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("r");
        }}
      />
      {/* BLUE CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "10%",
          right: "37.5%",
          zIndex: 9995,
          transform: "rotate(-18.5deg)",
          cursor: "pointer",
        }}
        src="/Images/WebP/pop_b.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("b");
        }}
      />
      {/* GREEN CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "20%",
          right: "60%",
          zIndex: 9999,
          transform: "rotate(-30.5deg)",
          cursor: "pointer",
        }}
        src="/Images/WebP/pop_g.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("g");
        }}
        useMap="#image-map"
      />
      {/* YELLOW CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "5%",
          right: "55%",
          zIndex: 9998,
          transform: "rotate(-47.5deg)",
          cursor: "pointer",
        }}
        src="/Images/WebP/pop_y.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("y");
        }}
      />
    </div>
  );
};

export default PickCracker;
