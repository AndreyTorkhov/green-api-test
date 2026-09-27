import type { IChat } from "@/entities/chat/interfaces";
import type { IAccountCredentials } from "@/shared/types/green-api";

export interface ICreateChatProps {
  account: IAccountCredentials;
  chatList: IChat[];
  onSelectChat: (chat: IChat) => void;
}

export interface ICreateChatFormValues {
  phoneNumber: string;
}

export interface ICheckAccountResponse {
  exist: boolean;
  chatId?: string;
}

export interface ICheckAccountParams {
  account: IAccountCredentials;
  phoneNumber: string;
  signal: AbortSignal;
}
