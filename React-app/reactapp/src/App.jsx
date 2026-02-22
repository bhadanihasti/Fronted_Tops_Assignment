import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Demo from "./components/demo";
import PropsExample from "./components/PropsExample";
import Counter from "./components/Counter";
import Assignment_1 from "./components/Assignment_1";
import Greeting from "./components/Assignment_3/Greeting";
import Welcomemsg from "./components/Assignment_3/Welcomemsg";
import JSX from "./components/Assignment_2/JSX";
import UserCard from "./components/Assignment_4/UserCard";
import Count from "./components/Assignment_4/Count";
import ButtonClick from "./components/Assignment_5/ButtonClick";
import Form from "./components/Assignment_5/Form";
import Login from "./components/Assignment_6/Login";
import Vote from "./components/Assignment_6/Vote";
import FruitList from "./components/Assignment_7/FruitList";
import UserList from "./components/Assignment_7/UserList";
import UserDataForm from "./components/Assignment_8/UserDataForm";
import Heart from "./components/Heart";
import LikeButton from "./components/LikeButton";
import UseEffectsTask from "./components/UseEffectsTask";

function App() {
  const [count, setCount] = useState(0);
  const name = "Hasti";
  const role = "Teacher";
  const age = 21;
  const location = "surat";
  const Todo = [
    { id: 101, title: "react assignment" },
    { id: 102, title: "testing" },
  ];

  return (
    <>
      {/* <h1>Students List</h1> */}
      {/* ===============================================//////////// */}
      {/* <Demo name="Hasti" />
      <Demo name="bali" />
      <Demo name="vishva" />
      <h1>My first react app</h1>
      <p>Welcome to app:{username}</p>
      <ul>
        {Todo.map((index) => (
          <li key={index.id}>
            {index.title}|||{index.id}
          </li>
        ))}
      </ul>
      <Demo name={username} Todo={Todo} /> */}
      {/* =====================================================//////////////////// */}
      {/* <PropsExample role={role} age={age} todo={Todo} /> */}

      {/* ============================Counter========================== */}
      {/* <Counter /> */}

      <hr />
      <h4>Assignment 1</h4>
      <Assignment_1 />
      <hr />
      <h4>Assignment 2</h4>
      <JSX />
      <hr />
      <h4>Assignment 3</h4>
      <Greeting name="Hasti !" />
      <Welcomemsg />
      <hr />
      <h4>Assignment 4</h4>
      <UserCard name={name} age={age} location={location} />
      <Count />
      <hr />
      <h4>Assignment 5</h4>
      <ButtonClick />
      <Form />
      <hr />
      <h4>Assignment 6</h4>
      <Login />
      <Vote />
      <hr />
      <h4>Assignment 7</h4>
      <FruitList />
      <UserList />
      <hr />
      <h4>Assignment 8</h4>
      <UserDataForm />

      <hr />
      <h4>===============Extra Work================</h4>
      <div className="extra" style={{ display: "flex" }}>
        <Heart title="React Post ❤️" />
        <Heart title="js Post 💛" />

        <LikeButton title="My React Post 😎" />
        <LikeButton title="Learning React 🔥" />
      </div>

      <hr />
      <UseEffectsTask />
    </>
  );
}

export default App;
