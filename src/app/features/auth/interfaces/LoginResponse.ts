import { User } from './User';

export interface LoginResponse {
  token: string;
  refresh_token: string;
  user: User;
}
