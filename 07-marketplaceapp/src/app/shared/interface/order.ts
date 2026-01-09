export interface IOrder {
  id: number;
  productId: number;
  productName: string;
  productPhoto: string;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  creditCard: {
    id: number;
    maskedNumber: string;
  };
}
