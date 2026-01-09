import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { AppButton } from "../../shared/components/app-button";
import { AppInputController } from "../../shared/components/app-input-controller";
import { AuthFormHeader } from "../../shared/components/auth-form-header";
import { KeyboardContainer } from "../../shared/components/keyboard-container";
import { useLoginViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useLoginViewModel> {}

export const LoginView = ({ control, onSubmit }: IProps) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
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
            secureTextEntry
          />
          <AppButton
            className="mt-6"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Login
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-600">
            Ainda não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/register")}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
