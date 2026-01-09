import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/orders";

export const useGetOrders = () => {
  const query = useQuery({
    queryKey: ["user-orders"],
    queryFn: getOrders,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return query;
};
