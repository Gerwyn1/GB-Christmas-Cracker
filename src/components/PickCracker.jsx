import { useEffect } from "react";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  const handleHotspotClick = (hotspotId) => {
    // Handle click for the hotspot with the given ID
    console.log(`Hotspot ${hotspotId} clicked`);
  };
  
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/Images/WebP/cover_bg.webp"
        id="resizable-image"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
        useMap="#image-map"
      />
      {/* <div style={{ position: "absolute", inset: 0 }}> */}

      <map useMap="image-map">
        <area
          target="_self"
          alt="house"
          title="house"
          href="/"
          coords="1,795,212,989"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();

            handleHotspotClick("house");
          }}
        />
        <area
          target="_self"
          alt="text-1"
          title="text-1"
          href="/"
          coords="91,113,502,224"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();

            handleHotspotClick("text-1");
          }}
        />
        <area
          target="_self"
          alt="text-2"
          title="text-2"
          href="/"
          coords="178,270,850,425"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();

            handleHotspotClick("text-2");
          }}
        />
        <area
          target="_self"
          alt="text-3"
          title="text-3"
          href="/"
          coords="436,435,1001,597"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();

            handleHotspotClick("text-3");
          }}
        />
      </map>

      {/* </div> */}
    </div>

    // <div
    //   style={{
    //     position: "relative",
    //     height: "100vh",
    //   }}
    // >
    //   <img
    //     src="/Images/WebP/cover_bg.webp"
    //     style={{
    //       position: "relative",
    //       height: "100%",
    //       width: "100%",
    //     }}
    //   />
    //   <img
    //     style={{
    //       position: "absolute",
    //       bottom: 0,
    //       right: 0,
    //       zIndex: 9999,
    //       width: "100%",
    //       height: "40%",
    //     }}
    //     src="/Archive/cropped_bag.png"
    //   />
    //   {/* SWORD */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       right: "9%",
    //       bottom: "24.5%",
    //       zIndex: 9997,
    //       // transform: "rotate(0deg)",
    //     }}
    //     src="/Archive/sword.png"
    //   />

    //   {/* SPEAR */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       right: "11%",
    //       bottom: "-14.5%",
    //       zIndex: 9997,
    //       // transform: "rotate(0deg)",
    //     }}
    //     src="/Archive/spear.png"
    //   />

    //   {/* HAMMER */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "32.5%",
    //       left: "11%",
    //       bottom: "14.5%",
    //       zIndex: 4999,
    //       // transform: "rotate(0deg)",
    //     }}
    //     src="/Archive/hammer.png"
    //   />

    //   {/* RED CRACKER */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       right: "26%",
    //       bottom: "15%",
    //       zIndex: 9998,
    //       transform: "rotate(-10deg)",
    //       cursor: "pointer",
    //     }}
    //     src="/Images/WebP/pop_r.webp"
    //     onClick={() => {
    //       setStage("cracker picked");
    //       setColor("red");
    //     }}
    //   />
    //   {/* BLUE CRACKER */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       bottom: "10%",
    //       right: "37.5%",
    //       zIndex: 9995,
    //       transform: "rotate(-18.5deg)",
    //       cursor: "pointer",
    //     }}
    //     src="/Images/WebP/pop_b.webp"
    //     onClick={() => {
    //       setStage("cracker picked");
    //       setColor("blue");
    //     }}
    //   />
    //   {/* GREEN CRACKER */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       bottom: "20%",
    //       right: "60%",
    //       zIndex: 9999,
    //       transform: "rotate(-30.5deg)",
    //       cursor: "pointer",
    //     }}
    //     src="/Images/WebP/pop_g.webp"
    //     // onClick={() => {
    //     //   setStage("cracker picked");
    //     //   setColor("green");
    //     // }}
    //     useMap="#image-map"
    //   />
    //   {/* YELLOW CRACKER */}
    //   <img
    //     style={{
    //       position: "absolute",
    //       maxWidth: "16.5%",
    //       bottom: "5%",
    //       right: "55%",
    //       zIndex: 9998,
    //       transform: "rotate(-47.5deg)",
    //       cursor: "pointer",
    //     }}
    //     src="/Images/WebP/pop_y.webp"
    //     onClick={() => {
    //       setStage("cracker picked");
    //       setColor("yellow");
    //     }}
    //   />
    //   <map name="image-map">
    //     <area
    //       target="_self"
    //       alt="green-cracker"
    //       title="green-cracker"
    //       href="#"
    //       coords="353,1491,0,9"
    //       shape="rect"
    //       onClick={() => handleHotspotClick("green-cracker")}
    //     />
    //   </map>
    // </div>
  );
};

export default PickCracker;
