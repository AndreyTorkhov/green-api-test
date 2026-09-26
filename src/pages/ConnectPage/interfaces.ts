import type { AccountCredentials } from "@/features/connect-account/interfaces";

export interface ConnectPageProps {
  onConnect: (credentials: AccountCredentials) => void;
}
