import { describe, expect, test } from "@jest/globals";
import type { INotificationBody } from "../interfaces";
import { getIncomingMessage } from "./getIncomingMessage";

const notification: INotificationBody = {
  typeWebhook: "incomingMessageReceived",
  idMessage: "message-1",
  timestamp: 1763115112,
  senderData: { chatId: "10000000", chatType: "user" },
  messageData: {
    typeMessage: "textMessage",
    textMessageData: { textMessage: "Привет 👋\nКак дела?" },
  },
};

describe("getIncomingMessage", () => {
  test("сохраняет текст и chatId, переводит время в миллисекунды", () => {
    expect(getIncomingMessage(notification)).toEqual({
      idMessage: "message-1",
      chatId: "10000000",
      text: "Привет 👋\nКак дела?",
      timestamp: 1763115112000,
      direction: "incoming",
    });
  });
  test("получает текст сообщения со ссылкой", () => {
    expect(
      getIncomingMessage({
        ...notification,
        messageData: {
          typeMessage: "extendedTextMessage",
          extendedTextMessageData: { text: "https://example.com" },
        },
      })?.text,
    ).toBe("https://example.com");
  });
  test("пропускает служебные события, файлы и группы", () => {
    expect(
      getIncomingMessage({ typeWebhook: "stateInstanceChanged" }),
    ).toBeNull();
    expect(
      getIncomingMessage({
        ...notification,
        messageData: { typeMessage: "imageMessage" },
      }),
    ).toBeNull();
    expect(
      getIncomingMessage({
        ...notification,
        senderData: { chatId: "-123", chatType: "group" },
      }),
    ).toBeNull();
  });
  test("пропускает неполные и пустые текстовые события", () => {
    expect(
      getIncomingMessage({ ...notification, idMessage: undefined }),
    ).toBeNull();
    expect(
      getIncomingMessage({
        ...notification,
        messageData: { typeMessage: "textMessage" },
      }),
    ).toBeNull();
    expect(
      getIncomingMessage({
        ...notification,
        messageData: {
          typeMessage: "textMessage",
          textMessageData: { textMessage: " \n " },
        },
      }),
    ).toBeNull();
  });
});
