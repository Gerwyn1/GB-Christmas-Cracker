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
      <div style={{ position: "relative",  transform:"translate(-2.5%, -105%) rotate(-22.5deg)", height:'100%' }}>
        <img
          src={`/public/GB_SPLIT/pop_top_${color}.webp`}
          alt="cracker top"
          style={{
            top:'27.1%',
            left:'37.5%',
            // transform:('translate(-50%, -50%)'),
            position: "absolute",
            width: "20%",
            height: "30%",
            cursor: "pointer",
            // transform:('translateY(-400%)')
          }}
        />
        <img
          src={`/public/GB_SPLIT/pop_btm_${color}.webp`}
          alt="cracker bottom"
          style={{
            top:'50%',
            left:'37.5%',
            // transform:('translate(-50%, -50%)'),
            position:'absolute',
            width: "20%",
            height: "30%",
            cursor: "pointer",
            // transform:('translate(-100%, -324%)'),
            // transform:('translateX(-10%)')
          }}
        />
      </div>
    </div>
  );
};

export default CrackerPicked;

// onClick={() => setStage("cracker opened")}
// animation: "crackerAnimation 2s infinite"
