import { router } from "expo-router";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useLoginViewModel } from "./useLogin.viewModel";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          subtitle="Informe seu e-mail e senha para entrar"
          title="Acesse sua conta"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="mail@example.com.br"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Sua senha"
        />
        <TouchableOpacity onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
};
