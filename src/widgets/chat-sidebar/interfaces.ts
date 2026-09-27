import type { ReactNode } from "react";
import type { IChat } from "@/entities/chat/interfaces";
import type { TMaybe } from "@/shared/types/maybe";

export interface IChatSidebarProps {
  idInstance: string;
  chatList: IChat[];
  activeChatId: TMaybe<string>;
  createChatAction: ReactNode;
  onSelectChat: (chat: IChat) => void;
  onDisconnect: () => void;
}
