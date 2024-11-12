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
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const signInSchema = yup.object({
  email: yup.string().required("Informe o email.").email("Email inválido."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "Senha deve ter pelo menos 6 digitos."),
});

type TFormDataProps = {
  email: string;
  password: string;
};

export function SignIn() {
  const { signIn } = useAuth();
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormDataProps>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleNewAccount() {
    navigator.navigate("signUp");
  }

  async function handleSignIn({ email, password }: TFormDataProps) {
    signIn(email, password);
  }

  return (
    <ScrollView flex={1}>
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

        <Center gap={16} width="100%" paddingHorizontal={32}>
          <Heading color="#E1E1E6" alignSelf="center">
            Acesse a conta
          </Heading>

          <Controller
            control={control}
            name="email"
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
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center flex={1} justifyContent="flex-end" marginBottom={40}>
          <Text color="#E1E1E6" fontSize={14} marginBottom={16}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outlined"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
