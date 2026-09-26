export interface AccountCredentials {
  apiUrl: string;
  idInstance: string;
  apiTokenInstance: string;
}

export interface ConnectAccountProps {
  onConnect: (credentials: AccountCredentials) => void;
}

export interface GetStateInstanceResponse {
  stateInstance: string;
}
