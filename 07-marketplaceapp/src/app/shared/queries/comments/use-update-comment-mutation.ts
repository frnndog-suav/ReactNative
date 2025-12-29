import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { updateUserComment } from "../../services/product.service";
import { IUpdateCommentRequest } from "../../types/http/update-comment";

export const useUpdateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: IUpdateCommentRequest) => updateUserComment(comment),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(
        response.message || "Avaliação atualizada com sucesso",
        "top",
      );
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao atualizar validação", "top");
    },
  });

  return mutation;
};
