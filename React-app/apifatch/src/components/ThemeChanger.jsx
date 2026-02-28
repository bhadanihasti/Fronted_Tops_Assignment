import React, { useContext } from "react";
import { ThemeContect } from "./ThemeContext";

function ThemeChanger() {
  const { theme, settheme } = useContext(ThemeContect);

  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <button onClick={toggleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ThemeChanger;
