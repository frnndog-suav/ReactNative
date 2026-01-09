import { createElement } from "react";
import { useGetCreditCards } from "../../shared/queries/credit-cards/use-get-credit-cards";
import { useBottomSheetStore } from "../../shared/store/use-bottom-sheet-store";
import { useCartStore } from "../../shared/store/use-cart-store";
import { AddCardBottomSheet } from "./components/add-card-bottom-sheet";

export const useCartViewModel = () => {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();
  const { data: creditCards = [], isLoading: loadingCreditCards } =
    useGetCreditCards();

  const openCartBottomSheet = () => {
    openBottomSheet({ content: createElement(AddCardBottomSheet) });
  };

  return { products, creditCards, loadingCreditCards, openCartBottomSheet };
};
