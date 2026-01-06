import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateCreditCardMutation } from "../../../../shared/queries/credit-cards/use-create-credit-card-mutation";
import { creditCardSchema, TCreditCardFormData } from "./credit-card-schema";

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { control, handleSubmit, reset, watch, clearErrors } =
    useForm<TCreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        CVV: "",
        number: "",
        titularName: "",
        expirationDate: "",
      },
    });

  const handleCreateCreditCard = () => {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: "12/30",
      number: "",
    });
  };

  return { control, handleCreateCreditCard };
};
