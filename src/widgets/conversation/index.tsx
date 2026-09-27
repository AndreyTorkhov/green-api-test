import { MessageCircle } from "lucide-react";
import { ConversationHeader } from "./components/conversation-header";
import { MessageComposer } from "./components/message-composer";
import type { IConversationProps } from "./interfaces";

export function Conversation(props: IConversationProps) {
  const { chat, onBack } = props;
  if (!chat) {
    return (
      <section
        aria-label="Переписка"
        className="flex h-full items-center justify-center bg-chat-background p-6"
      >
        <p className="rounded-full bg-card/90 px-5 py-3 text-center text-sm">
          Выберите чат или создайте новый
        </p>
      </section>
    );
  }

  return (
    <section
      aria-label={`Переписка с +${chat.phoneNumber}`}
      className="flex h-full min-h-0 flex-col bg-chat-background"
    >
      <ConversationHeader chat={chat} onBack={onBack} />
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-6">
        <div className="rounded-2xl bg-card/90 p-6 text-center">
          <MessageCircle
            className="mx-auto mb-3 size-8 text-muted-foreground"
            aria-hidden="true"
          />
          <p className="text-sm">Сообщений пока нет</p>
        </div>
      </div>
      <MessageComposer />
    </section>
  );
}
