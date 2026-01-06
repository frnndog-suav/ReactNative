import { format } from "date-fns";
import { TCreditCard } from "../../../../shared/types/credit-card";

export const useCreditCardViewModel = (creditCard: TCreditCard) => {
  const formattedExpirationDate = format(creditCard.expirationDate, "dd/yyyy");

  const formattedCardNumber = creditCard.number.slice(-4);

  return { creditCard, formattedExpirationDate, formattedCardNumber };
};
