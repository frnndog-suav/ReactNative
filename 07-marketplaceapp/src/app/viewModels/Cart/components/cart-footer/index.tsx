import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";
import { AppPriceText } from "../../../../shared/components/app-price-text";
import { useCartStore } from "../../../../shared/store/cart-store";
import { TCreditCard } from "../../../../shared/types/credit-card";
import { CreditCardItem } from "../credit-card-item";

interface IProps {
  creditCards: TCreditCard[];
  loadingCreditCards: boolean;
  openCartBottomSheet: () => void;
}

export const CartFooter = ({
  creditCards,
  loadingCreditCards,
  openCartBottomSheet,
}: IProps) => {
  const { total } = useCartStore();

  return (
    <View className="bg-white p-4 rounded-lg mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-sm font-semibold text-gray-600">VALOR TOTAL</Text>
        <AppPriceText
          value={total}
          classNameCurrency="text-base text-gray-900 font-bold"
          classNameValue="text-base text-gray-900 font-bold"
        />
      </View>

      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[10px] font-semibold text-gray-600">
            CARTÕES DE CRÉDITO
          </Text>

          <TouchableOpacity
            onPress={openCartBottomSheet}
            className="flex-row items-center"
          >
            <Ionicons
              name="cart-outline"
              size={20}
              color={colors["purple-base"]}
            />
            <Text className="text-purple-base ml-2 text-sm font-bold">
              Adicionar cartão
            </Text>
          </TouchableOpacity>
        </View>

        {loadingCreditCards ? (
          <View className="py-4 items-center">
            <ActivityIndicator size={"small"} color={colors["purple-base"]} />
            <Text className="text-gray-500 text-sm mt-2">
              Carregando cartões
            </Text>
          </View>
        ) : (
          <FlatList
            data={creditCards}
            renderItem={({ item }) => <CreditCardItem creditCard={item} />}
            className="gap-2"
          />
        )}

        <AppButton className="mt-4">Confirmar compra</AppButton>
      </View>
    </View>
  );
};
