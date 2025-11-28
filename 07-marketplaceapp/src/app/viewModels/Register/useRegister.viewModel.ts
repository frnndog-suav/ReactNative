import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useRegisterMutation } from "../../shared/queries/auth/userRegister.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { registerSchema, TRegisterFormData } from "./register.schema";

export function useRegisterViewModel() {
  const { setSession, user } = useUserStore();
  const mutation = useRegisterMutation();
  const modals = useAppModal();

  const handleSelectAvatar = () => {
    modals.shownSelection({
      title: "Selecionar foto",
      message: "Escolha um opção",
      options: [
        {
          text: "Galeria",
          icon: "image",
          variant: "primary",
          onPress: () => {
            console.log("teste");
          },
        },
      ],
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "babilonia",
      phone: "11111111111",
      email: "babilonia@gmail.com",
      password: "777777777777777777",
      confirmPassword: "777777777777777777",
    },
  });

  function onSubmit() {
    handleSubmit(async (data) => {
      const { confirmPassword, ...registerData } = data;

      const response = await mutation.mutateAsync({
        name: registerData.name,
        phone: registerData.phone,
        email: registerData.email,
        password: registerData.password,
      });

      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });
    })();
  }

  return {
    errors,
    control,
    onSubmit,
    handleSelectAvatar,
  };
}
