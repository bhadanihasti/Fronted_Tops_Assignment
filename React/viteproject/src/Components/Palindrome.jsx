import React from "react";

function Palindrome({ str }) {
  let reverse = str.split("").reverse().join("");
  let Palindrome = str === reverse;
  return <div>{Palindrome ? "Palindrome ✅" : "Not Palindrome ❌"}</div>;
}

export default Palindrome;
