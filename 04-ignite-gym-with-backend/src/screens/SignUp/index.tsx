import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ToastMessage } from "@components/ToastMessage";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  useToast,
  VStack,
} from "@gluestack-ui/themed";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { api } from "@services/api";
import { AppError } from "@utils/appError";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o email.").email("Email inválido."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "Senha deve ter pelo menos 6 digitos."),
  passwordConfirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere."),
});

type TFormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function SignUp() {
  const toast = useToast();
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormDataProps>({
    resolver: yupResolver(signUpSchema),
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

  async function handleCreateAccount({
    email,
    name,
    password,
  }: TFormDataProps) {
    try {
      const response = await api.post("/users", { name, email, password });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível criar a conta";

      toast.show({
        id: "eteste",
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
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
                  errorMessage={errors.passwordConfirm?.message}
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
