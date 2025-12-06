import { marketplaceApiClient } from "../api/market-place";
import { TGetProductRequestParams } from "../types/http/get-product-request-params";
import { TProductResponse } from "../types/http/product-response";

export const getProducts = async (params: TGetProductRequestParams) => {
  const { data } = await marketplaceApiClient.post<TProductResponse>(
    "/products",
    params
  );

  return data;
};
