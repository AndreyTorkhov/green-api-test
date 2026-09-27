import { CreateChat } from "@/features/create-chat";
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
    <main className="grid h-dvh overflow-hidden md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[380px_minmax(0,1fr)]">
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
      <div className={cn("min-h-0 min-w-0", !activeChat && "hidden md:block")}>
        <Conversation chat={activeChat} onBack={closeChat} />
      </div>
    </main>
  );
}
