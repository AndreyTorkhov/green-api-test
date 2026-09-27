import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { TTheme, IThemeProviderProps } from "./interfaces";

export function ThemeProvider(props: IThemeProviderProps) {
  const {
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
  } = props;
  const [theme, setThemeState] = useState<TTheme>(
    () => (localStorage.getItem(storageKey) as TTheme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const setTheme: Dispatch<SetStateAction<TTheme>> = (value) => {
    const newTheme = typeof value === "function" ? value(theme) : value;
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
