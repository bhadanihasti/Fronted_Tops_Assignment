import React from "react";

function InvertedFull() {
  let rows = 5;
  let output = [];

  for (let i = rows; i >= 1; i--) {
    let line = "";

    for (let space = 1; space <= rows - i; space++) {
      line += "  ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      line += "* ";
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default InvertedFull;
