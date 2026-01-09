import { IUser } from "./user";

export interface IResponseUpdateProfile {
  user: IUser & {
    updatedAt: string;
    deletedAt?: string;
  };
}
