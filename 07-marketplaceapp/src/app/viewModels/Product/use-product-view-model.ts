import { router } from "expo-router";
import { createElement } from "react";
import { useGetProductCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinity-query";
import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-details";
import { useCartStore } from "../../shared/store/cart-store";
import { useModalStore } from "../../shared/store/modal-store";
import { AddToCartSuccessModal } from "./components/AddToCartSuccessModal";

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

  const { addProduct } = useCartStore();

  const { open, close } = useModalStore();

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

  const handleGoToCart = () => {
    router.push("/(private)/(tabs)/cart");
    close();
  };

  const handleContinueShopping = () => {
    router.push("/(private)/(tabs)/home");
    close();
  };

  const handleAddToCart = () => {
    if (!productDetails) {
      return;
    }

    addProduct({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.value,
      image: productDetails.photo,
    });

    open(
      createElement(AddToCartSuccessModal, {
        productName: productDetails.name,
        onClose: close,
        onGoToCart: handleGoToCart,
        onContinueShopping: handleContinueShopping,
      }),
    );
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
    handleAddToCart,
    getCommentsError,
  };
};
