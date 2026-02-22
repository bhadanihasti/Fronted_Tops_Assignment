import React, { useEffect, useState } from "react";

function UseEffectsTask() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  useEffect(() => {
    console.log(`Count is updated to: ${count}`);
  }, [count]);
  return (
    <div>
      <h2>Count is updated to: {count}</h2>
      <button onClick={handleClick}>incre</button>
    </div>
  );
}

export default UseEffectsTask;
