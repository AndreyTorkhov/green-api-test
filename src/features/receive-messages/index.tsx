import { useReceiveMessages } from "./hooks/useReceiveMessages";
import type { IReceiveMessagesProps } from "./interfaces";

export function ReceiveMessages(props: IReceiveMessagesProps) {
  const error = useReceiveMessages(props);
  if (!error) {
    return null;
  }
  return (
    <p
      role="status"
      className="border-b bg-card px-5 py-3 text-sm text-destructive"
    >
      {error}
    </p>
  );
}
