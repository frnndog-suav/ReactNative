import { marketplaceApiClient } from "../api/marketPlace";
import { TGetProductRequestParams } from "../types/http/product";
import { TProductResponse } from "../types/http/productResponse";

export const getProducts = async (params: TGetProductRequestParams) => {
  const { data } = await marketplaceApiClient.post<TProductResponse>(
    "/products",
    params
  );

  return data;
};
