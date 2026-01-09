import { useMutation } from "@tanstack/react-query";
import { IRequestParamsRegister } from "../../interface/request-params-register";
import { register } from "../../services/auth";
import { useUserStore } from "../../store/user-store";

interface IProps {
  onSuccess?: () => void;
}

export const useRegister = ({ onSuccess }: IProps = {}) => {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: async (params: IRequestParamsRegister) => {
      return await register(params);
    },
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });
      onSuccess?.();
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  return mutation;
};
