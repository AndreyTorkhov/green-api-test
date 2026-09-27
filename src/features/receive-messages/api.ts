import { api } from "@/shared/configs/axios";
import type { TMaybe } from "@/shared/types/maybe";
import type {
  IDeleteNotificationParams,
  IDeleteNotificationResponse,
  INotification,
  IReceiveNotificationParams,
} from "./interfaces";

export function receiveNotification(params: IReceiveNotificationParams) {
  const { account, signal } = params;
  const { apiUrl, idInstance, apiTokenInstance } = account;
  return api.get<TMaybe<INotification>>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/receiveNotification/${encodeURIComponent(apiTokenInstance)}`,
    { signal, params: { receiveTimeout: 30 }, timeout: 35_000 },
  );
}

export function deleteNotification(params: IDeleteNotificationParams) {
  const { account, signal, receiptId } = params;
  const { apiUrl, idInstance, apiTokenInstance } = account;
  return api.delete<IDeleteNotificationResponse>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/deleteNotification/${encodeURIComponent(apiTokenInstance)}/${receiptId}`,
    { signal },
  );
}
