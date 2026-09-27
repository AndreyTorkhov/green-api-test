import { api } from "@/shared/configs/axios";
import type {
  IGetStateInstanceParams,
  IGetStateInstanceResponse,
} from "./interfaces";

export function getStateInstance(params: IGetStateInstanceParams) {
  const { account, signal } = params;
  const { apiUrl, idInstance, apiTokenInstance } = account;

  return api.get<IGetStateInstanceResponse>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/getStateInstance/${encodeURIComponent(apiTokenInstance)}`,
    { signal },
  );
}
