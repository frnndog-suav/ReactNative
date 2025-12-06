import { FilterView } from "./filter.view";
import { useFilterViewModel } from "./use-filter.viewModel";

export const Filter = () => {
  const props = useFilterViewModel();

  return <FilterView {...props} />;
};
