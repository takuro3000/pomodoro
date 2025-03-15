import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

const phases = [
  { label: "Work 1 (25分)", duration: 1500 },
  { label: "Break 1 (5分)", duration: 300 },
  { label: "Work 2 (25分)", duration: 1500 },
  { label: "Break 2 (5分)", duration: 300 },
  { label: "Work 3 (25分)", duration: 1500 },
  { label: "Break 3 (5分)", duration: 300 },
  { label: "Work 4 (25分)", duration: 1500 },
  { label: "Break 4 (5分)", duration: 300 },
  { label: "Long Break (15分)", duration: 900 },
];

function App() {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration);
  // タイマーが動作中かどうかの状態を管理
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // タイマーのカウントダウン処理（1秒ごとに減少）
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning, timeLeft]);

  // timeLeft が 0 になった場合、次のフェーズへ切り替える
  useEffect(() => {
    if (isTimerRunning && timeLeft === 0) {
      if (currentPhaseIndex < phases.length - 1) {
        const nextPhaseIndex = currentPhaseIndex + 1;
        setCurrentPhaseIndex(nextPhaseIndex);
        setTimeLeft(phases[nextPhaseIndex].duration);
      } else {
        // 最終フェーズ終了後、初期状態（Work 1）に戻す
        setCurrentPhaseIndex(0);
        setTimeLeft(phases[0].duration);
      }
    }
  }, [timeLeft, isTimerRunning, currentPhaseIndex]);

  // ボタンのクリック時の処理：タイマーが動作中なら停止＆リセット、停止中なら開始
  const handleButtonClick = () => {
    if (isTimerRunning) {
      if (window.confirm("今日のポモドーロは終了しますか？")) {
        setIsTimerRunning(false);
        setCurrentPhaseIndex(0);
        setTimeLeft(phases[0].duration);
      }
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
