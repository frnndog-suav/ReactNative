import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";
import { UserPhoto } from "../UserPhoto";

export function HomeHeader() {
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
        source={{ uri: "https://github.com/frnndog-suav.png" }}
        alt="Imagem do usuário"
        width={64}
        height={64}
      />
      <VStack flex={1} gap={5}>
        <Text color="#E1E1E6" fontSize={14}>
          Olá,
        </Text>
        <Heading color="#E1E1E6" marginTop={0} marginBottom={0}>
          Fernando Goia
        </Heading>
      </VStack>
      <Icon as={LogOut} color="#C4C4CC" />
    </HStack>
  );
}
