import { api } from "@/shared/configs/axios";
import type { ICheckAccountParams, ICheckAccountResponse } from "./interfaces";

export function checkAccount(params: ICheckAccountParams) {
  const { account, phoneNumber, signal } = params;
  const { apiUrl, idInstance, apiTokenInstance } = account;

  return api.post<ICheckAccountResponse>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/checkAccount/${encodeURIComponent(apiTokenInstance)}`,
    { phoneNumber: Number(phoneNumber) },
    { signal },
  );
}
