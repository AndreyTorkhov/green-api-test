import type { RegisterOptions } from "react-hook-form";
import { normalizePhoneNumber } from "./helpers/normalizePhoneNumber";
import type { ICreateChatFormValues } from "./interfaces";

export const PHONE_NUMBER_RULES: RegisterOptions<
  ICreateChatFormValues,
  "phoneNumber"
> = {
  setValueAs: normalizePhoneNumber,
  required: "Введите номер телефона",
  pattern: {
    value: /^[1-9]\d{6,14}$/,
    message: "Введите от 7 до 15 цифр с кодом страны",
  },
};
