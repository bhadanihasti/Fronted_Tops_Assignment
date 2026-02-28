import React from "react";

function RightHalf() {
  let rows = 5;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default RightHalf;
