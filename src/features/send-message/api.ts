import { api } from "@/shared/configs/axios";
import type { ISendMessageParams, ISendMessageResponse } from "./interfaces";

export function sendMessage(params: ISendMessageParams) {
  const { account, chatId, message, signal } = params;
  const { apiUrl, idInstance, apiTokenInstance } = account;

  return api.post<ISendMessageResponse>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/sendMessage/${encodeURIComponent(apiTokenInstance)}`,
    { chatId, message },
    { signal },
  );
}
