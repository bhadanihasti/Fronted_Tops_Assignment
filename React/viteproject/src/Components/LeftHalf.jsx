import React from "react";

function LeftHalf() {
  let rows = 5;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let space = 1; space <= rows - i; space++) {
      line += "  ";
    }

    for (let star = 1; star <= i; star++) {
      line += star + " ";
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default LeftHalf;
