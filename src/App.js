import React, { useState } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function App() {
  const [title, setTitle] = useState("Let the countdown begins!!");
  const [timeLeft, setTimeLeft] = useState(10);

  const startTimeHandler = () => {
    setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
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
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
