import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const user = "Hasti";
  const Todo = [
    { id: 101, title: "React assignment" },
    { id: 102, title: "Assignment testing" },
  ];

  return (
    <>
      <Navbar />
      <h1>Hello User:{user}</h1>
      <Home name={user} Todo={Todo} />

      <Counter />
      <Footer />
    </>
  );
}

export default App;
