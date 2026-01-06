import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { TCreditCard } from "../../../../shared/types/credit-card";

interface IProps {
  creditCard: TCreditCard;
}

export const CreditCardItem = ({ creditCard }: IProps) => {
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
          <Text className="text-base font-semibold">{creditCard.number}</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Vencimento: {creditCard?.expirationDate.toString()}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="pencil" />
        </TouchableOpacity>
      </View>
      ;
    </TouchableOpacity>
  );
};
