import { FlatList, SafeAreaViewBase } from "react-native";
import { CartFooter } from "./components/cart-footer";
import { CartHeader } from "./components/cart-header";
import { EmptyList } from "./components/empty-list";
import { ProductCartCard } from "./components/product-cart-card";
import { useCartViewModel } from "./use-cart-view-model";

interface IProps extends ReturnType<typeof useCartViewModel> {}

export const CartView = ({ products, openCartBottomSheet }: IProps) => {
  return (
    <SafeAreaViewBase>
      <FlatList
        data={products}
        contentContainerClassName="px-6"
        renderItem={({ item }) => <ProductCartCard product={item} />}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={CartHeader}
        ListFooterComponent={
          products.length > 0 ? (
            <CartFooter openCartBottomSheet={openCartBottomSheet} />
          ) : undefined
        }
      />
    </SafeAreaViewBase>
  );
};
