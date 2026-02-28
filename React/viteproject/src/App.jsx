import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import Pattern from "./Components/Pattern";
import RightHalf from "./Components/RightHalf";
import LeftHalf from "./Components/LeftHalf";
import FullPyramid from "./Components/FullPyramid";
import InvertedRight from "./Components/InvertedRight";
import InvertedFull from "./Components/InvertedFull";
import InvertedLeft from "./Components/InvertedLeft";
import Diamond from "./Components/Diamond";
import FullNumberPyramid from "./Components/FullNumberPyramid";
import RightHalfAlphabet from "./Components/RightHalfAlphabet";
import Reverse from "./Components/Reverse";
import Palindrome from "./Components/Palindrome";
import RemoveDubArray from "./Components/RemoveDubArray";
import FormValidation from "./Components/FormValidation";
import Fibonacci from "./Components/Fibonacci";
import Armstrong from "./Components/Armstrong";
import LargestTwo from "./Components/LargestTwo";
import PrimeCheck from "./Components/PrimeCheck";

function App() {
  const [count, setCount] = useState(0);
  const user = "Hasti";
  const Todo = [
    { id: 101, title: "React assignment" },
    { id: 102, title: "Assignment testing" },
  ];

  return (
    <>
      {/* <Navbar />
      <h1>Hello User:{user}</h1>
      <Home name={user} Todo={Todo} />

      <Counter />
      <Footer /> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {/* <Pattern type="rightHalf" rows={5} />
        <Pattern type="leftHalf" rows={5} />
        <Pattern type="full" rows={5} />
        <Pattern type="invRight" rows={5} />
        <Pattern type="invLeft" rows={5} />
        <Pattern type="invFull" rows={5} />
        <Pattern type="diamond" rows={9} /> */}

        <RightHalf />
        <LeftHalf />
        <FullPyramid />
        <InvertedRight />
        <InvertedLeft />
        <InvertedFull />
        <Diamond />
        <FullNumberPyramid />
        <RightHalfAlphabet />
        <Reverse str="hello" />
        <Palindrome str="madama" />
        <RemoveDubArray />

        <FormValidation />
        <Fibonacci />
        <Armstrong />
        <LargestTwo />
        <PrimeCheck />
      </div>
    </>
  );
}

export default App;
