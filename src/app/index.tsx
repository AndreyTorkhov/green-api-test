import { useState } from "react";
import { ChatPage } from "@/pages/ChatPage";
import { ConnectPage } from "@/pages/ConnectPage";
import type { AccountCredentials } from "@/features/connect-account/interfaces";
import { ThemeProvider } from "@/shared/configs/theme";
import type { Maybe } from "@/shared/types/maybe";

export default function App() {
  const [account, setAccount] = useState<Maybe<AccountCredentials>>(null);

  return (
    <ThemeProvider>
      {account ? (
        <ChatPage
          idInstance={account.idInstance}
          onDisconnect={() => setAccount(null)}
        />
      ) : (
        <ConnectPage onConnect={setAccount} />
      )}
    </ThemeProvider>
  );
}
