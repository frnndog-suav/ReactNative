import { marketplaceApiClient } from "../api/marketPlace";
import {
    TRegisterHttpParams,
    TRegisterHttpResponse,
} from "../types/http/register";

export async function register(params: TRegisterHttpParams) {
  const { data } = await marketplaceApiClient.post<TRegisterHttpResponse>(
    "/auth/register",
    params
  );

  return data;
}
