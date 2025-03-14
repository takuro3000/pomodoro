import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
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
      <Timer />
      <Button />
    </div>
  );
}

export default App;
