import { useInfiniteQuery } from "@tanstack/react-query";
import { buildImageUrl } from "../../helpers/build-image-url";
import { getProducts } from "../../services/product";
import { TFilterState } from "../../store/use-filter-store";

interface IProps {
  filters?: TFilterState;
}

export const useGetProduct = ({ filters }: IProps) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", filters],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
          filters: {
            categoryIds: filters?.selectedCategories ?? [],
            maxValue: filters?.valueMax ?? undefined,
            minValue: filters?.valueMin ?? undefined,
            searchText: filters?.searchText ?? undefined,
          },
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => {
      return {
        ...product,
        photo: buildImageUrl(product.photo),
      };
    });

  return {
    error,
    products,
    isLoading,
    hasNextPage,
    isRefetching,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  };
};
