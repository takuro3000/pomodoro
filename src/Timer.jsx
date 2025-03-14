import React from "react";

const Timer = ({ timeLeft }) => {
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
