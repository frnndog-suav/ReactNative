import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../../../styles/colors";

interface IProps {
  isLoadingMore: boolean;
}

export const ListFooter = ({ isLoadingMore }: IProps) => {
  if (!isLoadingMore) {
    return null;
  }

  return (
    <View className="py-4">
      <ActivityIndicator color={colors["purple-base"]} size={"small"} />
    </View>
  );
};
