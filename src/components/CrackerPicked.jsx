/* eslint-disable react/prop-types */

// import pop_b from "/Images/SVG/pop_b_bg.svg";

// eslint-disable-next-line no-unused-vars

const CrackerPicked = ({ setStage, color }) => {
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
        }}
      />
      <div style={{ position: "relative", bottom: '50%', height: '100%' }}>
        <img
          src={`/public/GB_SPLIT/pop_top_${color}.webp`}
          alt="cracker"
          style={{
            position: "absolute",
            width: "15%",
            bottom:'100%',
            cursor: "pointer",
          }}
        />
        <img
          src={`/public/GB_SPLIT/pop_btm_${color}.webp`}
          alt="cracker"
          style={{
            position: "absolute",
            bottom:'86.5%',
            width: "15%",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default CrackerPicked;

// onClick={() => setStage("cracker opened")}
// animation: "crackerAnimation 2s infinite"
