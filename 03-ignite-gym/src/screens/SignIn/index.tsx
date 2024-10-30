import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

export function SignIn() {
  return (
    <ScrollView flex={1} backgroundColor="#121214">
      <VStack
        minHeight={"100%"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          alt="Pessoas treinando"
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          style={{ width: "100%", height: 700 }}
          position="absolute"
        />

        <Center marginTop={154} marginBottom={60}>
          <Logo />
          <Text color="#E1E1E6" fontSize={16}>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center gap={16} justifyContent="center">
          <Heading color="#E1E1E6" alignSelf="center">
            Acesse a conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center flex={1} justifyContent="flex-end" marginBottom={40}>
          <Text color="#E1E1E6" fontSize={14} marginBottom={16}>
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outlined" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
