import { useProductInfinityQuery } from "../../shared/queries/product/use-product-infinity-query";
import { useFilterStore } from "../../shared/store/use-filter-store";

export const useHomeViewModel = () => {
  const { filterState } = useFilterStore();
  const {
    products,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useProductInfinityQuery({ filters: filterState });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  return {
    products,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    handleRefresh,
    handleLoadMore,
    handleEndReached,
  };
};
