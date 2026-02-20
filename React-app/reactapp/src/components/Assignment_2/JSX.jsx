import React from "react";

function JSX() {
  const topic = "JavaScript XML";
  const year = 2026;
  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        JSX stands for {topic}. It allows us to write HTML inside JavaScript. We
        are learning JSX in {year}.
      </p>
    </div>
  );
}

export default JSX;
