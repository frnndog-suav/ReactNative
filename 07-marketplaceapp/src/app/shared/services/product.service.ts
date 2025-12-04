import { marketplaceApiClient } from "../api/marketPlace";
import { TProductResponse } from "../types/http/productResponse";

type TGetProductRequestParams = {
  pagination: {
    page: number;
    perPage: number;
  };
  filters: {
    from: Date;
    to: Date;
    categoryIds: number[];
    searchText: string;
    minValue: number;
    maxValue: number;
  };
  sort: {
    averageRating: string;
  };
};

export const getProducts = async (params: TGetProductRequestParams) => {
  const { data } = await marketplaceApiClient.post<TProductResponse>(
    "/products",
    params
  );

  return data;
};
