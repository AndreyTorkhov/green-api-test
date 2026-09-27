import { useState } from "react";
import { useChatStore } from "@/entities/chat/store";
import { useMessageStore } from "@/entities/message/store";
import { ChatPage } from "@/pages/ChatPage";
import { ConnectPage } from "@/pages/ConnectPage";
import type { IAccountCredentials } from "@/shared/types/green-api";
import type { TMaybe } from "@/shared/types/maybe";

export default function App() {
  const [account, setAccount] = useState<TMaybe<IAccountCredentials>>(null);

  function disconnect() {
    useChatStore.getState().resetChats();
    useMessageStore.getState().resetMessages();
    setAccount(null);
  }

  return (
    <>
      {account ? (
        <ChatPage account={account} onDisconnect={disconnect} />
      ) : (
        <ConnectPage onConnect={setAccount} />
      )}
    </>
  );
}
