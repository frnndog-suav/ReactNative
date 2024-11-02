import { ScreenHeader } from "@components/ScreenHeader";
import { Center, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "@screens/Home/components/UserPhoto";
import { ScrollView } from "react-native";

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
        </Center>
      </ScrollView>
    </VStack>
  );
}
