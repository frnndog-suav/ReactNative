import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/auth.service";
import { useUserStore } from "../../store/user-store";
import { TRegisterHttpParams } from "../../types/http/register";

type TProps = {
  onSuccess?: () => void;
};

export function useRegisterMutation({ onSuccess }: TProps = {}) {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: async (params: TRegisterHttpParams) => {
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
}
