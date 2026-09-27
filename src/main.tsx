import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@/app/providers/router";
import { ErrorBoundaryProvider } from "@/app/providers/error-boundary";
import { ThemeProvider } from "@/shared/configs/theme";
import "@/app/styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundaryProvider>
      <ThemeProvider defaultTheme="light" storageKey="max-chat-theme">
        <RouterProvider />
      </ThemeProvider>
    </ErrorBoundaryProvider>
  </StrictMode>,
);
