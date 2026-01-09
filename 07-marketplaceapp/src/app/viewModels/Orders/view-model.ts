import { useGetOrders } from "../../shared/queries/orders/use-get-orders";

export const useOrderViewModel = () => {
  const { data: response, error, isLoading } = useGetOrders();
  const orders = response?.orders ?? [];

  return { orders, error, isLoading };
};
