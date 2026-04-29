export interface ResponseAuth {
  success: boolean;
  message?: string;
  token?: string;
  refresh_token?: string;
}
