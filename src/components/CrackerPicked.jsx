/* eslint-disable react/prop-types */

// import pop_b from "/Images/SVG/pop_b_bg.svg";

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
        src="/Images/WebP/popping_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          filter: "brightness(.5)",
        }}
      />
      <img
        src={`/Images/WebP/pop_${color?.split("").slice(0, 1)}.webp`}
        // src={pop_b}
        alt="cracker"
        style={{
          position: "absolute",
          height: "80%",
          width: "20%",
          transform: "rotate(-20deg)",
          left: "40%",
          top: "0%",
          cursor:'pointer'
        }}
        onClick={() => setStage("cracker opened")}
      />

    </div>
  );
};

export default CrackerPicked;
