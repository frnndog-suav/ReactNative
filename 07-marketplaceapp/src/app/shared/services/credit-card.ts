import { marketplaceApiClient } from "../api/market-place";
import { ICreditCard } from "../interface/credit-card";
import { IRequestParamsCreateCreditCard } from "../interface/request-params-create-credit-card";
import { IResponseCreateCreditCard } from "../interface/response-create-credit-card";

export const getCreditCards = async () => {
  const { data } = await marketplaceApiClient.get<ICreditCard[]>(
    "/credit-cards"
  );

  return data;
};

export const createCreditCard = async (
  params: IRequestParamsCreateCreditCard
) => {
  const { data } = await marketplaceApiClient.post<IResponseCreateCreditCard>(
    "/credit-cards",
    params
  );

  return data;
};
