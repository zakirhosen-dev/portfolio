import { useState } from "react";

export default function StateTodo() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    margin: "4px",
    padding: "10px",
    fontFamily: "Arial",
    font: "10px",
  };

  const [count, setCount] = useState(22);
  const handleClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container mt-5">
        <button style={mystyle} onClick={handleClick}>
          -
        </button>
        <button style={mystyle}>{count}</button>
        <button style={mystyle}>+</button>
      </div>
    </>
  );
}
