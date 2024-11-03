import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "@screens/Home/components/UserPhoto";
import * as ImagePicker from "expo-image-picker";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

export function Profile() {
  async function handleUserPhotoSelect() {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });
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
              source={{ uri: "https://github.com/frnndog-suav.png" }}
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
              <Input
                placeholder="Nome"
                style={{ backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600 }}
              />
              <Input
                value="test.teste@gmail.com"
                isReadOnly
                style={{ backgroundColor: MY_THEME_CONTROLLER.COLORS.GRAY_600 }}
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
