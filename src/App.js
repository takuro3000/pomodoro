import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";
import phases from "./phases";

function App() {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning) return;
    if (timeLeft === 0) return;

    const timeoutId = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isTimerRunning, timeLeft]);

  // timeLeft が 0 になった場合、次のフェーズへ切り替える
  useEffect(() => {
    if (isTimerRunning && timeLeft === 0) {
      if (currentPhaseIndex < phases.length - 1) {
        const nextPhaseIndex = currentPhaseIndex + 1;
        setCurrentPhaseIndex(nextPhaseIndex);
        setTimeLeft(phases[nextPhaseIndex].duration);
      } else {
        setCurrentPhaseIndex(0);
        setTimeLeft(phases[0].duration);
      }
    }
  }, [timeLeft, isTimerRunning, currentPhaseIndex]);

  const handleButtonClick = () => {
    if (isTimerRunning) {
      if (window.confirm("今日のポモドーロは終了しますか？")) {
        setIsTimerRunning(false);
        setCurrentPhaseIndex(0);
        setTimeLeft(phases[0].duration);
      }
    } else {
      setIsTimerRunning(true);
    }
  };

  const appStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "50px",
  };

  return (
    <div style={appStyle}>
      <Timer timeLeft={timeLeft} />
      <Button onClick={handleButtonClick} isTimerRunning={isTimerRunning} />
    </div>
  );
}

export default App;
