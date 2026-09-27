import { useEffect, useRef, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import type { TMaybe } from "@/shared/types/maybe";
import { getStateInstance } from "../api";
import { DEFAULT_CREDENTIALS } from "../constants";
import type { IAccountCredentials } from "@/shared/types/green-api";
import type { IConnectAccountProps } from "../interfaces";

export function useConnectAccount({ onConnect }: IConnectAccountProps) {
  const requestRef = useRef<TMaybe<AbortController>>(null);
  const form = useForm<IAccountCredentials>({
    defaultValues: DEFAULT_CREDENTIALS,
  });

  useEffect(() => () => requestRef.current?.abort(), []);

  async function connectAccount(credentials: IAccountCredentials) {
    if (requestRef.current) {
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const { data } = await getStateInstance({
        account: credentials,
        signal: controller.signal,
      });

      if (controller.signal.aborted) {
        return;
      }

      if (data.stateInstance !== "authorized") {
        form.setError("root", {
          message:
            "Аккаунт MAX не готов к работе. Проверьте подключение в кабинете GREEN-API.",
        });
        return;
      }

      onConnect(credentials);
    } catch {
      if (!controller.signal.aborted) {
        form.setError("root", {
          message:
            "Не удалось подключиться. Проверьте учётные данные и интернет и попробуйте снова.",
        });
      }
    } finally {
      requestRef.current = null;
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    return form.handleSubmit(connectAccount)(event);
  }

  return { form, submit };
}
