import type { TMaybe } from "@/shared/types/maybe";
import { MAX_MESSAGE_LENGTH } from "../constants";

export function validateMessage(text: string): TMaybe<string> {
  if (!text.trim()) {
    return "Введите текст сообщения";
  }
  if (text.length > MAX_MESSAGE_LENGTH) {
    return `Сообщение не должно превышать ${MAX_MESSAGE_LENGTH} символов`;
  }
  return null;
}
