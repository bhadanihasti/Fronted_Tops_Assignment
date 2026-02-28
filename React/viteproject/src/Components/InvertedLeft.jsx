import React from "react";

function InvertedLeft() {
  let rows = 5;
  let output = [];

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let space = 1; space < i; space++) {
      line += "  ";
    }

    for (let star = 1; star <= rows - i + 1; star++) {
      line += "* ";
    }

    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default InvertedLeft;
