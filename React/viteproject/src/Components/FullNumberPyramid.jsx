import React from "react";

function FullNumberPyramid() {
  let rows = 5;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    let line = "";

    // Spaces
    for (let space = 1; space <= rows - i; space++) {
      line += " ";
    }

    // Increasing numbers
    for (let j = 1; j <= i; j++) {
      line += j;
    }

    // Decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default FullNumberPyramid;
