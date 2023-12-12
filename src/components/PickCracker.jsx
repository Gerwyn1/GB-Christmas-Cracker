import { useEffect, useRef, useState } from "react";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  // const crackerPicked = useRef();

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(windowSize.width, windowSize.height);

  const windowDifference = windowSize.height - windowSize.width;

  const surfacePro7 =
    windowSize.width >= 912 &&
    windowSize.height <= 1368 &&
    windowDifference >= 450;

  const galaxyFold =
    windowSize.width >= 280 &&
    windowSize.width <= 300 &&
    windowSize.height >= 600 &&
    windowSize.height <= 700;

  const samgsungGalaxyNote5 =
    windowSize.width >= 450 &&
    windowSize.width <= 480 &&
    windowSize.height >= 800 &&
    windowSize.height <= 900;

  const microsoftSurfacePro =
    windowSize.width >= 600 &&
    windowSize.width <= 800 &&
    windowSize.height >= 1100 &&
    windowSize.height <= 1280;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial cleanup to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        width: "100%",
      }}
    >
      <img
        src={"/Images/WebP/cover_bg.webp"}
        style={{
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
          bottom: windowSize.width >= 5000 ? '5%' : microsoftSurfacePro
            ? "1%"
            : samgsungGalaxyNote5
            ? "1%"
            : galaxyFold
            ? "6%"
            : surfacePro7
            ? "2%"
            : windowDifference >= 370 && windowSize.width >= 1599
            ? "4%"
            : windowDifference >= 370 && windowSize.width < 350
            ? "5%"
            : windowDifference >= 370 && windowSize.width > 350
            ? "2%"
            : "2%",
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
          left: windowSize.width >= 5000 ? '3%' : windowDifference >= 370 ? "2%" : "9%",
          bottom: windowDifference >= 370 ? "17.5%" : "16%",
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
          bottom: windowDifference >= 370 ? "18%" : "15%",
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
          bottom: windowDifference >= 370 ? "13%" : "10%",
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
          bottom: windowDifference >= 370 ? "23%" : "20%",
          right: windowDifference >= 370 ? "63%" : "60%",
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
          bottom: windowDifference >= 370 ? "8%" : "5%",
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
