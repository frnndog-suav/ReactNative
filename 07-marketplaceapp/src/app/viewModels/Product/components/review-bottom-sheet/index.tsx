import { ReviewBottomSheetView } from "./view";
import { useReviewBottomSheetViewModel } from "./view-model";

interface IProps {
  productId: number;
}

export const ReviewBottomSheet = ({ productId }: IProps) => {
  const viewModel = useReviewBottomSheetViewModel(productId);

  return <ReviewBottomSheetView {...viewModel} />;
};
