import { LoaderCircle, Send } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { MAX_MESSAGE_LENGTH } from "./constants";
import { useSendMessage } from "./hooks/useSendMessage";
import type { ISendMessageProps } from "./interfaces";

export function SendMessage(props: ISendMessageProps) {
  const { chatId } = props;
  const { text, changeText, submit, onKeyDown, isSending, error } =
    useSendMessage(props);
  if (!chatId) {
    return null;
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-2 p-3 sm:p-5"
      aria-busy={isSending}
    >
      {error && (
        <p
          role="alert"
          id="message-error"
          className="rounded-lg bg-card p-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}
      <div className="flex items-end gap-3">
        <Textarea
          value={text}
          onChange={(event) => changeText(event.target.value)}
          onKeyDown={onKeyDown}
          readOnly={isSending}
          maxLength={MAX_MESSAGE_LENGTH}
          aria-label="Сообщение"
          placeholder="Сообщение"
          aria-invalid={!!error}
          aria-describedby={error ? "message-error" : undefined}
          rows={2}
          className="min-h-12 resize-none rounded-2xl bg-card px-4 py-3"
        />
        <Button
          type="submit"
          size="icon"
          disabled={isSending || !text.trim()}
          aria-label={isSending ? "Отправка сообщения" : "Отправить сообщение"}
          className="size-12 shrink-0 rounded-full"
        >
          {isSending ? (
            <LoaderCircle className="animate-spin" aria-hidden="true" />
          ) : (
            <Send aria-hidden="true" />
          )}
        </Button>
      </div>
    </form>
  );
}
