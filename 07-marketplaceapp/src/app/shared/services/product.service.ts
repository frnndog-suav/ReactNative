import { marketplaceApiClient } from "../api/market-place";
import { TGetProductDetails } from "../types/http/get-product-details";
import { TGetProductRequestParams } from "../types/http/get-product-request-params";
import { TPaginatedResponse } from "../types/http/paginated-response";
import { TGetProductComments } from "../types/http/product-comments";
import { TProduct, TProductCategory } from "../types/product";
import { TProductComment } from "../types/product-comment";

export const getProducts = async (params: TGetProductRequestParams) => {
  const { data } = await marketplaceApiClient.post<
    TPaginatedResponse<TProduct>
  >("/products", params);

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketplaceApiClient.get<TProductCategory[]>(
    "/products/categories"
  );

  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketplaceApiClient.get<TGetProductDetails>(
    `/products/${id}`
  );

  return data;
};

export const getProductComments = async (params: TGetProductComments) => {
  const { data } = await marketplaceApiClient.post<
    TPaginatedResponse<TProductComment>
  >("/products/comments", params);

  return data;
};
