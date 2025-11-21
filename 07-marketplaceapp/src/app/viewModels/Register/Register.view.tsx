import { router } from "expo-router";
import { FC } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          subtitle="Informe seus dados pessoais e de acesso"
          title="Crie sua conta"
        />
        <Text>Registro</Text>

        <AppInputController
          control={control}
          name="name"
          leftIcon="person-outline"
          label="NOME"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
        />

        <AppInputController
          control={control}
          name="phone"
          leftIcon="call-outline"
          label="TELEFONE"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          secureTextEntry
        />

        <AppInputController
          control={control}
          name="confirmPassword"
          label="CONFIRMAR SENHA"
          leftIcon="lock-closed-outline"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
};
