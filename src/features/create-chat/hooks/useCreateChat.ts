import { useEffect, useRef, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import type { TMaybe } from "@/shared/types/maybe";
import { checkAccount } from "../api";
import type { ICreateChatFormValues, ICreateChatProps } from "../interfaces";

export function useCreateChat(params: ICreateChatProps) {
  const { account, chatList, onSelectChat } = params;
  const [open, setOpen] = useState(false);
  const requestRef = useRef<TMaybe<AbortController>>(null);
  const form = useForm<ICreateChatFormValues>({
    defaultValues: { phoneNumber: "" },
  });

  useEffect(() => () => requestRef.current?.abort(), []);

  function changeOpen(nextOpen: boolean) {
    if (!nextOpen) {
      requestRef.current?.abort();
    }
    form.reset();
    setOpen(nextOpen);
  }

  async function createChat({ phoneNumber }: ICreateChatFormValues) {
    if (requestRef.current) {
      return;
    }

    const existingChat = chatList.find(
      (chat) => chat.phoneNumber === phoneNumber,
    );
    if (existingChat) {
      onSelectChat(existingChat);
      changeOpen(false);
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const { data } = await checkAccount({
        account,
        phoneNumber,
        signal: controller.signal,
      });
      if (controller.signal.aborted) {
        return;
      }
      if (!data.exist || !data.chatId) {
        form.setError("root", {
          message:
            "Не удалось найти аккаунт MAX. Проверьте номер и доступность поиска по телефону у получателя.",
        });
        return;
      }
      onSelectChat({ chatId: data.chatId, phoneNumber });
      changeOpen(false);
    } catch {
      if (!controller.signal.aborted) {
        form.setError("root", {
          message: "Не удалось проверить номер. Попробуйте ещё раз.",
        });
      }
    } finally {
      requestRef.current = null;
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    return form.handleSubmit(createChat)(event);
  }

  return { open, changeOpen, form, submit };
}
