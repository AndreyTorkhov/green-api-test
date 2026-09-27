import { MessageCircle } from "lucide-react";
import { useMessageStore } from "@/entities/message/store";
import { MessageBubble } from "@/entities/message/components/message-bubble";
import { useMessageScroll } from "./hooks/useMessageScroll";
import type { IMessageListProps } from "./interfaces";

export function MessageList(props: IMessageListProps) {
  const { chatId } = props;
  const messageList = useMessageStore((state) => state.messageList);
  const chatMessageList = messageList.filter(
    (message) => message.chatId === chatId,
  );
  const scrollRef = useMessageScroll(chatMessageList.length);
  return (
    <div
      ref={scrollRef}
      role="log"
      aria-label="Сообщения"
      className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5"
    >
      {chatMessageList.length ? (
        <ol className="mx-auto flex max-w-4xl flex-col gap-3">
          {chatMessageList.map((message) => (
            <MessageBubble key={message.idMessage} message={message} />
          ))}
        </ol>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="rounded-2xl bg-card/90 p-6 text-center">
            <MessageCircle
              className="mx-auto mb-3 size-8 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm">Сообщений пока нет</p>
          </div>
        </div>
      )}
    </div>
  );
}
