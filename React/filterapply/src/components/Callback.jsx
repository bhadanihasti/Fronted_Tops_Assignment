import React, { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-500 text-white py-5 px-5"
      >
        Increase
      </button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default Parent;
