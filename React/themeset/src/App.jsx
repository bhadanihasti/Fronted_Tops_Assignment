import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ThemeChanger from "./Components/ThemeChanger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeChanger />
      <Home />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
