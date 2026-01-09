export interface IRequestParamsUpdateProfile {
  name: string;
  email: string;
  phone: string;
  newPassword?: string;
  confirmNewPassword?: string;
}
