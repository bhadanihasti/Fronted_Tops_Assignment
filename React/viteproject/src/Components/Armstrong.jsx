import React from "react";

function Armstrong() {
  let num = 153;
  let original = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
  }
  return (
    <div>{sum === original ? `${original} is arm` : `${original} is not`}</div>
  );
}

export default Armstrong;
