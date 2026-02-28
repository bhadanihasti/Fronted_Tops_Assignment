import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiFatch from "./components/ApiFatch";
import LodingState from "./components/LodingState";
import ErrorHandling from "./components/ErrorHandling";
import ThemeChanger from "./components/ThemeChanger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* {/* <ApiFatch />
      <LodingState /> */}
      <ErrorHandling />
      <ThemeChanger />
    </>
  );
}

export default App;
