import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Productadd from "./components/Productadd";
import { Route, Routes } from "react-router-dom";
import Productedit from "./components/Productedit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/productadd" element={<Productadd />}></Route>

        <Route path="/productedit/:id" element={<Productedit />}></Route>
      </Routes>
    </>
  );
}

export default App;
