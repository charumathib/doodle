import "./index.css";
import { useState } from "react";

export default function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function getChar(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? " ✕ " : state1 === 1 ? "   ✓   " : "(✓)";
  }

  function getBackground(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? "#808080" : state === 1 ? "#a9d22d" : "#FFD700";
  }

  function toggleState1() {
    setState1((prevState) => (prevState + 1) % 3);
  }

  function toggleState2() {
    setState2((prevState) => (prevState + 1) % 3);
  }

  function toggleState3() {
    setState3((prevState) => (prevState + 1) % 3);
  }

  return (
    <div className="float-container">
      <div
        style={{
          position: "absolute",
          bottom: windowSize.innerHeight - 220,
          left: 50,
        }}
      >
        <h3> Charu </h3>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: windowSize.innerHeight - 300,
          left: 50,
        }}
      >
        <h3> You </h3>
      </div>
      <div className="float-child">
        <h2>Monday, September 26th </h2>
        <h3>2:30 - 4:30 PM </h3>
        <div className="saved"> ✓ </div>
        <button
          class="button"
          onClick={toggleState1}
          style={{ backgroundColor: getBackground(0) }}
        >
          {getChar(0)}
        </button>
      </div>
      <div className="float-child">
        <h2>Monday, September 26th </h2>
        <h3>8:00 - 8:30 PM </h3>
        <div className="saved">✓</div>
        <button
          class="button"
          onClick={toggleState2}
          style={{
            backgroundColor: getBackground(1),
          }}
        >
          {getChar(1)}
        </button>
      </div>
      <div className="float-child">
        <h2>Tuesday, September 27th </h2>
        <h3>1:00 - 7:30 PM </h3>
        <div className="saved">✓</div>
        <button
          class="button"
          onClick={toggleState3}
          style={{
            backgroundColor: getBackground(2),
          }}
        >
          {getChar(2)}
        </button>
      </div>
    </div>
  );
}
