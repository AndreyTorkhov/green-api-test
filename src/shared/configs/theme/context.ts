import { createContext } from "react";
import type { IThemeContextValue } from "./interfaces";

const initialState: IThemeContextValue = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeContext = createContext<IThemeContextValue>(initialState);
