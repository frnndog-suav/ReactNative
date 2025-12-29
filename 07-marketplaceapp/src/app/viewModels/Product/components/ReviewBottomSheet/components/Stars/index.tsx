import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../../../../../styles/colors";

interface IProps {
  rating: number;
  handleRatingChange: (rating: number) => void;
}

export const Stars = ({ rating, handleRatingChange }: IProps) => {
  return Array.from({ length: 5 }).map((_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;

    return (
      <TouchableOpacity
        key={`rating-start-${starNumber}`}
        onPress={() => handleRatingChange(starNumber)}
      >
        <Ionicons
          size={32}
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.grays["200"]}
        />
      </TouchableOpacity>
    );
  });
};
