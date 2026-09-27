import type { TMaybe } from "@/shared/types/maybe";

export interface IChat {
  chatId: string;
  phoneNumber: string;
}

export interface IChatStore {
  chatList: IChat[];
  activeChatId: TMaybe<string>;
  openChat: (chat: IChat) => void;
  closeChat: () => void;
  resetChats: () => void;
}
