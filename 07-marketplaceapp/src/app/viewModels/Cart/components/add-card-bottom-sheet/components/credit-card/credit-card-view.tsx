import { TFocusedField } from "../../use-card-bottom-sheet-view-model";
import { useCreditCardViewModel } from "./use-credit-card-view-model";

interface IProps extends ReturnType<typeof useCreditCardViewModel> {
  focusedField: TFocusedField | null;
}

export const CreditCardView = ({ focusedField }: IProps) => {
  return null;
};
