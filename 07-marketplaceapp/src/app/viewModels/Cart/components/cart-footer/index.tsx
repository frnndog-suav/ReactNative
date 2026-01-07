import { TCreditCard } from "../../../../shared/types/credit-card";
import { CartFooterView } from "./cart-footer-view";
import { useCartFooterViewModel } from "./use-cart-footer-view-model";

interface IProps {
  creditCards: TCreditCard[];
  loadingCreditCards: boolean;
  openCartBottomSheet: () => void;
}

export { IProps as ICartFooterProps };

export const CartFooter = ({
  creditCards,
  loadingCreditCards,
  openCartBottomSheet,
}: IProps) => {
  const viewModel = useCartFooterViewModel();

  return (
    <CartFooterView
      {...viewModel}
      creditCards={creditCards}
      loadingCreditCards={loadingCreditCards}
      openCartBottomSheet={openCartBottomSheet}
    />
  );
};
