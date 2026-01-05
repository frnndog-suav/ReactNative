import { FlatList, SafeAreaViewBase } from "react-native";

import { ProductCartCard } from "./components/product-cart-card";
import { useCartViewModel } from "./use-cart-view-model";

interface IProps extends ReturnType<typeof useCartViewModel> {}

export const CartView = ({ products }: IProps) => {
  return (
    <SafeAreaViewBase>
      <FlatList
        data={products}
        contentContainerClassName="px-6"
        renderItem={({ item }) => <ProductCartCard product={item} />}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
      />
    </SafeAreaViewBase>
  );
};
