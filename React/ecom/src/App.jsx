import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Services from "./components/Services";
import Gallary from "./components/Gallary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallary" element={<Gallary />}></Route>
      </Routes>
    </>
  );
}

export default App;
