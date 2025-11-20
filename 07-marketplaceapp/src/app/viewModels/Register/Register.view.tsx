import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInput } from "../../shared/components/AppInput";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Registro</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value } }) => (
          <AppInput
            label="E-mail"
            value={value}
            onChangeText={setEmail}
            leftIcon="mail-outline"
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />

      {/* 
      <AppInput label="Senha" leftIcon="lock-closed-outline" /> */}

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
