import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/edit/:pid" element={<Edit />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
