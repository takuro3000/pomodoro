import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  // タイマーが動作中かどうかの状態を管理
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500);

  // タイマーのカウントダウン処理（1秒ごとに減少）
  useEffect(() => {
    let intervalId;
    if (isTimerRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning, timeLeft]);

  // ボタンのクリック時の処理：タイマーが動作中なら停止＆リセット、停止中なら開始
  const handleButtonClick = () => {
    if (isTimerRunning) {
      // 停止中の場合、タイマーを停止してリセット
      setIsTimerRunning(false);
      setTimeLeft(1500);
    } else {
      // 開始する場合
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
