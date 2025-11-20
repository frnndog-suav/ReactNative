import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInputController } from "../../shared/components/AppInputController";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Registro</Text>

      <AppInputController
        control={control}
        name="email"
        leftIcon="mail-outline"
        label="E-MAIL"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
