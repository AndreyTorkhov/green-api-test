import { ArrowLeft } from "lucide-react";
import { ChatAvatar } from "@/entities/chat/components/chat-avatar";
import { Button } from "@/shared/ui/button";
import type { IConversationHeaderProps } from "./interfaces";

export function ConversationHeader(props: IConversationHeaderProps) {
  const { chat, onBack } = props;
  return (
    <header className="flex items-center gap-3 border-b bg-card px-4 py-3">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label="Назад к чатам"
        onClick={onBack}
      >
        <ArrowLeft aria-hidden="true" />
      </Button>
      <ChatAvatar phoneNumber={chat.phoneNumber} />
      <div className="min-w-0">
        <h2 className="truncate font-semibold">+{chat.phoneNumber}</h2>
        <p className="text-xs text-muted-foreground">MAX</p>
      </div>
    </header>
  );
}
