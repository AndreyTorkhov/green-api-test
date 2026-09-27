import { useEffect, useState } from "react";
import { useMessageStore } from "@/entities/message/store";
import type { TMaybe } from "@/shared/types/maybe";
import { deleteNotification, receiveNotification } from "../api";
import { getIncomingMessage } from "../helpers/getIncomingMessage";
import type { IReceiveMessagesProps } from "../interfaces";

export function useReceiveMessages(params: IReceiveMessagesProps) {
  const { account } = params;
  const [error, setError] = useState<TMaybe<string>>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let timer: ReturnType<typeof setTimeout>;

    async function poll() {
      let delay = 1000;
      try {
        const { data } = await receiveNotification({ account, signal });
        if (signal.aborted) {
          return;
        }
        if (data) {
          const message = getIncomingMessage(data.body);
          if (message) {
            useMessageStore.getState().addMessage(message);
          }
          const response = await deleteNotification({
            account,
            signal,
            receiptId: data.receiptId,
          });
          if (signal.aborted) {
            return;
          }
          if (!response.data.result) {
            setError(
              "Не удалось подтвердить получение. Повтор через 5 секунд.",
            );
            delay = 5000;
          } else {
            setError(null);
          }
        } else {
          setError(null);
        }
      } catch {
        if (!signal.aborted) {
          setError(
            "Не удаётся получать сообщения. Проверьте сеть и настройки уведомлений. Повтор через 5 секунд.",
          );
          delay = 5000;
        }
      } finally {
        if (!signal.aborted) {
          timer = setTimeout(poll, delay);
        }
      }
    }

    timer = setTimeout(poll, 0);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [account]);

  return error;
}
