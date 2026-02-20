import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Days from "./components/Days";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Final from "./components/Final";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Days />}></Route>
        <Route path="/yes" element={<Final />}></Route>
      </Routes>
    </>
  );
}

export default App;
