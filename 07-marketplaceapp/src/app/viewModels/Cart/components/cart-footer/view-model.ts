import { router } from "expo-router";
import { useState } from "react";
import { useAppModal } from "../../../../shared/hooks/use-app-modal";
import { ICreditCard } from "../../../../shared/interface/credit-card";
import { useSubmitOrder } from "../../../../shared/queries/orders/use-submit-order";
import { useCartStore } from "../../../../shared/store/use-cart-store";

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<ICreditCard | null>(null);

  const { showSuccess } = useAppModal();
  const { total, products, clearCart } = useCartStore();
  const createOrderMutation = useSubmitOrder();

  const submitOrderMutation = async () => {
    if (!selectedCreditCard) return;

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    });

    clearCart();

    showSuccess({
      title: "Sucesso",
      message: "Seu pedido foi realizado com sucesso!",
      buttonText: "Ver meus pedidos",
      onButtonPress: () => {
        router.push("/orders");
      },
    });
  };

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isOrderLoading: createOrderMutation.isPending,
  };
};
