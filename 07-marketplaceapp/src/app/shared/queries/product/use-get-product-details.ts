import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../services/product.service";

export const useGetProductDetailQuery = (productId: number) => {
  const query = useQuery({
    queryKey: ["product-details", productId],
    queryFn: async () => getProductDetail(productId),
  });

  return query;
};
