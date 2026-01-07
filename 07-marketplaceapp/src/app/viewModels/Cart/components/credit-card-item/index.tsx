import { TCreditCard } from "../../../../shared/types/credit-card";
import { CreditCardItemView } from "./credit-card-item-view";
import { useCreditCardViewModel } from "./use-credit-card-item-view-model";

interface IProps {
  creditCard: TCreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (card: TCreditCard) => void;
}

export const CreditCardItem = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: IProps) => {
  const viewModel = useCreditCardViewModel(creditCard);

  return (
    <CreditCardItemView
      {...viewModel}
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
    />
  );
};
