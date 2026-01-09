import { useMutation } from "@tanstack/react-query";
import { IRequestParamsLogin } from "../../interface/request-params-login";
import { login } from "../../services/auth";
import { useUserStore } from "../../store/user-store";

export const useLogin = () => {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: async (params: IRequestParamsLogin) => {
      return await login(params);
    },
    onSuccess: (data) => {
      setSession(data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  return mutation;
};
