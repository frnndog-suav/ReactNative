import { TOrder } from "../order";

export type TGetOrdersResponse = {
  orders: TOrder[];
  totalOrders: number;
};
