import { MessageCircle } from "lucide-react";

export function EmptyChatList() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <MessageCircle
        className="mb-4 size-10 text-muted-foreground"
        aria-hidden="true"
      />
      <p className="font-medium">Пока нет чатов</p>
      <p className="mt-2 max-w-60 text-sm text-muted-foreground">
        Нажмите «+», чтобы начать чат по номеру телефона.
      </p>
    </div>
  );
}
