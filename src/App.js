import React, { useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function App() {
  const [title, setTitle] = useState("Let the countdown begins!!");
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef(null);

  const startTimeHandler = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        return 0;
      });
    }, 1000);
  };

  const stopTimeHandler = () => {
    clearInterval(intervalRef.current);
  };

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimeHandler}>Start</button>
        <button onClick={stopTimeHandler}>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
