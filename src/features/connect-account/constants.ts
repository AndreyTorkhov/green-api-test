import type { IAccountCredentials } from "@/shared/types/green-api";

export const DEFAULT_CREDENTIALS: IAccountCredentials = {
  idInstance: "",
  apiTokenInstance: "",
  apiUrl: import.meta.env.VITE_API_URL ?? "",
};
