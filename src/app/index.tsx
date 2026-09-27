import { useState } from "react";
import { useChatStore } from "@/entities/chat/store";
import { ChatPage } from "@/pages/ChatPage";
import { ConnectPage } from "@/pages/ConnectPage";
import type { IAccountCredentials } from "@/shared/types/green-api";
import { ThemeProvider } from "@/shared/configs/theme";
import type { TMaybe } from "@/shared/types/maybe";

export default function App() {
  const [account, setAccount] = useState<TMaybe<IAccountCredentials>>(null);

  function disconnect() {
    useChatStore.getState().resetChats();
    setAccount(null);
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="max-chat-theme">
      {account ? (
        <ChatPage account={account} onDisconnect={disconnect} />
      ) : (
        <ConnectPage onConnect={setAccount} />
      )}
    </ThemeProvider>
  );
}
