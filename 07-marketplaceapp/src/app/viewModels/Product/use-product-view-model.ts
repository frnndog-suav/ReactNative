import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-details";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetail,
    isError,
    isLoading,
  } = useGetProductDetailQuery(productId);

  return { productDetail, isError, isLoading };
};
