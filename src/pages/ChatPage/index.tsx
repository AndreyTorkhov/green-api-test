import { ChatSidebar } from "@/widgets/chat-sidebar";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import type { ChatPageProps } from "./interfaces";

export function ChatPage({ idInstance, onDisconnect }: ChatPageProps) {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr] md:grid-cols-[320px_1fr] md:grid-rows-1 lg:grid-cols-[380px_1fr]">
      <ChatSidebar idInstance={idInstance} onDisconnect={onDisconnect} />
      <section
        aria-label="Переписка"
        className="flex min-w-0 items-center justify-center bg-chat-background px-6 py-16"
      >
        <div className="max-w-sm rounded-3xl bg-card p-8 text-center text-card-foreground">
          <Avatar className="mx-auto mb-6 size-20 rounded-3xl">
            <AvatarFallback className="rounded-3xl bg-primary text-2xl font-bold text-primary-foreground">
              MAX
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-semibold">Сообщения MAX</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Здесь появится переписка после создания первого чата.
          </p>
        </div>
      </section>
    </main>
  );
}
