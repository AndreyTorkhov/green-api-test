import type { IAccountCredentials } from "@/shared/types/green-api";
import type { TMaybe } from "@/shared/types/maybe";

export interface ISendMessageProps {
  account: IAccountCredentials;
  chatId: TMaybe<string>;
}

export interface ISendMessageParams {
  account: IAccountCredentials;
  chatId: string;
  message: string;
  signal: AbortSignal;
}

export interface ISendMessageResponse {
  idMessage: string;
}

export interface ISendMessageError {
  chatId: string;
  message: string;
}
