import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "../UserPhoto";

export function HomeHeader() {
  return (
    <HStack
      display="flex"
      flexDirection="row"
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
      <VStack>
        <Text color="#E1E1E6" fontSize={14}>
          Olá,
        </Text>
        <Heading color="#E1E1E6">Fernando Goia</Heading>
      </VStack>
    </HStack>
  );
}
