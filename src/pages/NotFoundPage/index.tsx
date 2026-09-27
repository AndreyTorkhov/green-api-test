import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";

export function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Страница не найдена</p>
      <p className="text-muted-foreground">
        Запрашиваемая страница не существует.
      </p>
      <Button asChild>
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </main>
  );
}
