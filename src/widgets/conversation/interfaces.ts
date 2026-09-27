import type { IChat } from "@/entities/chat/interfaces";
import type { TMaybe } from "@/shared/types/maybe";

export interface IConversationProps {
  chat: TMaybe<IChat>;
  onBack: () => void;
}
