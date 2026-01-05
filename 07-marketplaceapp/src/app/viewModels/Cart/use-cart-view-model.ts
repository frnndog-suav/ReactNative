import { createElement } from "react";
import { useGetCreditCardsQuery } from "../../shared/queries/credit-cards/use-get-credit-cards-query";
import { useBottomSheetStore } from "../../shared/store/bottom-sheet-store";
import { useCartStore } from "../../shared/store/cart-store";
import { AddCardBottomSheet } from "./components/add-card-bottom-sheet";

export const useCartViewModel = () => {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();
  const { data: creditCards = [], isLoading: loadingCreditCards } =
    useGetCreditCardsQuery();

  const openCartBottomSheet = () => {
    openBottomSheet({ content: createElement(AddCardBottomSheet) });
  };

  return { products, creditCards, loadingCreditCards, openCartBottomSheet };
};
