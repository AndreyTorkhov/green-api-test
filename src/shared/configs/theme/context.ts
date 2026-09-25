import { createContext } from "react";
import type { ThemeContextValue } from "./interfaces";

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
