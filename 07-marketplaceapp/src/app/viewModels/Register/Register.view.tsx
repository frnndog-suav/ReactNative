import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInput } from "../../shared/components/AppInput";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Registro</Text>
      <AppInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        leftIcon="mail-outline"
      />
      <AppInput label="Senha" leftIcon="lock-closed-outline" />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
