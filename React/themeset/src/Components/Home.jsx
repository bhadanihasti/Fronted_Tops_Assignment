import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          color: theme == "light" ? "black" : "white",
          background: theme == "light" ? "white" : "black",
        }}
      >
        Navbar
      </h2>
    </div>
  );
}

export default Home;
