export type TSubmitOrderRequest = {
  creditCardId: number;
  items: [
    {
      productId: number;
      quantity: number;
    },
  ];
};

export type TSubmitOrderResponse = {
  message: string;
  ordersCount: number;
  orders: [
    {
      id: number;
      productId: number;
      quantity: number;
      totalPrice: number;
    },
  ];
};
