import { create } from "zustand";
import type { IMessageStore } from "./interfaces";

export const useMessageStore = create<IMessageStore>((set) => ({
  messageList: [],
  draftByChatId: {},
  addMessage: (message) =>
    set((state) => {
      if (
        state.messageList.some(
          (item) =>
            item.chatId === message.chatId &&
            item.idMessage === message.idMessage,
        )
      ) {
        return state;
      }
      return {
        messageList: [...state.messageList, message].sort(
          (a, b) => a.timestamp - b.timestamp,
        ),
      };
    }),
  setDraft: (params) => {
    const { chatId, text } = params;
    set((state) => ({
      draftByChatId: { ...state.draftByChatId, [chatId]: text },
    }));
  },
  resetMessages: () => set({ messageList: [], draftByChatId: {} }),
}));
