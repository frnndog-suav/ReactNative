import { FC } from "react";
import { Text, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  isLoading,
  setIsLoading,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Registro</Text>
    </View>
  );
};
