import React from "react";

function RightHalfAlphabet() {
  let rows = 5;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j) + " ";
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default RightHalfAlphabet;
