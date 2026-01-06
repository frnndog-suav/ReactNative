import { TCreditCard } from "../../../../shared/types/credit-card";
import { CreditCardItemView } from "./credit-card-item-view";
import { useCreditCardViewModel } from "./use-credit-card-item-view-model";

interface IProps {
  creditCard: TCreditCard;
}

export const CreditCardItem = ({ creditCard }: IProps) => {
  const viewModel = useCreditCardViewModel(creditCard);

  return <CreditCardItemView {...viewModel} />;
};
