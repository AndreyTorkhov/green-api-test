import { create } from "zustand";
import type { IChatStore } from "./interfaces";

export const useChatStore = create<IChatStore>((set) => ({
  chatList: [],
  activeChatId: null,
  openChat: (chat) =>
    set((state) => ({
      chatList: state.chatList.some((item) => item.chatId === chat.chatId)
        ? state.chatList
        : [...state.chatList, chat],
      activeChatId: chat.chatId,
    })),
  closeChat: () => set({ activeChatId: null }),
  resetChats: () => set({ chatList: [], activeChatId: null }),
}));
