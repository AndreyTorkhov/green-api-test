import { LoaderCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { FormField } from "@/shared/ui/form-field";
import { useConnectAccount } from "./hooks/useConnectAccount";
import type { IConnectAccountProps } from "./interfaces";
import {
  ID_INSTANCE_RULES,
  API_TOKEN_RULES,
  API_URL_RULES,
} from "./validation";

export function ConnectAccount({ onConnect }: IConnectAccountProps) {
  const { form, submit } = useConnectAccount({ onConnect });
  const { errors, isSubmitting } = form.formState;

  return (
    <form
      onSubmit={submit}
      noValidate
      className="space-y-5"
      aria-busy={isSubmitting}
    >
      <fieldset disabled={isSubmitting} className="space-y-5">
        <legend className="sr-only">Учётные данные GREEN-API</legend>
        <FormField
          id="idInstance"
          label="idInstance"
          inputMode="numeric"
          autoComplete="off"
          placeholder="Номер инстанса"
          error={errors.idInstance?.message}
          {...form.register("idInstance", ID_INSTANCE_RULES)}
        />
        <FormField
          id="apiTokenInstance"
          label="apiTokenInstance"
          type="password"
          autoComplete="off"
          spellCheck={false}
          placeholder="Ключ доступа"
          error={errors.apiTokenInstance?.message}
          {...form.register("apiTokenInstance", API_TOKEN_RULES)}
        />
        <FormField
          id="apiUrl"
          label="apiUrl"
          type="url"
          autoComplete="off"
          spellCheck={false}
          error={errors.apiUrl?.message}
          hint="Адрес API из настроек вашего инстанса в GREEN-API."
          {...form.register("apiUrl", API_URL_RULES)}
        />
      </fieldset>
      {errors.root && (
        <Alert variant="destructive">
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && (
          <LoaderCircle className="animate-spin" aria-hidden="true" />
        )}
        {isSubmitting ? "Подключение…" : "Подключить"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Учётные данные действуют до выхода или перезагрузки страницы.
      </p>
    </form>
  );
}
