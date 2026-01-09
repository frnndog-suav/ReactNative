import { FilterView } from "./view";
import { useFilterViewModel } from "./view-model";

export const Filter = () => {
  const props = useFilterViewModel();

  return <FilterView {...props} />;
};
