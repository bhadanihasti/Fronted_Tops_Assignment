import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Technologies from "./Components/Technologies";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid"></div>
      <div className="main-screen">
        <Navbar />
        <Hero />
      </div>
      <Partners />
      <Services />
      <Portfolio />
      <Technologies />
    </div>
  );
}

export default App;
