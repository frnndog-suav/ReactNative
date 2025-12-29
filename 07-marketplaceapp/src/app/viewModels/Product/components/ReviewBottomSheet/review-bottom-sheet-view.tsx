import { Text, View } from "react-native";
import { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model";

interface IProps extends ReturnType<typeof useReviewBottomSheetViewModel> {}

export const ReviewBottomSheetView = ({}: IProps) => {
  return (
    <View>
      <Text>Review do produto</Text>
    </View>
  );
};
