import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui/button";
import type { IAccountFooterProps } from "./interfaces";

export function AccountFooter(props: IAccountFooterProps) {
  const { idInstance, onDisconnect } = props;
  return (
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
  );
}
