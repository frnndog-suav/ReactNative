import { useQuery } from "@tanstack/react-query";
import { getUserComment } from "../../services/product";

export const useGetUserComment = (productId: number) => {
  const query = useQuery({
    queryKey: ["user-comment", productId],
    queryFn: () => getUserComment(productId),
    staleTime: 1000 * 60 * 5,
  });

  return query;
};
