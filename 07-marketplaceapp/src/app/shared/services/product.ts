import { marketplaceApiClient } from "../api/market-place";
import { IProduct, IProductCategory } from "../interface/product";
import { IProductComment } from "../interface/product-comment";
import { IRequestParamsCreateComment } from "../interface/request-params-create-comment";
import { IRequestParamsGetProduct } from "../interface/request-params-get-product";
import { IRequestParamsGetProductComments } from "../interface/request-params-get-product-comments";
import { IRequestParamsUpdateComment } from "../interface/request-params-update-comment";
import { IResponseCreateComment } from "../interface/response-create-comment";
import { IResponseGetProductDetails } from "../interface/response-get-product-details";
import { IResponseGetUserComment } from "../interface/response-get-user-comment";
import { IResponseUpdateComment } from "../interface/response-update-comment";
import { TPaginated } from "../types/paginated";

export const getProducts = async (params: IRequestParamsGetProduct) => {
  const { data } = await marketplaceApiClient.post<TPaginated<IProduct>>(
    "/products",
    params
  );

  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketplaceApiClient.get<IProductCategory[]>(
    "/products/categories"
  );

  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketplaceApiClient.get<IResponseGetProductDetails>(
    `/products/${id}`
  );

  return data;
};

export const getProductComments = async (
  params: IRequestParamsGetProductComments
) => {
  const { data } = await marketplaceApiClient.post<TPaginated<IProductComment>>(
    "/products/comments",
    params
  );

  return data;
};

export const createComment = async (params: IRequestParamsCreateComment) => {
  const { data } = await marketplaceApiClient.post<IResponseCreateComment>(
    "/products/create/comments",
    params
  );

  return data;
};

export const getUserComment = async (productId: number) => {
  const { data } = await marketplaceApiClient.get<IResponseGetUserComment>(
    `/products/${productId}/user-comment`
  );

  return data;
};

export const updateUserComment = async (
  params: IRequestParamsUpdateComment
) => {
  const { data } = await marketplaceApiClient.put<IResponseUpdateComment>(
    `/products/comments/${params.commentId}`,
    {
      content: params.content,
      rating: params.rating,
    }
  );

  return data;
};
