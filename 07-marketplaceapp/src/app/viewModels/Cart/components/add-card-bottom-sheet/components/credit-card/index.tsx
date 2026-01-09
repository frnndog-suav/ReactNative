import { TFocusedField } from "../../use-card-bottom-sheet-view-model";
import { CreditCardView } from "./credit-card-view";
import { useCreditCardViewModel } from "./use-credit-card-view-model";

interface IProps {
  isFlipped: boolean;
  focusedField: TFocusedField | null;
}

export const CreditCard = ({ focusedField, isFlipped }: IProps) => {
  const viewModel = useCreditCardViewModel({ isFlipped });

  return <CreditCardView focusedField={focusedField} {...viewModel} />;
};
