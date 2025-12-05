import { useProductInfiniteQuery } from "../../shared/queries/product/useProductInfiniteQuery";

export const useHomeViewModel = () => {
  const {
    error,
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

  return {
    products,
    handleRefresh,
    handleLoadMore,
  };
};
