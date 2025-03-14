import React, { useState, useEffect } from "react";

const Timer = () => {
  const timerContainer = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
  };

  const timeText = {
    fontSize: "4rem",
    fontWeight: "bold",
  };

  const [timeLeft, setTimeLeft] = useState(1500);

  useEffect(() => {
    if (timeLeft === 0) return;

    // 1秒ごとにカウントダウン
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // コンポーネントのアンマウント時にインターバルをクリア
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={timerContainer}>
      <div style={timeText}>{`${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`}</div>
    </div>
  );
};

export default Timer;
