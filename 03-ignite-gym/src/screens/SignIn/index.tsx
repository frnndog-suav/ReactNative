import BackgroundImg from "@assets/background.png";
import { Center, Image, Text, VStack } from "@gluestack-ui/themed";
import Logo from "@assets/logo.svg";

export function SignIn() {
  return (
    <VStack flex={1} backgroundColor="#121214" alignItems="center">
      <Image
        alt="Pessoas treinando"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        style={{ width: "100%", height: 624 }}
        position="absolute"
      />

      <Center marginVertical={184}>
        <Logo />
        <Text color="#E1E1E6" fontSize={16}>
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  );
}
