import { TCreditCard } from "../credit-card";

export type TCreateCreditCardRequestParams = {
  number: string;
  CVV: number;
  expirationDate: string;
};

export type TCreateCreditCardResponse = {
  data: TCreditCard;
  message: string;
  success: boolean;
};
