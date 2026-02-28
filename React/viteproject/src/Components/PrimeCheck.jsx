import React from "react";

function PrimeCheck() {
  let num = 7;
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  return <div>{isPrime ? `${num} is Prime` : `${num} is Not Prime`}</div>;
}

export default PrimeCheck;
