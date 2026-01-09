import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { IRequestParamsCreateComment } from "../../interface/request-params-create-comment";
import { createComment } from "../../services/product";

export const useCreateComment = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: IRequestParamsCreateComment) =>
      createComment(comment),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(response.message || "Avaliação enviada com sucesso", "top");
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao enviar validação", "top");
    },
  });

  return mutation;
};
