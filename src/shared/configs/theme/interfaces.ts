import type { Dispatch, ReactNode, SetStateAction } from "react";

export type TTheme = "dark" | "light" | "system";

export interface IThemeContextValue {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
}

export interface IThemeProviderProps {
  children: ReactNode;
  defaultTheme?: TTheme;
  storageKey?: string;
}
