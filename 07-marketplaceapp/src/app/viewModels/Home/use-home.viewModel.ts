import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinity-query";

export const useHomeViewModel = () => {
  const {
    products,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useProductInfiniteQuery();

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
