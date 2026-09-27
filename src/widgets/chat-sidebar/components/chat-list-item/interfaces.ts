import type { IChat } from "@/entities/chat/interfaces";

export interface IChatListItemProps {
  chat: IChat;
  active: boolean;
  onSelect: (chat: IChat) => void;
}
