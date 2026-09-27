import type { IMessageBubbleProps } from "./interfaces";
import { cn } from "@/shared/lib/utils";

export function MessageBubble(props: IMessageBubbleProps) {
  const { message } = props;
  const date = new Date(message.timestamp);
  return (
    <li
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-2 shadow-sm",
        message.direction === "outgoing"
          ? "self-end rounded-br-sm bg-accent text-accent-foreground"
          : "self-start rounded-bl-sm bg-card text-card-foreground",
      )}
    >
      <p className="[overflow-wrap:anywhere] whitespace-pre-wrap">
        {message.text}
      </p>
      <div className="mt-1 flex justify-end gap-2 text-xs text-muted-foreground">
        {message.direction === "outgoing" && (
          <span title="GREEN-API принял сообщение в очередь отправки">
            В очереди
          </span>
        )}
        <time dateTime={date.toISOString()}>
          {date.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </li>
  );
}
