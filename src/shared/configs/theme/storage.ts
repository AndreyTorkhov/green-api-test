import type { Theme } from "./interfaces";

const THEME_STORAGE_KEY = "max-chat-theme";

export function readTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark"
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The theme still works for this session when browser storage is unavailable.
  }
}
