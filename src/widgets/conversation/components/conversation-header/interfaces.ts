import type { IChat } from "@/entities/chat/interfaces";

export interface IConversationHeaderProps {
  chat: IChat;
  onBack: () => void;
}
