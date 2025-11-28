import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "../../shared/components/AppButton";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
  handleSelectAvatar,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          subtitle="Informe seus dados pessoais e de acesso"
          title="Crie sua conta"
        />

        <TouchableOpacity onPress={handleSelectAvatar}>
          <Ionicons name="cloud-upload-outline" size={32} />
        </TouchableOpacity>

        <AppInputController
          control={control}
          name="name"
          leftIcon="person-outline"
          label="NOME"
          placeholder="Seu nome"
        />

        <AppInputController
          control={control}
          name="phone"
          leftIcon="call-outline"
          label="TELEFONE"
          placeholder="Seu telefone"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="example@email.com.br"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          secureTextEntry
          placeholder="Sua senha"
        />

        <AppInputController
          control={control}
          name="confirmPassword"
          label="CONFIRMAR SENHA"
          leftIcon="lock-closed-outline"
          secureTextEntry
          placeholder="Confirme sua senha"
        />

        <AppButton className="mt-6" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-6">
            Já tem uma conta?
          </Text>
          <AppButton variant="outlined" onPress={() => router.push("/login")}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
