import { baseURL, marketplaceApiClient } from "../api/market-place";
import { TAuthResponse } from "../types/http/auth-response";
import { TLoginHttpParams } from "../types/http/login-request-params";
import { TRegisterHttpParams } from "../types/http/register-request-params";
import { TUploadAvatarResponse } from "../types/http/upload-avatar-response";

export async function register(params: TRegisterHttpParams) {
  const { data } = await marketplaceApiClient.post<TAuthResponse>(
    "/auth/register",
    params
  );

  return data;
}

export async function login(params: TLoginHttpParams) {
  const { data } = await marketplaceApiClient.post<TAuthResponse>(
    "/auth/login",
    params
  );
  return data;
}

export const uploadAvatar = async (avatarUri: string) => {
  const formData = new FormData();

  formData.append("avatar", {
    uri: avatarUri,
    name: "avatar.jpg",
    type: "image/jpeg",
  } as unknown as Blob);

  const { data } = await marketplaceApiClient.post<TUploadAvatarResponse>(
    "/user/avatar"
  );

  data.url = `${baseURL}${data.url}`;

  return data;
};
