// import React and our own CSS styling
import "./index.css";
import { useState } from "react";

// the main application itself!
export default function App() {
  // Maintain 3 separate states to store what the user's availability is:
  // one for each of the 3 hardcoded proposed dates/times
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  // Maintain the window size in the app state
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // Helper function to return the current window width/height
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  // Helper function that maps index to appropriate character to display on the button
  // Specifically, index 0 == "x" (for "no" availability), index 1 == "✓" (for "yes"), 
  // and index 2== "(✓)" (for "yes, if need be")
  function getChar(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? " ✕ " : state === 1 ? "   ✓   " : "(✓)";
  }

  // Helper function that maps state index to the appropriate background color of the button
  function getBackground(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? "#808080" : state === 1 ? "#a9d22d" : "#FFD700";
  }

  // Helper function that toggles the first state (the user's availability for the first date/time)
  function toggleState1() {
    setState1((prevState) => (prevState + 1) % 3);
  }

  // Helper function that toggles the second state (the user's availability for the second date/time)
  function toggleState2() {
    setState2((prevState) => (prevState + 1) % 3);
  }

  // Helper function that toggles the third state (the user's availability for the third date/time)
  function toggleState3() {
    setState3((prevState) => (prevState + 1) % 3);
  }

  // The actual HTML of the website
  return (
    // Situated in a float-container div that we styled manually
    <div className="float-container">
      <div
        style={{
          position: "absolute",
          bottom: windowSize.innerHeight - 220,
          left: 50,
        }}
      >
        {/* The name of the hard-coded person, Charu */}
        <h3> Charu </h3>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: windowSize.innerHeight - 300,
          left: 50,
        }}
      >
        {/* The name of the user */}
        <h3> You </h3>
      </div>
      {/* The float-child that contains the first hard-coded proposed date/time */}
      <div className="float-child">
        {/* The proposed date/time of the event */}
        <h2>Monday, September 26th </h2>
        <h3>2:30 - 4:30 PM </h3>
        {/* And Charu's hard-coded availability, "yes" */}
        <div className="saved"> ✓ </div>
        {/* As well as the hard-coded button that visually displays Charu's availability */}
        <button
          class="button"
          onClick={toggleState1}
          /* Get the right color to display for the availability */
          style={{ backgroundColor: getBackground(0) }}
        >
          {/* Get the right character to display for the availability */}
          {getChar(0)}
        </button>
      </div>
      {/* The float-child that contains the second hard-coded proposed date/time */}
      <div className="float-child">
        {/* The proposed date/time of the event */}
        <h2>Monday, September 26th </h2>
        <h3>8:00 - 8:30 PM </h3>
        {/* And Charu's hard-coded availability, "yes" */}
        <div className="saved">✓</div>
        {/* As well as the hard-coded button that visually displays Charu's availability */}
        <button
          class="button"
          onClick={toggleState2}
          /* Get the right color to display for the availability */
          style={{
            backgroundColor: getBackground(1),
          }}
        >
          {/* Get the right character to display for the availability */}
          {getChar(1)}
        </button>
      </div>
      {/* The float-child that contains the third hard-coded proposed date/time */}
      <div className="float-child">
        {/* The proposed date/time of the event */}
        <h2>Tuesday, September 27th </h2>
        <h3>1:00 - 7:30 PM </h3>
        {/* And Charu's hard-coded availability, "yes" */}
        <div className="saved">✓</div>
        {/* As well as the hard-coded button that visually displays Charu's availability */}
        <button
          class="button"
          onClick={toggleState3}
          /* Get the right color to display for the availability */
          style={{
            backgroundColor: getBackground(2),
          }}
        >
          {/* Get the right character to display for the availability */}
          {getChar(2)}
        </button>
      </div>
    </div>
  );
}
