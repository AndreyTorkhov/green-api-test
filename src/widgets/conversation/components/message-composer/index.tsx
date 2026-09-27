import { Send } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";

export function MessageComposer() {
  return (
    <footer className="flex items-end gap-3 p-3 sm:p-5">
      <Textarea
        disabled
        aria-label="Сообщение"
        placeholder="Сообщение"
        rows={1}
        className="min-h-12 resize-none rounded-2xl bg-card px-4 py-3 disabled:opacity-100"
      />
      <Button
        type="button"
        size="icon"
        disabled
        aria-label="Отправить сообщение"
        className="size-12 shrink-0 rounded-full"
      >
        <Send aria-hidden="true" />
      </Button>
    </footer>
  );
}
