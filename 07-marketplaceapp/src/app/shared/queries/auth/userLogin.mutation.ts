import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth.service";
import { useUserStore } from "../../store/userStore";
import { TLoginHttpParams } from "../../types/http/login";

export function useLoginMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: async (params: TLoginHttpParams) => {
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
}
