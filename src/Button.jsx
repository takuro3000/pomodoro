import React from "react";

const Button = () => {
  const buttonStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#fff",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2.2rem",
    color: "#fff",
  };

  return (
    <button style={buttonStyle}>
      <span style={iconStyle}>&#9654;</span>
    </button>
  );
};

export default Button;
