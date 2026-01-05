import { AddCardBottomSheetView } from "./add-card-bottom-sheet-view";
import { useAddCardBottomSheetViewModel } from "./use-card-bottom-sheet-view-model";

export const AddCardBottomSheet = () => {
  const viewModel = useAddCardBottomSheetViewModel();

  return <AddCardBottomSheetView {...viewModel} />;
};
