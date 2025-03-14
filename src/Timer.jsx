import React from "react";

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

  return (
    <div style={timerContainer}>
      <div style={timeText}>25:00</div>
    </div>
  );
};

export default Timer;
