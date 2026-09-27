export interface IMessage {
  idMessage: string;
  chatId: string;
  text: string;
  timestamp: number;
  direction: "incoming" | "outgoing";
}

export interface IDraftParams {
  chatId: string;
  text: string;
}

export interface IMessageStore {
  messageList: IMessage[];
  draftByChatId: Record<string, string>;
  addMessage: (message: IMessage) => void;
  setDraft: (params: IDraftParams) => void;
  resetMessages: () => void;
}
