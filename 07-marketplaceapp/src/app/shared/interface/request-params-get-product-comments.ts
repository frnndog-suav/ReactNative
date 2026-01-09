export interface IRequestParamsGetProductComments {
  productId: number;
  pagination: {
    page: number;
    perPage: number;
  };
}
