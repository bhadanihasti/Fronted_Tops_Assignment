import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid"></div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
