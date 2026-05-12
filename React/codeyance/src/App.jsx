import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Technologies from "./Components/Technologies";
import Industries from "./Components/Industries";
import Testimonials from "./Components/Testimonials";
import DrivingGrowth from "./Components/DrivingGrowth";
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
      <Industries />
      <Testimonials />
      <DrivingGrowth />
    </div>
  );
}

export default App;
