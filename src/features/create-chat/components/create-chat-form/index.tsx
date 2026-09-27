import { LoaderCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { FormField } from "@/shared/ui/form-field";
import { PHONE_NUMBER_RULES } from "../../validation";
import type { ICreateChatFormProps } from "./interfaces";

export function CreateChatForm(props: ICreateChatFormProps) {
  const { form, onSubmit } = props;
  const { errors, isSubmitting } = form.formState;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4"
      aria-busy={isSubmitting}
    >
      <FormField
        id="phoneNumber"
        label="Номер телефона"
        type="tel"
        autoComplete="tel"
        placeholder="+7 999 123-45-67"
        disabled={isSubmitting}
        error={errors.phoneNumber?.message}
        {...form.register("phoneNumber", PHONE_NUMBER_RULES)}
      />
      {errors.root && (
        <Alert variant="destructive">
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && (
          <LoaderCircle className="animate-spin" aria-hidden="true" />
        )}
        {isSubmitting ? "Проверка номера…" : "Открыть чат"}
      </Button>
    </form>
  );
}
