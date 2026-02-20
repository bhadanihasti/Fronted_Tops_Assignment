import React from "react";

function PropsExample({ role, age, todo }) {
  return (
    <div>
      <h1>my role is {role}</h1>
      <h2>my age is {age}</h2>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.title}|||{item.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropsExample;
