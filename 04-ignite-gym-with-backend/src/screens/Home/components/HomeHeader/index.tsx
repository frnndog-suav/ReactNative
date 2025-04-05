import defaultUserPhotoImg from "@assets/userPhotoDefault.png";
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { LogOut } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "../UserPhoto";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack
      display="flex"
      flexDirection="row"
      alignItems="center"
      paddingTop={64}
      paddingBottom={14}
      paddingHorizontal={32}
      backgroundColor="#202024"
      gap={8}
    >
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        width={64}
        height={64}
      />
      <VStack flex={1} gap={5}>
        <Text color="#E1E1E6" fontSize={14}>
          Olá,
        </Text>
        <Heading color="#E1E1E6" marginTop={0} marginBottom={0}>
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color="#C4C4CC" />
      </TouchableOpacity>
    </HStack>
  );
}
