import React from "react";
// import "./Home.css";

function Demo(props) {
  const name = props.name;
  const Todo = props.Todo || [];
  // props.Todo[0].title = "abc";

  return (
    <div>
      <h1>my name is {props.name}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugiat
        similique quos? Dignissimos assumenda ipsum consectetur quis ea
        voluptatum, non totam libero aperiam, suscipit minima laborum magni.
        Tenetur, ex earum. -{name}
      </p>

      {props.Todo && (
        <ul>
          {props.Todo.map((item) => (
            <li key={item.id}>
              {item.title} ||| {item.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Demo;
