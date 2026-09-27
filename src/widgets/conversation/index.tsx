import { SendMessage } from "@/features/send-message";
import { ConversationHeader } from "./components/conversation-header";
import { MessageList } from "./components/message-list";
import type { IConversationProps } from "./interfaces";

export function Conversation(props: IConversationProps) {
  const { account, chat, onBack } = props;

  return (
    <section
      aria-label={chat ? `Переписка с +${chat.phoneNumber}` : "Переписка"}
      className="flex h-full min-h-0 flex-col bg-chat-background"
    >
      {chat && <ConversationHeader chat={chat} onBack={onBack} />}
      {chat ? (
        <MessageList key={chat.chatId} chatId={chat.chatId} />
      ) : (
        <div className="flex flex-1 items-center justify-center p-6">
          <p className="rounded-full bg-card/90 px-5 py-3 text-center text-sm">
            Выберите чат или создайте новый
          </p>
        </div>
      )}
      <SendMessage account={account} chatId={chat?.chatId ?? null} />
    </section>
  );
}
