import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories-query";

export const useFilterViewModel = () => {
  const {
    error,
    isLoading,
    data: productsCategories,
    refetch,
  } = useGetProductCategoriesQuery();

  return { productsCategories, isLoading };
};
