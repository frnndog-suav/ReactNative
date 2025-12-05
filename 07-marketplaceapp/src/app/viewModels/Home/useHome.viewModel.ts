import { useProductInfiniteQuery } from "../../shared/queries/product/useProductInfiniteQuery";

export const useHomeViewModel = () => {
  const {
    products,
    isLoading,
    hasNextPage,
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
    isFetchingNextPage,
    handleRefresh,
    handleLoadMore,
    handleEndReached,
  };
};
