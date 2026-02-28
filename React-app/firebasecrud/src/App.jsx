import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Add from "./components/Add";
import Product from "./components/product";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:pid" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
