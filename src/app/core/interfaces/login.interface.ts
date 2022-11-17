import { User } from "../models/user.model";

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: User
}
