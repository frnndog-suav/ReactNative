import { useGetOrdersQuery } from "../../shared/queries/orders/use-get-orders-query";

export const useOrderViewModel = () => {
  const { data: response, error, isLoading } = useGetOrdersQuery();
  const orders = response?.orders ?? [];

  return { orders, error, isLoading };
};
