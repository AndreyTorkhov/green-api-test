import { ThemeToggle } from "@/features/theme-toggle";
import { Separator } from "@/shared/ui/separator";
import { AccountFooter } from "./components/account-footer";
import { ChatListItem } from "./components/chat-list-item";
import { EmptyChatList } from "./components/empty-chat-list";
import type { IChatSidebarProps } from "./interfaces";

export function ChatSidebar(props: IChatSidebarProps) {
  const {
    idInstance,
    chatList,
    activeChatId,
    createChatAction,
    onSelectChat,
    onDisconnect,
  } = props;

  return (
    <aside
      aria-label="Список чатов"
      className="flex h-full min-h-0 flex-col border-r bg-card"
    >
      <header className="flex items-center justify-between px-5 py-4">
        <h1 className="text-2xl font-semibold">Чаты</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {createChatAction}
        </div>
      </header>
      <Separator />
      <div className="min-h-0 flex-1 overflow-y-auto">
        {chatList.length === 0 ? (
          <EmptyChatList />
        ) : (
          <ul aria-label="Чаты" className="py-2">
            {chatList.map((chat) => (
              <ChatListItem
                key={chat.chatId}
                chat={chat}
                active={chat.chatId === activeChatId}
                onSelect={onSelectChat}
              />
            ))}
          </ul>
        )}
      </div>
      <Separator />
      <AccountFooter idInstance={idInstance} onDisconnect={onDisconnect} />
    </aside>
  );
}
