import { View } from "react-native";
import { useCartViewModel } from "./use-cart-view-model";

interface IProps extends ReturnType<typeof useCartViewModel> {}

export const CartView = ({}: IProps) => {
  return <View></View>;
};
