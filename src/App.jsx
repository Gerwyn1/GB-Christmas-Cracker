import { useState } from "react";
import "./App.css";
import PickCracker from "./components/PickCracker";
import CrackerPicked from "./components/CrackerPicked";
import CrackerOpened from "./components/CrackerOpened";


function App() {
  const [stage, setStage] = useState("cracker opened");
  const [color, setColor] = useState(null)
  
  return (
    <>
      {stage === "pick a cracker" ? (
        <PickCracker setStage={setStage} setColor={setColor}/>
      ) : stage === "cracker picked" ? (
        <CrackerPicked setStage={setStage} color={color}/>
      ) : stage === "cracker opened" ? (
        <CrackerOpened />
      ) : null}
    </>
  );
}

export default App;
