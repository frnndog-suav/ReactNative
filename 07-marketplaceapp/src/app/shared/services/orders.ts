import { marketplaceApiClient } from "../api/market-place";
import { IRequestParamsSubmitOrder } from "../interface/request-params-submit-order";
import { IResponseGetOrders } from "../interface/response-get-orders";
import { IResponseSubmitOrder } from "../interface/response-submit-order";

export const submitOrder = async (params: IRequestParamsSubmitOrder) => {
  const { data } = await marketplaceApiClient.post<IResponseSubmitOrder>(
    "/order",
    params
  );

  return data;
};

export const getOrders = async () => {
  const { data } = await marketplaceApiClient.get<IResponseGetOrders>(
    "/orders"
  );

  return data;
};
