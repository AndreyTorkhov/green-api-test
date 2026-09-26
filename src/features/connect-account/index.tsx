import { LoaderCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useConnectAccount } from "./useConnectAccount";
import type { ConnectAccountProps } from "./interfaces";

export function ConnectAccount({ onConnect }: ConnectAccountProps) {
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
        <div className="space-y-2">
          <Label htmlFor="idInstance">idInstance</Label>
          <Input
            id="idInstance"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Номер инстанса"
            aria-invalid={!!errors.idInstance}
            aria-describedby={
              errors.idInstance ? "idInstance-error" : undefined
            }
            {...form.register("idInstance", {
              setValueAs: (value: string) => value.trim(),
              required: "Введите idInstance",
              pattern: { value: /^\d+$/, message: "Введите только цифры" },
            })}
          />
          {errors.idInstance && (
            <p id="idInstance-error" className="text-sm text-destructive">
              {errors.idInstance.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="apiTokenInstance">apiTokenInstance</Label>
          <Input
            id="apiTokenInstance"
            type="password"
            autoComplete="off"
            spellCheck={false}
            placeholder="Ключ доступа"
            aria-invalid={!!errors.apiTokenInstance}
            aria-describedby={
              errors.apiTokenInstance ? "apiTokenInstance-error" : undefined
            }
            {...form.register("apiTokenInstance", {
              setValueAs: (value: string) => value.trim(),
              required: "Введите apiTokenInstance",
              pattern: {
                value: /^\S+$/,
                message: "Токен не должен содержать пробелы",
              },
            })}
          />
          {errors.apiTokenInstance && (
            <p id="apiTokenInstance-error" className="text-sm text-destructive">
              {errors.apiTokenInstance.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="apiUrl">apiUrl</Label>
          <Input
            id="apiUrl"
            type="url"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={!!errors.apiUrl}
            aria-describedby={
              errors.apiUrl ? "apiUrl-hint apiUrl-error" : "apiUrl-hint"
            }
            {...form.register("apiUrl", {
              setValueAs: (value: string) => value.trim().replace(/\/$/, ""),
              required: "Введите apiUrl",
              pattern: {
                value: /^https:\/\/(?:\d+\.api|api)\.green-api\.com$/,
                message: "Укажите HTTPS-адрес API из кабинета GREEN-API",
              },
            })}
          />
          <p
            id="apiUrl-hint"
            className="text-xs leading-5 text-muted-foreground"
          >
            Адрес API из настроек вашего инстанса в GREEN-API.
          </p>
          {errors.apiUrl && (
            <p id="apiUrl-error" className="text-sm text-destructive">
              {errors.apiUrl.message}
            </p>
          )}
        </div>
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
      <p className="text-center text-xs leading-5 text-muted-foreground">
        Учётные данные действуют до выхода или перезагрузки страницы.
      </p>
    </form>
  );
}
