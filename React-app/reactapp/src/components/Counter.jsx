import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const incre = () => setCount((prev) => prev + 1);
  //2 rite lakhi shakay
  // const decre = () => setCount(count - 1);

  const incre = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  };
  const decre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <fieldset>
        <button onClick={incre}>+</button>
        {count} <button onClick={decre}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </fieldset>
    </div>
  );
}

export default Counter;
