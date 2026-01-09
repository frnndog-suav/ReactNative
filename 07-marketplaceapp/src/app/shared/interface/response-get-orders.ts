import { IOrder } from "./order";

export interface IResponseGetOrders {
  orders: IOrder[];
  totalOrders: number;
}
