import React from "react";

function FruitList() {
  const Fruits = ["apple", "banana", "mango", "kiwi"];
  return (
    <div>
      <h2>Fruit List</h2>
      <ul style={{ listStyle: "none" }}>
        {Fruits.map((Fruit, index) => (
          <li key={index}>{Fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
