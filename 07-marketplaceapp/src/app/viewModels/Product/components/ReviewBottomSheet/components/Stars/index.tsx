import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../../../../../styles/colors";

interface IProps {
  rating: number;
}

export const Stars = ({ rating }: IProps) => {
  return Array.from({ length: 5 }).map((_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity key={starNumber}>
        <Ionicons
          size={32}
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.grays["200"]}
        />
      </TouchableOpacity>
    );
  });
};
