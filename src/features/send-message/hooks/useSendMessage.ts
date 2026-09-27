import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { useMessageStore } from "@/entities/message/store";
import type { TMaybe } from "@/shared/types/maybe";
import { sendMessage } from "../api";
import { validateMessage } from "../helpers/validateMessage";
import type { ISendMessageError, ISendMessageProps } from "../interfaces";

export function useSendMessage(params: ISendMessageProps) {
  const { account, chatId } = params;
  const { draftByChatId, setDraft, addMessage } = useMessageStore();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<TMaybe<ISendMessageError>>(null);
  const requestRef = useRef<TMaybe<AbortController>>(null);
  const text = chatId ? (draftByChatId[chatId] ?? "") : "";

  useEffect(() => () => requestRef.current?.abort(), []);

  function changeText(value: string) {
    if (chatId) {
      setDraft({ chatId, text: value });
      setError(null);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!chatId || requestRef.current) {
      return;
    }
    const validationError = validateMessage(text);
    if (validationError) {
      setError({ chatId, message: validationError });
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;
    setIsSending(true);
    setError(null);

    try {
      const { data } = await sendMessage({
        account,
        chatId,
        message: text,
        signal: controller.signal,
      });
      if (controller.signal.aborted) {
        return;
      }
      if (!data.idMessage) {
        setError({
          chatId,
          message: "Не удалось подтвердить отправку. Текст сохранён.",
        });
        return;
      }
      addMessage({
        idMessage: data.idMessage,
        chatId,
        text,
        timestamp: Date.now(),
        direction: "outgoing",
      });
      setDraft({ chatId, text: "" });
    } catch {
      if (!controller.signal.aborted) {
        setError({
          chatId,
          message:
            "Не удалось подтвердить отправку. Проверьте соединение и повторите попытку. Текст сохранён.",
        });
      }
    } finally {
      requestRef.current = null;
      if (!controller.signal.aborted) {
        setIsSending(false);
      }
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return {
    text,
    changeText,
    submit,
    onKeyDown,
    isSending,
    error: error?.chatId === chatId ? error.message : null,
  };
}
