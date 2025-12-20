import { useGetProductCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinity-query";
import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-details";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isError,
    isLoading,
  } = useGetProductDetailQuery(productId);

  const {
    comments,
    isLoading: getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductCommentsInfiniteQuery(productId);

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch();
    }
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  return {
    productDetails,
    isError,
    isLoading,
    handleEndReached,
    handleRefetch,
    isRefetching,
    isFetchingNextPage,
    comments,
    getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    getCommentsError,
  };
};
