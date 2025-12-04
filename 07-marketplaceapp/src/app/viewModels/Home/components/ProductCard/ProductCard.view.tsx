import { Text, View } from "react-native";
import { useProductCardViewModel } from "./useProductCard.viewModel";

type TProps = ReturnType<typeof useProductCardViewModel>;

export const ProductCardView = (props: TProps) => {
  return (
    <View>
      <Text>{props.product.name}</Text>
    </View>
  );
};
