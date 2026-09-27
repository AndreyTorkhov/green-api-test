import { describe, expect, test } from "@jest/globals";
import { normalizePhoneNumber } from "./normalizePhoneNumber";

describe("normalizePhoneNumber", () => {
  test("убирает оформление номера", () => {
    expect(normalizePhoneNumber(" +7 (999) 123-45-67 ")).toBe("79991234567");
  });

  test("сохраняет международный код и цифры", () => {
    expect(normalizePhoneNumber("375291234567")).toBe("375291234567");
  });

  test("возвращает пустую строку для пробельного ввода", () => {
    expect(normalizePhoneNumber(" \t\n ")).toBe("");
  });

  test("сохраняет недопустимые символы для дальнейшей валидации", () => {
    expect(normalizePhoneNumber("+7 (999) abc!")).toBe("7999abc!");
  });
});
