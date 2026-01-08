import { TUser } from "../user";

export type TUpdateProfileRequest = {
  name: string;
  email: string;
  phone: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

export type TUpdateProfileResponse = {
  user: TUser & {
    updatedAt: string;
    deletedAt?: string;
  };
};
