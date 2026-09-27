import type { IAccountCredentials } from "@/shared/types/green-api";

export interface IChatPageProps {
  account: IAccountCredentials;
  onDisconnect: () => void;
}
