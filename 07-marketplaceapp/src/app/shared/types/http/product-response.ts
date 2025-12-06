import { TProduct } from "../product";

export type TProductResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: TProduct[];
};
