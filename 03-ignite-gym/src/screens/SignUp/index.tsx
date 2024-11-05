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

type TFormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormDataProps>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function handleLogin() {
    navigator.navigate("signIn");
  }

  function handleCreateAccount(data: TFormDataProps) {
    console.log("data", data);
  }

  return (
    <>
      <ScrollView flex={1}>
        <VStack
          flex={1}
          minHeight={"100%"}
          alignItems="center"
          paddingBottom={100}
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

          <Center gap={16} width="100%" paddingHorizontal={32}>
            <Heading color="#E1E1E6" alignSelf="center">
              Crie sua conta
            </Heading>
            <Controller
              control={control}
              name="name"
              rules={{
                required: "teste",
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={(e) => onChange(e)}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              rules={{
                required: "Informe o email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Email inválido",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={(e) => onChange(e)}
                  value={value}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={(e) => onChange(e)}
                  value={value}
                  placeholder="Senha"
                  secureTextEntry
                />
              )}
            />
            <Controller
              control={control}
              name="passwordConfirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={(e) => onChange(e)}
                  value={value}
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
