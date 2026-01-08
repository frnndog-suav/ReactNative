import { marketplaceApiClient } from "../api/market-place";
import {
  TUpdateProfileRequest,
  TUpdateProfileResponse,
} from "../types/http/update-profile";

export const updateUserProfile = async (userData: TUpdateProfileRequest) => {
  const { data } = await marketplaceApiClient.put<TUpdateProfileResponse>(
    "/user",
    userData
  );

  return data;
};
