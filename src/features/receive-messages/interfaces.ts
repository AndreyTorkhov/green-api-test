import type { IAccountCredentials } from "@/shared/types/green-api";

export interface IReceiveMessagesProps {
  account: IAccountCredentials;
}

export interface INotificationSender {
  chatId: string;
  chatType: string;
}

export interface ITextMessageData {
  textMessage: string;
}

export interface IExtendedTextMessageData {
  text: string;
}

export interface INotificationMessageData {
  typeMessage: string;
  textMessageData?: ITextMessageData;
  extendedTextMessageData?: IExtendedTextMessageData;
}

export interface INotificationBody {
  typeWebhook: string;
  idMessage?: string;
  timestamp?: number;
  senderData?: INotificationSender;
  messageData?: INotificationMessageData;
}

export interface INotification {
  receiptId: number;
  body: INotificationBody;
}

export interface IReceiveNotificationParams {
  account: IAccountCredentials;
  signal: AbortSignal;
}

export interface IDeleteNotificationParams extends IReceiveNotificationParams {
  receiptId: number;
}

export interface IDeleteNotificationResponse {
  result: boolean;
}
