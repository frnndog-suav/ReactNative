import { marketplaceApiClient } from "../api/market-place";
import {
  ICreateCommentRequest,
  ICreateCommentResponse,
} from "../types/http/create-comment";
import { TGetProductDetails } from "../types/http/get-product-details";
import { TGetProductRequestParams } from "../types/http/get-product-request-params";
import { TPaginatedResponse } from "../types/http/paginated-response";
import { TGetProductComments } from "../types/http/product-comments";
import {
  IUpdateCommentRequest,
  IUpdateCommentResponse,
} from "../types/http/update-comment";
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
    "/products/categories",
  );

  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketplaceApiClient.get<TGetProductDetails>(
    `/products/${id}`,
  );

  return data;
};

export const getProductComments = async (params: TGetProductComments) => {
  const { data } = await marketplaceApiClient.post<
    TPaginatedResponse<TProductComment>
  >("/products/comments", params);

  return data;
};

export const createComment = async (params: ICreateCommentRequest) => {
  const { data } = await marketplaceApiClient.post<ICreateCommentResponse>(
    "/products/create/comments",
    params,
  );

  return data;
};

export const getUserComment = async (productId: number) => {
  const { data } = await marketplaceApiClient.get<{
    content: string;
    rating: number;
  }>(`/products/${productId}/user-comment`);

  return data;
};

export const updateUserComment = async (params: IUpdateCommentRequest) => {
  const { data } = await marketplaceApiClient.put<IUpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    {
      content: params.content,
      rating: params.rating,
    },
  );

  return data;
};
