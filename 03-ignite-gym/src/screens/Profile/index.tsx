import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "@screens/Home/components/UserPhoto";
import { ScrollView, TouchableOpacity } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center marginTop={24} paddingHorizontal={40} alignItems="center">
          <UserPhoto
            source={{ uri: "https://github.com/frnndog-suav.png" }}
            alt="Foto do usuário"
            width={108}
            height={108}
          />
          <TouchableOpacity>
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
        </Center>
      </ScrollView>
    </VStack>
  );
}
