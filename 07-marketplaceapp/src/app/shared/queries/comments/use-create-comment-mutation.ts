import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { createComment } from "../../services/product.service";
import { ICreateCommentRequest } from "../../types/http/create-comment";

export const useCreateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: ICreateCommentRequest) => createComment(comment),
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
