import type { IChat } from "@/entities/chat/interfaces";
import type { IAccountCredentials } from "@/shared/types/green-api";
import type { TMaybe } from "@/shared/types/maybe";

export interface IConversationProps {
  account: IAccountCredentials;
  chat: TMaybe<IChat>;
  onBack: () => void;
}
