import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { submitOrder } from "../../services/orders";

export const useSubmitOrder = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-orders"] });
    },
    onError: (error) => {
      console.error("Error submitting order:", error);
      Toast.error(error.message || "Falha ao enviar o pedido.", "top");
    },
  });

  return mutation;
};
