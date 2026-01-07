import React from "react";

function Home(props) {
  const name = props.name;
  const Todo = props.Todo;
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste
        dicta sed officiis repudiandae doloremque autem nemo incidunt? Nulla
        porro animi doloribus ipsa harum inventore soluta eius vero, odit
        nobis.--{name}
      </p>

      <ul>
        {Todo.map((index) => (
          <li>
            {index.id}
            <span>&nbsp;&nbsp;&nbsp;</span>
            {index.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
