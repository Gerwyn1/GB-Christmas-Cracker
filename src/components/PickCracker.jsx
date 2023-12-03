/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/Images/WebP/cover_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      <img
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 9999,
          width: "100%",
          height: "50%",
        }}
        src="/Images/WebP/popper_cover.webp"
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
        }}
        src="/Images/WebP/pop_r.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("red");
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
          setColor("blue");
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
          setColor("green");
        }}
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
          setColor("yellow");
        }}
      />
    </div>
  );
};

export default PickCracker;
