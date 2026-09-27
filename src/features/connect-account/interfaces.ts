import type { IAccountCredentials } from "@/shared/types/green-api";

export interface IConnectAccountProps {
  onConnect: (credentials: IAccountCredentials) => void;
}

export interface IGetStateInstanceResponse {
  stateInstance: string;
}

export interface IGetStateInstanceParams {
  account: IAccountCredentials;
  signal: AbortSignal;
}
