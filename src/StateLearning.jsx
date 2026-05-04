import { useState } from "react";

export default function StatePractice() {
  const [count, setCount] = useState(1);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
}
