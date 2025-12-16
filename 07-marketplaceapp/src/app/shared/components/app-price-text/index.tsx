import { AppPriceTextView } from "./app-price-text-view";
import { useAppPriceTextViewModel } from "./use-app.price-text-view-model";

type TProps = {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
};

export const AppPriceText = ({
  value,
  classNameCurrency,
  classNameValue,
}: TProps) => {
  const viewModel = useAppPriceTextViewModel(value);

  return (
    <AppPriceTextView
      {...viewModel}
      classNameValue={classNameValue}
      classNameCurrency={classNameCurrency}
    />
  );
};
