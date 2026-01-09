import { marketplaceApiClient } from "../api/market-place";
import { IRequestParamsUpdateProfile } from "../interface/request-params-update-profile";
import { IResponseUpdateProfile } from "../interface/response-update-profile";

export const updateUserProfile = async (
  userData: IRequestParamsUpdateProfile
) => {
  const { data } = await marketplaceApiClient.put<IResponseUpdateProfile>(
    "/user",
    userData
  );

  return data;
};
