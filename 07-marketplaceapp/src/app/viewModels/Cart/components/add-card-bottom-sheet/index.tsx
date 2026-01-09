import { AddCardBottomSheetView } from "./view";
import { useAddCardBottomSheetViewModel } from "./view-model";

export const AddCardBottomSheet = () => {
  const viewModel = useAddCardBottomSheetViewModel();

  return <AddCardBottomSheetView {...viewModel} />;
};
