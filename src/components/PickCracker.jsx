import { useEffect } from "react";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  const handleHotspotClick = (hotspotId) => {
    // Handle click for the hotspot with the given ID
    console.log(`Hotspot ${hotspotId} clicked`);
  };

 

  // useEffect(() => {
  //   function updateImageMap() {
  //     const originalWidth = 1081;
  //     const originalHeight = 1921;
  //     const newWidth = document.getElementById("resizable-image").width;
  //     const newHeight = document.getElementById("resizable-image").height;

  //     const areas = document.querySelectorAll('map[name="image-map"] area');
  //     areas.forEach((area) => {
  //       const originalCoords = area
  //         .getAttribute("coords")
  //         .split(",")
  //         .map(Number);
  //       const newCoords = originalCoords.map((coord, index) => {
  //         return index % 2 === 0
  //           ? (coord / originalWidth) * newWidth
  //           : (coord / originalHeight) * newHeight;
  //       });
  //       area.setAttribute("coords", newCoords.join(","));
  //     });
  //   }

  //   window.addEventListener("resize", updateImageMap);
  //   window.addEventListener("load", updateImageMap);

  //   return () => {
  //     window.removeEventListener("resize", updateImageMap);
  //     window.removeEventListener("load", updateImageMap);
  //   };
  // }, []);

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
      <map name="image-map">
        <area
          target="_self"
          alt="house"
          title="house"
          href="/"
          coords="0,794,160,975"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();

            handleHotspotClick("house");
          }}
        />
        <area
          target="_self"
          alt="house"
          title="house"
          href="/"
          coords="168,802,236,903,208,905,208,995,157,983,124,977,106,976,164,794"
          shape="poly"
          onClick={(event) => {
            event.preventDefault();
            handleHotspotClick("house");
          }}
        />
        <area
          target=""
          alt="text"
          title="text"
          href="/"
          coords="143,122,196,123,344,114,496,187,473,223,98,222,104,180,95,196,94,208,137,155"
          shape="poly"
          onClick={(event) => {
            event.preventDefault();
            handleHotspotClick("text");
          }}
        />
        <area
          target=""
          alt="text"
          title="text"
          href="/"
          coords="191,353,840,421"
          shape="rect"
          onClick={(event) => {
            event.preventDefault();
            handleHotspotClick("text");
          }}
        />
        <area
          target=""
          alt="text"
          title="text"
          href="/"
          coords="182,353,211,280,224,278,251,272,274,262,299,260,312,260,320,259,454,230,462,251,596,327,587,353,351,350,182,353"
          shape="poly"
          onClick={(event) => {
            event.preventDefault();
            handleHotspotClick("text");
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
