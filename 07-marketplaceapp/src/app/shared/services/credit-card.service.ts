import { marketplaceApiClient } from "../api/market-place";
import { TCreditCard } from "../types/credit-card";
import {
  TCreateCreditCardRequestParams,
  TCreateCreditCardResponse,
} from "../types/http/create-credit-card";

export const getCreditCards = async () => {
  const { data } =
    await marketplaceApiClient.get<TCreditCard[]>("/credit-cards");

  return data;
};

export const createCreditCard = async (
  params: TCreateCreditCardRequestParams,
) => {
  const { data } = await marketplaceApiClient.post<TCreateCreditCardResponse>(
    "/credit-cards",
    params,
  );

  return data;
};
