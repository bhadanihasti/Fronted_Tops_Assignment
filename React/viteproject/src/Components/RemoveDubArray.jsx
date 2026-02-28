import React from "react";

function RemoveDubArray() {
  let array = [...new Set([1, 2, 3, 2, 3, 4, 5])];
  return <div>{array}</div>;
}

export default RemoveDubArray;
