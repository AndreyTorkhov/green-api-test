import type { IMessage } from "@/entities/message/interfaces";
import type { TMaybe } from "@/shared/types/maybe";
import type { INotificationBody } from "../interfaces";
import { getMessageText } from "./getMessageText";

export function getIncomingMessage(body: INotificationBody): TMaybe<IMessage> {
  const { typeWebhook, idMessage, timestamp, senderData, messageData } = body;
  if (typeWebhook !== "incomingMessageReceived") {
    return null;
  }

  if (!senderData?.chatId || senderData.chatType !== "user") {
    return null;
  }

  if (!idMessage || !timestamp || !messageData) {
    return null;
  }

  const text = getMessageText(messageData);
  if (typeof text !== "string" || !text.trim()) {
    return null;
  }

  return {
    idMessage,
    chatId: senderData.chatId,
    text,
    timestamp: timestamp * 1000,
    direction: "incoming",
  };
}
