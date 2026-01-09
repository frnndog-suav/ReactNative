import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { ICreditCard } from "../../../../shared/interface/credit-card";
import { useCreditCardViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useCreditCardViewModel> {
  isSelected: boolean;
  setSelectedCreditCard: (card: ICreditCard) => void;
}

export const CreditCardItemView = ({
  isSelected,
  creditCard,
  formattedCardNumber,
  formattedExpirationDate,
  setSelectedCreditCard,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCreditCard(creditCard)}
      className={`p-4 rounded-lg border-1 bg-white ${
        isSelected ? "border-purple-base" : "border-gray-100"
      }`}
    >
      <View className="flex-row justify-between">
        <View className="mr-4">
          <Ionicons
            name="card-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base">Cartão final {formattedCardNumber}</Text>
          <Text className="text-sm text-gray-500 mt-1">
            {formattedExpirationDate}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="pencil" color={colors["purple-base"]} size={18} />
        </TouchableOpacity>
      </View>
      ;
    </TouchableOpacity>
  );
};
