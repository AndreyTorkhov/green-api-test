import { Button } from "@/shared/ui/button";
import type { IErrorPageProps } from "./interfaces";

export function ErrorPage({ resetErrorBoundary }: IErrorPageProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-bold">Что-то пошло не так</h1>
      <p className="text-muted-foreground">
        Произошла ошибка при отображении страницы.
      </p>
      <Button onClick={resetErrorBoundary}>Попробовать снова</Button>
    </main>
  );
}
