import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../../../styles/colors";

type TProps = {
  isLoading: boolean;
};

export const Footer = ({ isLoading }: TProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <View>
      <ActivityIndicator size={"small"} color={colors["purple-base"]} />
    </View>
  );
};
