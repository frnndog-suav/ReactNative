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

export function SignUp() {
  return (
    <ScrollView flex={1} backgroundColor="#121214">
      <VStack flex={1} minHeight={"100%"} alignItems="center">
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

        <Center gap={16} width="100%" paddingHorizontal={32}>
          <Heading color="#E1E1E6" alignSelf="center">
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
          <Button title="Voltar para login" variant="outlined" width={"100%"} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
