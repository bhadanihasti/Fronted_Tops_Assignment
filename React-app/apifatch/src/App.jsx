import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiFatch from "./components/ApiFatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ApiFatch />
    </>
  );
}

export default App;
