import { Separator } from "@/shared/ui/separator";
import { ThemeToggle } from "@/features/theme-toggle";

export function ChatSidebar() {
  return (
    <aside
      aria-label="Список чатов"
      className="flex flex-col border-b border-border bg-card md:border-r md:border-b-0"
    >
      <header className="flex items-center justify-between px-6 py-5">
        <h2 className="text-2xl font-semibold">Чаты</h2>
        <ThemeToggle />
      </header>
      <Separator />
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="max-w-64 text-center">
          <p className="font-medium">Пока нет чатов</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Подключите аккаунт, чтобы начать общение.
          </p>
        </div>
      </div>
    </aside>
  );
}
