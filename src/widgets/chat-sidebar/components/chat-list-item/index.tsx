import { ChatAvatar } from "@/entities/chat/components/chat-avatar";
import { useMessageStore } from "@/entities/message/store";
import { cn } from "@/shared/lib/utils";
import type { IChatListItemProps } from "./interfaces";

export function ChatListItem(props: IChatListItemProps) {
  const { chat, active, onSelect } = props;
  const lastMessage = useMessageStore((state) =>
    state.messageList.findLast((message) => message.chatId === chat.chatId),
  );
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(chat)}
        aria-current={active ? "true" : undefined}
        className={cn(
          "flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring",
          active && "bg-accent",
        )}
      >
        <ChatAvatar phoneNumber={chat.phoneNumber} />
        <div className="min-w-0">
          <p className="truncate font-semibold">+{chat.phoneNumber}</p>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {lastMessage
              ? `${lastMessage.direction === "outgoing" ? "Вы: " : ""}${lastMessage.text}`
              : "Нет сообщений"}
          </p>
        </div>
      </button>
    </li>
  );
}
