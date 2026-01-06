import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { useCreditCardViewModel } from "./use-credit-card-item-view-model";

interface IProps extends ReturnType<typeof useCreditCardViewModel> {}

export const CreditCardItemView = ({
  creditCard,
  formattedCardNumber,
  formattedExpirationDate,
}: IProps) => {
  return (
    <TouchableOpacity className="p-4 rounded-lg border-1 bg-white border-gray-100">
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
