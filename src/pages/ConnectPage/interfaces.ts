import type { IAccountCredentials } from "@/shared/types/green-api";

export interface IConnectPageProps {
  onConnect: (credentials: IAccountCredentials) => void;
}
