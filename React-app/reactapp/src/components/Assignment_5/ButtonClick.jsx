import React, { useState } from "react";

function ButtonClick() {
  const [Text, setText] = useState("Not Clicked");
  const handleClick = () => {
    setText("Clicked");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ marginTop: "20px", border: "1px solid black" }}
      >
        {Text}
      </button>
    </div>
  );
}

export default ButtonClick;
