/* eslint-disable react/prop-types */

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
        src="/public/Images/WebP/popping_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      <img
        src={`/Images/WebP/pop_${color?.split("").slice(0, 1)}.webp`}
        alt="cracker"
        style={{
          position: "absolute",
          height: "100%",
          width: "15%",
          transform: "rotate(-20deg)",
          left: "40%",
          top: "0%",
        }}
        onClick={() => setStage("cracker opened")}
      />
    </div>
  );
};

export default CrackerPicked;
