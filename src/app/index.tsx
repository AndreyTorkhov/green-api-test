import { ChatPage } from "@/pages/ChatPage";
import { ThemeProvider } from "@/shared/configs/theme";

export default function App() {
  return (
    <ThemeProvider>
      <ChatPage />
    </ThemeProvider>
  );
}
