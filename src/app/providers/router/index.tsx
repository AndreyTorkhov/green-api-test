import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/app";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
