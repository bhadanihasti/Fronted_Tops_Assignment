import React from "react";

function Diamond() {
  let rows = 5;
  let output = [];

  // Upper
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let space = 1; space <= rows - i; space++) {
      line += "  ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      line += "* ";
    }

    output.push(<div key={"u" + i}>{line}</div>);
  }

  // Lower
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";

    for (let space = 1; space <= rows - i; space++) {
      line += "  ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      line += "* ";
    }

    output.push(<div key={"l" + i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default Diamond;
