import { useState } from "react";
import { useCartStore } from "../../../../shared/store/cart-store";
import { TCreditCard } from "../../../../shared/types/credit-card";

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<TCreditCard | null>(null);

  const { total } = useCartStore();

  return { total, selectedCreditCard, setSelectedCreditCard };
};
