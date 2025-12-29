import { ReviewBottomSheetView } from "./review-bottom-sheet-view";
import { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model";

interface IProps {
  productId: number;
}

export const ReviewBottomSheet = ({ productId }: IProps) => {
  const viewModel = useReviewBottomSheetViewModel(productId);

  return <ReviewBottomSheetView {...viewModel} />;
};
