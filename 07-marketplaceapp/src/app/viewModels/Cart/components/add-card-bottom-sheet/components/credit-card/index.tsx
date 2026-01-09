import { TFocusedField } from "../../use-card-bottom-sheet-view-model";
import { CreditCardView, TCardData } from "./credit-card-view";
import { useCreditCardViewModel } from "./use-credit-card-view-model";

interface IProps {
  isFlipped: boolean;
  focusedField: TFocusedField | null;
  cardData: TCardData;
}

export const CreditCard = ({ focusedField, isFlipped, cardData }: IProps) => {
  const viewModel = useCreditCardViewModel({ isFlipped });

  return (
    <CreditCardView
      cardData={cardData}
      focusedField={focusedField}
      {...viewModel}
    />
  );
};
