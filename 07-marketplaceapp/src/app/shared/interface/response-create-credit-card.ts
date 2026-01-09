import { ICreditCard } from "./credit-card";

export interface IResponseCreateCreditCard {
  data: ICreditCard;
  message: string;
  success: boolean;
}
