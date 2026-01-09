import { IUser } from "./user";

export interface IResponseAuth {
  user: IUser;
  token: string;
  refreshToken: string;
}
