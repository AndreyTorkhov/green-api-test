import type { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "@/pages/ErrorPage";
import { useChatStore } from "@/entities/chat/store";
import { useMessageStore } from "@/entities/message/store";

export function ErrorBoundaryProvider({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => {
        useChatStore.getState().resetChats();
        useMessageStore.getState().resetMessages();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
