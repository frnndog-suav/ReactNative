import { baseURL, marketplaceApiClient } from "../api/market-place";
import { IRequestParamsLogin } from "../interface/request-params-login";
import { IRequestParamsRegister } from "../interface/request-params-register";
import { IResponseAuth } from "../interface/response-auth";
import { IResponseUploadAvatar } from "../interface/response-upload-avatar";

export async function register(params: IRequestParamsRegister) {
  const { data } = await marketplaceApiClient.post<IResponseAuth>(
    "/auth/register",
    params
  );

  return data;
}

export async function login(params: IRequestParamsLogin) {
  const { data } = await marketplaceApiClient.post<IResponseAuth>(
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

  const { data } = await marketplaceApiClient.post<IResponseUploadAvatar>(
    "/user/avatar"
  );

  data.url = `${baseURL}${data.url}`;

  return data;
};
