export interface IRequestParamsSubmitOrder {
  creditCardId: number;
  items: {
    productId: number;
    quantity: number;
  }[];
}
