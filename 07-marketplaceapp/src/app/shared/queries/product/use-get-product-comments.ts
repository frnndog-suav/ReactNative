import { useInfiniteQuery } from "@tanstack/react-query";
import { baseURL } from "../../api/market-place";
import { IProductComment } from "../../interface/product-comment";
import { getProductComments } from "../../services/product";

export const useGetProductComments = (productId: number) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      getProductComments({
        productId,
        pagination: { page: pageParam, perPage: 20 },
      }),
    queryKey: ["product-comments", productId],
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const comments =
    (query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: {
            url: comment.user.avatar
              ? `${baseURL}${comment.user.avatar?.url}`
              : undefined,
          },
        },
      })) as unknown as IProductComment[]) ?? [];

  return {
    ...query,
    comments,
  };
};
