import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";
import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import { useAuth } from "@hooks/useAuth";
import { UserPhoto } from "@screens/Home/components/UserPhoto";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

export function Profile() {
  const toast = useToast();
  const { user } = useAuth();
  const { control } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/frnndog-suav.png"
  );

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoUri = photoSelected.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 0.01) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                id={id}
                title="Imagem muito grande."
                description="Escolha uma de até 5MB."
                action="error"
                onClose={() => toast.close(id)}
              />
            ),
          });
        }

        setUserPhoto(photoUri);
      }
    } catch (error) {
      console.log("Error in image picker", error);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <Center marginTop={24} paddingHorizontal={40} alignItems="center">
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              width={108}
              height={108}
            />
            <TouchableOpacity onPress={handleUserPhotoSelect}>
              <Text
                color={MY_THEME_CONTROLLER.COLORS.GREEN_500}
                fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
                fontSize={MY_THEME_CONTROLLER.FONT_SIZE.MD}
                marginTop={8}
                marginBottom={32}
              >
                Alterar foto
              </Text>
            </TouchableOpacity>
            <Center width="100%" gap={16}>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Nome"
                    value={value}
                    onChangeText={onChange}
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    isReadOnly
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />
            </Center>
            <Heading
              marginTop={48}
              marginBottom={16}
              alignSelf="flex-start"
              fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
              color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
              fontSize={MY_THEME_CONTROLLER.FONT_SIZE.MD}
            >
              Alterar senha
            </Heading>
            <Center width="100%" gap={16}>
              <Input
                placeholder="Senha antiga"
                secureTextEntry
                style={{ backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600 }}
              />
              <Input
                placeholder="Nova senha"
                secureTextEntry
                style={{ backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600 }}
              />
              <Input
                placeholder="Confirme nova senha"
                secureTextEntry
                style={{ backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600 }}
              />

              <Button title="Atualizar" />
            </Center>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
