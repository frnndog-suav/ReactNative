import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { AppButton } from "../../shared/components/app-button";
import { AppInputController } from "../../shared/components/app-input-controller";
import { KeyboardContainer } from "../../shared/components/keyboard-container";
import { Header } from "./components/header";
import { useProfileViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useProfileViewModel> {}

export const ProfileView = ({
  avatarUri,
  control,
  errors,
  onSubmit,
  handleLogout,
  isSubmitting,
  handleSelectImage,
}: IProps) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <Header handleLogout={handleLogout} />
        <TouchableOpacity
          onPress={handleSelectImage}
          className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8 mt-6"
        >
          {avatarUri ? (
            <Image
              className="w-full h-full rounded-[12px]"
              resizeMode="cover"
              source={{ uri: avatarUri }}
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <Text className="text-base mt-6 font-bold text-gray-500">
          Dados pessoais
        </Text>

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
          label="SENHA ATUAL"
          secureTextEntry
          placeholder="Sua senha"
        />

        <AppInputController
          control={control}
          name="newPassword"
          label="NOVA SENHA"
          leftIcon="lock-closed-outline"
          secureTextEntry
          placeholder="Sua nova senha"
        />

        <AppButton className="mt-6" onPress={onSubmit} isLoading={isSubmitting}>
          Atualizar cadastro
        </AppButton>
      </ScrollView>
    </KeyboardContainer>
  );
};
