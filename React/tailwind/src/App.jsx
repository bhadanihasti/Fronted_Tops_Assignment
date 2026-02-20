import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Fruits from "./Components/Fruits";
import Post from "./Components/post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Tailwind App</h1> */}
      {/* <Navbar />
      <Slider /> */}
      {/* <Fruits /> */}
      <Post />
    </>
  );
}

export default App;
