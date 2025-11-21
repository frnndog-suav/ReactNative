import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppInput } from "../../shared/components/AppInput";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";

export function LoginView() {
  return (
    <View className="items-center justify-center flex-1">
      <AuthFormHeader
        subtitle="Informe seu e-mail e senha para entrar"
        title="Acesse sua conta"
      />

      <AppInput />

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
