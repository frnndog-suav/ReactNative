import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth.service";
import { TLoginHttpParams } from "../../types/http/login";

export function useLoginMutation() {
  const mutation = useMutation({
    mutationFn: async (params: TLoginHttpParams) => {
      return await login(params);
    },
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  return mutation;
}
