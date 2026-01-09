export interface IResponseSubmitOrder {
  message: string;
  ordersCount: number;
  orders: [
    {
      id: number;
      productId: number;
      quantity: number;
      totalPrice: number;
    }
  ];
}
