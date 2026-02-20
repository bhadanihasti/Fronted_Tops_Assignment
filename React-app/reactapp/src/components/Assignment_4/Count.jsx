import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const incre = () => setCount((prev) => prev + 1);
  // 2 rite lakhi shakay
  const decre = () => setCount(count - 1);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          width: "300px",
          margin: "auto",
          padding: "10px",
        }}
      >
        <button onClick={incre} style={{ border: "1px solid black" }}>
          +
        </button>
        {count}{" "}
        <button onClick={decre} style={{ border: "1px solid black" }}>
          -
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ border: "1px solid black" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Count;
