import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/userRegister";
import { registerSchema, TRegisterFormData } from "./register.schema";

export function useRegisterViewModel() {
  const mutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "tebas",
      phone: "12312312312",
      email: "tebas@gmail.com",
      password: "123",
      confirmPassword: "123",
    },
  });

  function onSubmit() {
    handleSubmit(async (data) => {
      const { confirmPassword, ...registerData } = data;

      await mutation.mutateAsync(registerData);
    });
  }

  return {
    errors,
    control,
    onSubmit,
  };
}
