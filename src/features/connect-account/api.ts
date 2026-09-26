import { api } from "@/shared/configs/axios";
import type {
  AccountCredentials,
  GetStateInstanceResponse,
} from "./interfaces";

export function getStateInstance(
  { apiUrl, idInstance, apiTokenInstance }: AccountCredentials,
  signal: AbortSignal,
) {
  return api.get<GetStateInstanceResponse>(
    `${apiUrl}/v3/waInstance${encodeURIComponent(idInstance)}/getStateInstance/${encodeURIComponent(apiTokenInstance)}`,
    { signal },
  );
}
