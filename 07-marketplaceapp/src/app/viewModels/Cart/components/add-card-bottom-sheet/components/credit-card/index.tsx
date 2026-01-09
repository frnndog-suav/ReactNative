import { CreditCardView } from "./credit-card-view";
import { useCreditCardViewModel } from "./use-credit-card-view-model";

export const CreditCard = () => {
  const viewModel = useCreditCardViewModel();

  return <CreditCardView {...viewModel} />;
};
