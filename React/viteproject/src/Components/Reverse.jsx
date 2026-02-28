import React from "react";

function Reverse({ str }) {
  let res = str.split("").reverse().join("");

  return <h1>{res}</h1>;
}

export default Reverse;
