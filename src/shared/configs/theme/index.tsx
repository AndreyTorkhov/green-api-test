import { useLayoutEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { Theme, ThemeProviderProps } from "./interfaces";
import { readTheme, saveTheme } from "./storage";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState(readTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#17181a" : "#ffffff");
  }, [theme]);

  function setTheme(nextTheme: Theme) {
    setThemeState(nextTheme);
    saveTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
