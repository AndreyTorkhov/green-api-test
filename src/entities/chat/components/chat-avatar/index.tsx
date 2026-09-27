import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import type { IChatAvatarProps } from "./interfaces";

export function ChatAvatar({ phoneNumber }: IChatAvatarProps) {
  return (
    <Avatar className="size-12">
      <AvatarFallback className="bg-primary text-primary-foreground">
        {phoneNumber.slice(-2)}
      </AvatarFallback>
    </Avatar>
  );
}
