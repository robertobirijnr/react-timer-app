import React, { useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function App() {
  const [title, setTitle] = useState("Let the countdown begins!!");
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeHandler = () => {
    if (intervalRef.current != null) return;

    setTitle("Counting Begins");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        setTimeLeft(25 * 60);
        return 0;
      });
    }, 1000);
  };

  const stopTimeHandler = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Counting Stopped");
    setIsRunning(false);
  };

  const resetTimeHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIsRunning(false);
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
        {!isRunning && <button onClick={startTimeHandler}>Start</button>}
        {isRunning && <button onClick={stopTimeHandler}>Stop</button>}
        <button onClick={resetTimeHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
