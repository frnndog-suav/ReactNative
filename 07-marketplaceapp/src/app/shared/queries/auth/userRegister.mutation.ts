import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/auth.service";
import { TRegisterHttpParams } from "../../types/http/register";

export function useRegisterMutation() {
  const mutation = useMutation({
    mutationFn: async (params: TRegisterHttpParams) => {
      return await register(params);
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
