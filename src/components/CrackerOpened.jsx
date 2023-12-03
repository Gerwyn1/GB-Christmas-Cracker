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
          position: "relative",
          height: "35%",
          width: "100%",
          transform: "translateY(-180%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            position: "absolute",
            inset: "0",
            left: "5%",
            width: "90%",
            height:'100%'
          }}
          src={"/Images/WebP/joke_box.webp"}
          alt="joke box"
        />
        <p
          style={{
            color: "red",
            position: "absolute",
            top: 0,
            left: "10%",
            width: "40%",
            fontSize: '2vw'
          }}
        >
          Why do reindeers like Beyonce so much?
        </p>
        <p
          style={{
            color: "black",
            position: "absolute",
            top:'50%',
            left: "40%",
            width: "40%",
            fontSize: '2vw'
          }}
        >
          She sleighs
        </p>
        <img
          style={{
            width: "25%",

            position: "absolute",
            bottom: '10%',
            right: "8%",
          }}
          src="/Images/SVG/share_btn.svg"
          alt="share button"
        />
      </div>
    </div>
  );
};

export default CrackerOpened;
