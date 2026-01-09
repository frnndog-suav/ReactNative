import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { IRequestParamsCreateCreditCard } from "../../interface/request-params-create-credit-card";
import { createCreditCard } from "../../services/credit-card";

export const useCreateCreditCard = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (params: IRequestParamsCreateCreditCard) =>
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
