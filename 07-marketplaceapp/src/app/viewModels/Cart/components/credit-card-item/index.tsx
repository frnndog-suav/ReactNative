import { ICreditCard } from "../../../../shared/interface/credit-card";
import { CreditCardItemView } from "./view";
import { useCreditCardViewModel } from "./view-model";

interface IProps {
  creditCard: ICreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (card: ICreditCard) => void;
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
