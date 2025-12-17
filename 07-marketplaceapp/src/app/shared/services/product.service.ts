import { marketplaceApiClient } from "../api/market-place";
import { TGetProductDetailsInterface } from "../types/http/get-product-details";
import { TGetProductRequestParams } from "../types/http/get-product-request-params";
import { TProductResponse } from "../types/http/product-response";
import { TProductCategory } from "../types/product";

export const getProducts = async (params: TGetProductRequestParams) => {
  const { data } = await marketplaceApiClient.post<TProductResponse>(
    "/products",
    params
  );

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketplaceApiClient.get<TProductCategory[]>(
    "/products/categories"
  );

  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketplaceApiClient.get<TGetProductDetailsInterface>(
    `/products/${id}`
  );

  return data;
};
