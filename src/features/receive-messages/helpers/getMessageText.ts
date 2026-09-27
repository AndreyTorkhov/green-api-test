import type { TMaybe } from "@/shared/types/maybe";
import type { INotificationMessageData } from "../interfaces";

export function getMessageText(
  messageData: INotificationMessageData,
): TMaybe<string> {
  switch (messageData.typeMessage) {
    case "textMessage":
      return messageData.textMessageData?.textMessage ?? null;
    case "extendedTextMessage":
      return messageData.extendedTextMessageData?.text ?? null;
    default:
      return null;
  }
}
