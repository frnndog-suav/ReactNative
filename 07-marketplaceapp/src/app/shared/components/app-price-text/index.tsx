import { useAppPriceTextViewModel } from "./view-model";
import { AppPriceTextView } from "./view";

interface IProps {
  value: number;
  classNameValue?: string;
  classNameCurrency?: string;
}

export const AppPriceText = ({
  value,
  classNameCurrency,
  classNameValue,
}: IProps) => {
  const viewModel = useAppPriceTextViewModel(value);

  return (
    <AppPriceTextView
      {...viewModel}
      classNameValue={classNameValue}
      classNameCurrency={classNameCurrency}
    />
  );
};
