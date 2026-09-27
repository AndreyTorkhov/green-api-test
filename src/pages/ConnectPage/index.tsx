import { ConnectAccount } from "@/features/connect-account";
import { ThemeToggle } from "@/features/theme-toggle";
import type { IConnectPageProps } from "./interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export function ConnectPage({ onConnect }: IConnectPageProps) {
  return (
    <main className="flex min-h-dvh flex-col bg-chat-background p-4 sm:p-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="flex flex-1 items-center justify-center py-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <p className="mb-2 text-sm font-semibold text-primary">
              MAX · GREEN-API
            </p>
            <CardTitle>
              <h1>Подключение аккаунта</h1>
            </CardTitle>
            <CardDescription>
              Введите данные инстанса MAX из{" "}
              <a
                href="https://console.green-api.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                кабинета GREEN-API
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ConnectAccount onConnect={onConnect} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
