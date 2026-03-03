import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiFatch from "./components/ApiFatch";
import LodingState from "./components/LodingState";
import ErrorHandling from "./components/ErrorHandling";
import ThemeChanger from "./components/ThemeChanger";
import FormValidation from "./components/FormValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* {/* <ApiFatch />
      <LodingState /> */}
      {/* <ErrorHandling />
      <ThemeChanger /> */}
      <FormValidation />
    </>
  );
}

export default App;
