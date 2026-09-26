import { Separator } from "@/shared/ui/separator";
import { ThemeToggle } from "@/features/theme-toggle";
import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui/button";
import type { ChatSidebarProps } from "./interfaces";

export function ChatSidebar({ idInstance, onDisconnect }: ChatSidebarProps) {
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
            Здесь появятся ваши чаты.
          </p>
        </div>
      </div>
      <Separator />
      <footer className="flex items-center justify-between gap-2 p-4">
        <div className="min-w-0 text-sm">
          <p className="font-medium">Аккаунт подключён</p>
          <p className="truncate text-muted-foreground">{idInstance}</p>
        </div>
        <Button type="button" variant="ghost" onClick={onDisconnect}>
          <LogOut aria-hidden="true" />
          Выйти
        </Button>
      </footer>
    </aside>
  );
}
