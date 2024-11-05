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
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit } = useForm();

  function handleLogin() {
    navigator.navigate("signIn");
  }

  function handleCreateAccount(data: any) {
    console.log("data", data);
  }

  return (
    <>
      <ScrollView flex={1}>
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
            <Controller
              control={control}
              name="name"
              render={({ field }) => <Input {...field} placeholder="Nome" />}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input {...field} placeholder="Senha" secureTextEntry />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Confirmar senha"
                  secureTextEntry
                  onSubmitEditing={handleSubmit(handleCreateAccount)}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Criar e acessar"
              onPress={handleSubmit(handleCreateAccount)}
            />
            <Button
              title="Voltar para login"
              variant="outlined"
              width={"100%"}
              onPress={handleLogin}
            />
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
}
