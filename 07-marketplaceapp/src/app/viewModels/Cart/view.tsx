import { FlatList, SafeAreaViewBase } from "react-native";
import { CartFooter } from "./components/cart-footer";
import { CartHeader } from "./components/cart-header";
import { EmptyList } from "./components/empty-list";
import { ProductCartCard } from "./components/product-cart-card";
import { useCartViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useCartViewModel> {}

export const CartView = ({
  products,
  creditCards,
  loadingCreditCards,
  openCartBottomSheet,
}: IProps) => {
  return (
    <SafeAreaViewBase className="flex-1">
      <FlatList
        data={products}
        contentContainerClassName="px-6"
        renderItem={({ item }) => <ProductCartCard product={item} />}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={CartHeader}
        ListFooterComponent={
          products.length > 0 ? (
            <CartFooter
              creditCards={creditCards}
              loadingCreditCards={loadingCreditCards}
              openCartBottomSheet={openCartBottomSheet}
            />
          ) : undefined
        }
      />
    </SafeAreaViewBase>
  );
};
