import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { createCreditCard } from "../../services/credit-card.service";
import { TCreateCreditCardRequestParams } from "../../types/http/create-credit-card";

export const useCreateCreditCardMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (params: TCreateCreditCardRequestParams) =>
      createCreditCard(params),
    onSuccess: (response) => {
      Toast.success(response.message ?? "Cartão criado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["credit-cards"],
      });
    },
  });

  return mutation;
};
