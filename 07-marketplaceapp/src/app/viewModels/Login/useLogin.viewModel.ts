import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginFormData } from "./login.schema";

export const useLoginViewModel = () => {
  const { control, handleSubmit } = useForm<TLoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return { control };
};
