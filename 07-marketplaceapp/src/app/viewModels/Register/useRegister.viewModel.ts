import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema, TRegisterFormData } from "./register.schema";

export function useRegisterViewModel() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit() {
    handleSubmit(() => {});
  }

  return {
    errors,
    control,
    onSubmit,
  };
}
