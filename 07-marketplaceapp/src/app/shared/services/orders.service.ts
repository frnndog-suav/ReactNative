import { marketplaceApiClient } from "../api/market-place";
import { TGetOrdersResponse } from "../types/http/get-orders";
import {
  TSubmitOrderRequest,
  TSubmitOrderResponse,
} from "../types/http/submit-orders";

export const submitOrder = async (params: TSubmitOrderRequest) => {
  const { data } = await marketplaceApiClient.post<TSubmitOrderResponse>(
    "/order",
    params,
  );

  return data;
};

export const getOrders = async () => {
  const { data } =
    await marketplaceApiClient.get<TGetOrdersResponse>("/orders");

  return data;
};
