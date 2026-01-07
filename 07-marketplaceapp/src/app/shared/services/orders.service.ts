import { marketplaceApiClient } from "../api/market-place";
import {
    TSubmitOrderRequest,
    TSubmitOrderResponse,
} from "../types/http/orders";

export const submitOrder = async (params: TSubmitOrderRequest) => {
  const { data } = await marketplaceApiClient.post<TSubmitOrderResponse>(
    "/order",
    params,
  );

  return data;
};
