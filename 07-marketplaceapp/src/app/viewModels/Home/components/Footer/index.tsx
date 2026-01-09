import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../../../styles/colors";

interface IProps {
  isLoading: boolean;
}

export const Footer = ({ isLoading }: IProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <View>
      <ActivityIndicator size={"small"} color={colors["purple-base"]} />
    </View>
  );
};
