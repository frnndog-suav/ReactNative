import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";
import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import { UserPhoto } from "@screens/Home/components/UserPhoto";
import { api } from "@services/api";
import { AppError } from "@utils/appError";
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
import * as yup from "yup";
import { MY_THEME_CONTROLLER } from "../../theme";

type FormDataProps = {
  name: string;
  password?: string | null;
  email?: string | null;
  old_password?: string | null;
  confirm_password?: string | null;
};

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().nullable(),
  old_password: yup.string().nullable(),
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), ""], "Senhas não conferem")
    .when("password", {
      is: (Field: any) => Field,
      then: () =>
        yup.string().nullable().required("Informe a confirmação da senha"),
    }),
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(true);
  const toast = useToast();
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      confirm_password: "",
      old_password: "",
      password: "",
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

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);

      await api.put("/users", data);

      return toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title="Perfil atualizado com sucesso!"
            description="Escolha uma de até 5MB."
            action="success"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível atualizar dados do usuário.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsUpdating(false);
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
                    errorMessage={errors.name?.message}
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value ?? ""}
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
              <Controller
                control={control}
                name="old_password"
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Senha antiga"
                    onChangeText={onChange}
                    secureTextEntry
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Nova senha"
                    onChangeText={onChange}
                    secureTextEntry
                    errorMessage={errors.password?.message}
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name="confirm_password"
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Confirme nova senha"
                    onChangeText={onChange}
                    secureTextEntry
                    errorMessage={errors.confirm_password?.message}
                    style={{
                      backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600,
                    }}
                  />
                )}
              />

              <Button
                title="Atualizar"
                onPress={handleSubmit(handleProfileUpdate)}
              />
            </Center>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
