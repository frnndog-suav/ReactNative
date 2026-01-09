import { ICreditCard } from "../../../../shared/interface/credit-card";
import { CartFooterView } from "./view";
import { useCartFooterViewModel } from "./view-model";

interface IProps {
  creditCards: ICreditCard[];
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
