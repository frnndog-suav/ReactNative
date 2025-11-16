import { TUser } from "../user";

export type TRegisterHttpParams = {
  name: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl: string;
};

export type TRegisterHttpResponse = {
  user: TUser;
  token: string;
  refreshToken: string;
};
