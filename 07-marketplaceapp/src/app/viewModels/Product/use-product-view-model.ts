import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-details";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isError,
    isLoading,
  } = useGetProductDetailQuery(productId);

  return { productDetails, isError, isLoading };
};
