import { CreateChat } from "@/features/create-chat";
import { ReceiveMessages } from "@/features/receive-messages";
import { ChatSidebar } from "@/widgets/chat-sidebar";
import { Conversation } from "@/widgets/conversation";
import { cn } from "@/shared/lib/utils";
import type { IChatPageProps } from "./interfaces";
import { useChatStore } from "@/entities/chat/store";

export function ChatPage(props: IChatPageProps) {
  const { account, onDisconnect } = props;
  const { chatList, activeChatId, openChat, closeChat } = useChatStore();
  const activeChat =
    chatList.find((chat) => chat.chatId === activeChatId) ?? null;

  return (
    <main className="flex h-dvh flex-col overflow-hidden">
      <ReceiveMessages account={account} />
      <div className="grid min-h-0 flex-1 md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[380px_minmax(0,1fr)]">
        <div className={cn("min-h-0 min-w-0", activeChat && "hidden md:block")}>
          <ChatSidebar
            idInstance={account.idInstance}
            chatList={chatList}
            activeChatId={activeChat?.chatId ?? null}
            onSelectChat={openChat}
            onDisconnect={onDisconnect}
            createChatAction={
              <CreateChat
                account={account}
                chatList={chatList}
                onSelectChat={openChat}
              />
            }
          />
        </div>
        <div
          className={cn("min-h-0 min-w-0", !activeChat && "hidden md:block")}
        >
          <Conversation
            account={account}
            chat={activeChat}
            onBack={closeChat}
          />
        </div>
      </div>
    </main>
  );
}
