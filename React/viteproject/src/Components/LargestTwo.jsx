import React from "react";

function LargestTwo() {
  let a = 37;
  let b = 20;
  let largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  return <div>{largest}</div>;
}

export default LargestTwo;
