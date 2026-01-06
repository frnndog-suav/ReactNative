import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateCreditCardMutation } from "../../../../shared/queries/credit-cards/use-create-credit-card-mutation";
import { useBottomSheetStore } from "../../../../shared/store/bottom-sheet-store";
import { creditCardSchema, TCreditCardFormData } from "./credit-card-schema";

const formatExpirationDateFormApi = (
  dateString: string,
  setError: (message: string) => void
): string => {
  const [month, year] = dateString.split("/").map(Number);

  if (month < 1 || month > 12) {
    setError("Mês inválido");
    throw new Error("Mês inválido");
  }

  if (year < 0 || year > 99) {
    setError("Ano inválido");
    throw new Error("Ano inválido");
  }

  const fullYear = year + 2000;

  const expirationDate = new Date(fullYear, month - 1, 0);
  const isoDate = expirationDate.toISOString().split("T")[0];
  return isoDate;
};

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { close: closeBottomSheet } = useBottomSheetStore();

  const { control, handleSubmit, reset, watch, clearErrors, setError } =
    useForm<TCreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        CVV: "",
        number: "",
        titularName: "",
        expirationDate: "",
      },
    });

  const handleCreateCreditCard = handleSubmit(
    async ({ CVV, expirationDate, number }) => {
      const formattedExpirationDate = formatExpirationDateFormApi(
        expirationDate,
        (message) => {
          setError("expirationDate", { message });
        }
      );

      const formattedNumber = number.replace(/\s/g, "");

      await createCreditCardMutation.mutateAsync({
        CVV: Number(CVV),
        expirationDate: formattedExpirationDate,
        number: formattedNumber,
      });

      closeBottomSheet();
    }
  );

  const expirationDateMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.length < 2) {
      return cleaned;
    }

    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2, 4);

    if (year.length > 0) {
      return `${month}/${year}`;
    }

    return month;
  };

  const cardNumberMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  return {
    control,
    handleCreateCreditCard,
    expirationDateMask,
    cardNumberMask,
  };
};
