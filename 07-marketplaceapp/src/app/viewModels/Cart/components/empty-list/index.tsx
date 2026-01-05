import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";

export const EmptyList = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-20 pt-16">
        <Ionicons name="cart-outline" size={80} color={colors.grays[200]} />
        <Text className="text-xl font-bold text-gray-700 mt-4 mb-4">
          Seu carrinho está vazio
        </Text>

        <Text className="text-base text-gray-400 text-center mb-8">
          Explore o catálogo de produtos e faça sua primeira compra!
        </Text>
      </View>

      <AppButton
        variant="outlined"
        leftIcon="storefront-outline"
        className="w-[197px] self-center"
        onPress={() => router.push("/home")}
      >
        Explorar produtos
      </AppButton>
    </SafeAreaView>
  );
};
