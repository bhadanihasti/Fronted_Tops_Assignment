import { createContext, useState } from "react";

export const ThemeContect = createContext();

export function ThemeProvider({ children }) {
  const [theme, settheme] = useState("light");

  return (
    <ThemeContect.Provider value={{ theme, settheme }}>
      {children}
    </ThemeContect.Provider>
  );
}
