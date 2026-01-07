import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";

export const EmptyList = () => {
  return (
    <View className="flex-1 items-center px-20 pt-16">
      <Ionicons
        name="clipboard-outline"
        size={80}
        color={colors.grays["200"]}
      />
      <Text className="text-xl font-bold text-gray-700 my-4 text-center">
        Você ainda não realizou nenhum pedido.
      </Text>
      <Text className="text-base text-gray-400 my-5 mb-8 text-center">
        Explore o catálogo de produtos e faça sua primeira compra.
      </Text>
      <AppButton
        leftIcon="storefront-outline"
        variant="outlined"
        onPress={() => {
          router.push("/home");
        }}
      >
        Explorar produtos
      </AppButton>
    </View>
  );
};
