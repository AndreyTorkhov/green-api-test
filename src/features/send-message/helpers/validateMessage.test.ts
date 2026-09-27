import { describe, expect, test } from "@jest/globals";
import { validateMessage } from "./validateMessage";

describe("validateMessage", () => {
  test("отклоняет пустой и пробельный текст", () => {
    expect(validateMessage("")).not.toBeNull();
    expect(validateMessage(" \n\t ")).not.toBeNull();
  });
  test("принимает многострочный текст и emoji", () => {
    expect(validateMessage("Привет 👋\nКак дела?")).toBeNull();
  });
  test("принимает 4000 символов", () => {
    expect(validateMessage("а".repeat(4000))).toBeNull();
  });
  test("отклоняет текст длиннее 4000 символов", () => {
    expect(validateMessage("а".repeat(4001))).not.toBeNull();
  });
});
