import { useEffect, useRef } from "react";
import type { TMaybe } from "@/shared/types/maybe";

export function useMessageScroll(messageCount: number) {
  const ref = useRef<TMaybe<HTMLDivElement>>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messageCount]);
  return ref;
}
