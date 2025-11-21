import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../shared/queries/auth/userLogin.mutation";
import { loginSchema, TLoginFormData } from "./login.schema";

export const useLoginViewModel = () => {
  const { control, handleSubmit } = useForm<TLoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutateAsync(userFormData);
    console.log("userData", userData);
  });

  return { control, onSubmit };
};
