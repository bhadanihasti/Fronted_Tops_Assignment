import React from "react";

function InvertedRight() {
  let rows = 5;
  let output = [];

  for (let i = rows; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    output.push(<div key={i}>{line}</div>);
  }

  return <pre>{output}</pre>;
}

export default InvertedRight;
