import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLogin } from "../../shared/queries/auth/user-login";
import { loginSchema, TLoginFormData } from "./schema";

export const useLoginViewModel = () => {
  const { control, handleSubmit } = useForm<TLoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLogin();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutateAsync(userFormData);
    console.log("userData", userData);
  });

  return { control, onSubmit };
};
