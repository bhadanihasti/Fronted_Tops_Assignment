import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Filterapply from "./components/Filterapply";
import Productfilter from "./components/Productfilter";
import Callback from "./components/Callback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Filterapply /> */}
      <Productfilter />
      {/* <Callback /> */}
    </>
  );
}

export default App;
