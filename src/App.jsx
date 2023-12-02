import { useState } from "react";
import "./App.css";

function App() {
  return (
<div>


    <div
      style={{
        backgroundImage: `url("/public/Images/WebP/cover_bg.webp")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: "relative",
        height: "100vh",
        // width:'1000px',
        // maxWidth: '100%'
       
        // marginTop: 'auto'
      }}
    >
      {/* <img
        src="/public/Images/WebP/cover_bg.webp"
        style={{
          objectFit: "cover",
          position: "relative",
          height: "100%",
        }}
      /> */}
      <img
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 9999,
          objectFit: "contain",
          maxWidth: "100%",
          display: "block",
        }}
        src="/public/Images/WebP/popper_cover.webp"
      />

      {/* <img
        src="/public/Images/WebP/extended/Cover_bg GBTB.png"
        style={{
          objectFit: "cover",
          position: "relative",
          height: "auto",
          width: "100%",
          top: "-180px",
        }}
      />
      <img
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 9999,
          objectFit: "contain",
          maxWidth: "100%",
          display: "block",
        }}
        src="/public/Images/WebP/popper_cover.webp"
      /> */}
      {/* RED CRACKER */}
      {/* <img
        style={{
          position: "absolute",
          maxWidth: "65px",
          bottom: "20%",
          right: "25.5%",
          zIndex: 9998,
          objectFit: "contain",
          transform: "rotate(-10deg)",
        }}
        src="/public/Images/WebP/pop_r.webp"
      /> */}
      {/* YELLOW CRACKER */}
      {/* <img
        style={{
          position: "absolute",
          maxWidth: "65px",
          bottom: "5%",
          right: "55%",
          zIndex: 9998,
          objectFit: "contain",
          transform: "rotate(-47.5deg)",
        }}
        src="/public/Images/WebP/pop_y.webp"
      /> */}
      {/* GREEN CRACKER */}
      {/* <img
        style={{
          position: "absolute",
          maxWidth: "65px",
          bottom: "24%",
          right: "60%",
          zIndex: 9998,
          objectFit: "contain",
          transform: "rotate(-25.5deg)",
        }}
        src="/public/Images/WebP/pop_g.webp"
      /> */}
      {/* BLUE CRACKER */}
      {/* <img
        style={{
          position: "absolute",
          maxWidth: "65px",
          bottom: "15%",
          right: "37.5%",
          zIndex: 9995,
          objectFit: "contain",
          transform: "rotate(-18.5deg)",
        }}
        src="/public/Images/WebP/pop_b.webp"
      /> */}
    </div>
    </div>
  );
}

export default App;
