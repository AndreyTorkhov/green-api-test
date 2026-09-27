import type { RegisterOptions } from "react-hook-form";
import type { IAccountCredentials } from "@/shared/types/green-api";
import { normalizeApiUrl } from "./helpers/normalizeApiUrl";

export const ID_INSTANCE_RULES: RegisterOptions<
  IAccountCredentials,
  "idInstance"
> = {
  setValueAs: (value: string) => value.trim(),
  required: "Введите idInstance",
  pattern: { value: /^\d+$/, message: "Введите только цифры" },
};

export const API_TOKEN_RULES: RegisterOptions<
  IAccountCredentials,
  "apiTokenInstance"
> = {
  setValueAs: (value: string) => value.trim(),
  required: "Введите apiTokenInstance",
  pattern: { value: /^\S+$/, message: "Токен не должен содержать пробелы" },
};

export const API_URL_RULES: RegisterOptions<IAccountCredentials, "apiUrl"> = {
  setValueAs: normalizeApiUrl,
  required: "Введите apiUrl",
  pattern: {
    value: /^https:\/\/(?:\d+\.api|api)\.green-api\.com$/,
    message: "Укажите HTTPS-адрес API из кабинета GREEN-API",
  },
};
