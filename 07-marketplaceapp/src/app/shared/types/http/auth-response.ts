import { TUser } from "../user";

export type TAuthResponse = {
  user: TUser;
  token: string;
  refreshToken: string;
};
