import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  // タイマーが動作中かどうかの状態を管理
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // ボタンを押したときにタイマーを開始する
  const handleStartTimer = () => {
    setIsTimerRunning(true);
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
      <Timer isTimerRunning={isTimerRunning} />
      <Button onClick={handleStartTimer} />
    </div>
  );
}

export default App;
