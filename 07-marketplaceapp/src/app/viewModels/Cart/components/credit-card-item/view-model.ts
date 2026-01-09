import { format } from "date-fns";
import { ICreditCard } from "../../../../shared/interface/credit-card";

export const useCreditCardViewModel = (creditCard: ICreditCard) => {
  const formattedExpirationDate = format(creditCard.expirationDate, "dd/yyyy");

  const formattedCardNumber = creditCard.number.slice(-4);

  return { creditCard, formattedExpirationDate, formattedCardNumber };
};
