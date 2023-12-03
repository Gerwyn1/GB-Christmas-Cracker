import React from "react";

const CrackerOpened = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/public/Images/WebP/joke_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "52.5%",
          height: "30%",
          width: "80%",
          transform: "translateY(-50%)",
          backgroundImage: `url("/Images/WebP/joke_box.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display : 'flex',
          flexDirection : 'column',
        }}
      >
        <p style={{ color: "red", }}>
          Why do reindeers like Beyonce so much?
        </p>
        <p style={{ color: "black",}}>
          She sleighs
        </p>
        <div >
          <img
            style={{ width: "25%",  }}
            src="/Images/SVG/share_btn.svg"
            alt="share button"
          />
        </div>
      </div>
    </div>
  );
};

export default CrackerOpened;
