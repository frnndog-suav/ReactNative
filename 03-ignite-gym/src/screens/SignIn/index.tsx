import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";

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

      <Center marginTop={154} marginBottom={80}>
        <Logo />
        <Text color="#E1E1E6" fontSize={16}>
          Treine sua mente e seu corpo
        </Text>
      </Center>

      <Center gap={16}>
        <Heading color="#E1E1E6">Acesse a conta</Heading>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
      </Center>
    </VStack>
  );
}
