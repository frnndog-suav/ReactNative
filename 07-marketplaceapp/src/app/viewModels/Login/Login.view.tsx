import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInput } from "../../shared/components/AppInput";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export function LoginView() {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          subtitle="Informe seu e-mail e senha para entrar"
          title="Acesse sua conta"
        />

        <AppInput />

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
}
