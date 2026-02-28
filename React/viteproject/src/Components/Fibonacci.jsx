import React from "react";

function Fibonacci() {
  let n = 10;
  let output = [];
  let a = 0;
  let b = 1;

  for (let i = 1; i <= n; i++) {
    output.push(<div key={i}>{a}</div>);

    let next = a + b;
    a = b;
    b = next;
  }
  return <div>{output}</div>;
}

export default Fibonacci;
