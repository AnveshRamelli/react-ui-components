import { useState } from "react";
import "./count.css";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button onClick={() => setCount(count - 1)}> - </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};

export default Count;
