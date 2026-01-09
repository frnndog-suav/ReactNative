import { useState } from "react";
import { useDebounce } from "../../shared/hooks/use-debounce";
import { useGetProduct } from "../../shared/queries/product/use-get-product";
import { useFilterStore } from "../../shared/store/use-filter-store";

export const useHomeViewModel = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const currentSearchText = useDebounce<string>(searchInputText);

  const { filterState } = useFilterStore();
  const {
    products,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useGetProduct({
    filters: { ...filterState, searchText: currentSearchText },
  });

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
    searchInputText,
    isFetchingNextPage,
    handleRefresh,
    handleLoadMore,
    handleEndReached,
    setSearchInputText,
  };
};
