import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { submitOrder } from "../../services/orders.service";

export const useSubmitOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (data) => {
      console.log("Order submitted successfully:", data);
    },
    onError: (error) => {
      console.error("Error submitting order:", error);
      Toast.error(error.message || "Falha ao enviar o pedido.", "top");
    },
  });

  return mutation;
};
