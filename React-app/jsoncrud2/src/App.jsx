import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Product />}></Route>

        <Route path="/add" element={<ProductAdd />}></Route>
        <Route path="/edit/:id" element={<ProductEdit />}></Route>
      </Routes>
    </>
  );
}

export default App;
