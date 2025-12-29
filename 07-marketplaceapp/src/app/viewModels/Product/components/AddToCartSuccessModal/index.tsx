import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";

interface IProps {
  productName: string;
  onClose: () => void;
  onGoToCart: () => void;
  onContinueShopping: () => void;
}

export const AddToCartSuccessModal = ({
  onClose,
  onContinueShopping,
  onGoToCart,
  productName,
}: IProps) => {
  return (
    <View className="bg-white rounded-xl p-6 w-full mx-w-sm">
      <View className="items-center mb-4">
        <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-3">
          <Ionicons name="checkmark" size={32} color={colors.success} />
        </View>

        <Text className="text-xl font-bold text-gray-900 text-center">
          Produto adicionado!
        </Text>
      </View>

      <Text className="text-gray-600 text-center mb-6">
        <Text className="font-semibold">{productName}</Text>
        {" foi adicionado ao seu carrinho com sucesso."}
      </Text>

      <View className="gap-6">
        <AppButton leftIcon="cart" onPress={onGoToCart}>
          Ver carrinho
        </AppButton>
        <AppButton variant="outlined" onPress={onContinueShopping}>
          Continuar comprando
        </AppButton>
      </View>
    </View>
  );
};
