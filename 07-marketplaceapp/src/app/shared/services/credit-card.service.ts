import { marketplaceApiClient } from "../api/market-place";
import { TGetCreditCardsResponse } from "../types/http/credit-card";

export const getCreditCards = async () => {
  const { data } =
    await marketplaceApiClient.get<TGetCreditCardsResponse[]>("/credit-cards");

  return data;
};
