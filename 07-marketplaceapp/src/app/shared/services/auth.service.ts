import { marketplaceApiClient } from "../api/marketPlace";
import { TAuthResponse } from "../types/http/authResponse";
import { TLoginHttpParams } from "../types/http/login";
import { TRegisterHttpParams } from "../types/http/register";

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
