import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { formatExpirationDateFormApi } from "../../../../shared/helpers/format-expiration-date-form-api";
import { useCreateCreditCard } from "../../../../shared/queries/credit-cards/use-create-credit-card";
import { useBottomSheetStore } from "../../../../shared/store/use-bottom-sheet-store";
import { creditCardSchema, TCreditCardFormData } from "./schema";

export type TFocusedField = "number" | "name" | "expiry" | "cvv";

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCard();

  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { close: closeBottomSheet } = useBottomSheetStore();
  const [focusedField, setFocusedField] = useState<TFocusedField | null>(null);

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

  const isFlipped = focusedField === "cvv";

  const handleFieldFocus = (field: TFocusedField) => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }

    setFocusedField(field);
  };

  const handleFieldBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setFocusedField(null);
    }, 50);
  };

  const watchedValue = watch();

  return {
    control,
    isFlipped,
    focusedField,
    handleCreateCreditCard,
    expirationDateMask,
    cardNumberMask,
    handleFieldFocus,
    handleFieldBlur,
    cardData: {
      number: watchedValue.number,
      name: watchedValue.titularName,
      expiry: watchedValue.expirationDate,
      cvv: watchedValue.CVV,
    },
  };
};
