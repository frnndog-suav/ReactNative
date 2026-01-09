import { router } from "expo-router";
import { createElement } from "react";
import { useGetProductComments } from "../../shared/queries/product/use-get-product-comments";
import { useGetProductDetail } from "../../shared/queries/product/use-get-product-details";
import { useBottomSheetStore } from "../../shared/store/use-bottom-sheet-store";
import { useCartStore } from "../../shared/store/use-cart-store";
import { useModalStore } from "../../shared/store/use-modal-store";
import { AddToCartSuccessModal } from "./components/add-to-cart-success-modal";
import { ReviewBottomSheet } from "./components/review-bottom-sheet";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isError,
    isLoading,
  } = useGetProductDetail(productId);

  const {
    comments,
    isLoading: getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductComments(productId);

  const { addProduct } = useCartStore();
  const { open, close } = useModalStore();
  const { open: openBottomSheet } = useBottomSheetStore();

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

  const handleOpenReview = () => {
    if (!productDetails) {
      return;
    }

    openBottomSheet({
      content: createElement(ReviewBottomSheet, {
        productId: productDetails.id,
      }),
    });
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
    handleOpenReview,
  };
};
