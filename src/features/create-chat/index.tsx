import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { CreateChatForm } from "./components/create-chat-form";
import { useCreateChat } from "./hooks/useCreateChat";
import type { ICreateChatProps } from "./interfaces";

export function CreateChat(props: ICreateChatProps) {
  const { open, changeOpen, form, submit } = useCreateChat(props);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          className="rounded-full"
          aria-label="Новый чат"
          title="Новый чат"
        >
          <Plus aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] rounded-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Новый чат</DialogTitle>
          <DialogDescription>
            Введите номер получателя с кодом страны.
          </DialogDescription>
        </DialogHeader>
        <CreateChatForm form={form} onSubmit={submit} />
      </DialogContent>
    </Dialog>
  );
}
